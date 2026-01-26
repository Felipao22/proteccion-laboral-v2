import { useEffect, useState } from "react";
import {
  useGetBranchesQuery,
  type Branches,
  type Pagination,
} from "../services/usuariosApi";
import { useGetFilesQuery } from "../services/filesApi";
import { useSearch } from "./useSearch";

export interface UseDashboardDataReturn {
  // Estados
  page: number;
  setPage: (page: number) => void;
  branches: Branches[];
  pagination: Pagination;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredData: Branches[];
  
  // Estados de carga
  isFetching: boolean;
  isFetchingFiles: boolean;
  
  // Datos
  totalFiles: number;
}

/**
 * Hook personalizado para manejar la lógica de datos del dashboard
 * 
 * @returns {UseDashboardDataReturn} Objeto con todos los estados, funciones y datos necesarios
 */
export const useDashboardData = (): UseDashboardDataReturn => {
  // Estado para page
  const [page, setPage] = useState(1);


  // Query al backend usando page
  const { data, isFetching } = useGetBranchesQuery(page);
  
  // Query para obtener archivos
  const { data: filesData, isFetching: isFetchingFiles } = useGetFilesQuery();

  // Estado local de datos
  const [branches, setBranches] = useState<Branches[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    totalPages: 1,
    total: 0,
  });


  // Custom hook de búsqueda
  const { searchTerm, setSearchTerm, filteredData } =
    useSearch<Branches>(branches);

  // Cuando trae datos nuevos
  useEffect(() => {
    if (data) {
      setBranches(data.data);
      setPagination(data.pagination);
    }
  }, [data]);


  // Calcular total de archivos
  const calculateTotalFiles = (): number => {
    if (!filesData) {
      return 0;
    }
    
      return filesData?.pagination.total ?? 0;
  };

  const totalFiles = calculateTotalFiles();

  return {
    page,
    setPage,
    branches,
    pagination,
    searchTerm,
    setSearchTerm,
    filteredData,
    isFetching,
    isFetchingFiles,
    totalFiles,
  };
};
