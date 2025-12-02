import { useEffect, useState } from "react";
import {
  useGetBranchesQuery,
  type Branches,
} from "../../../services/usuariosApi";
import { TablePagination } from "../../../utils/TablePagination";
import { ColumnsBranches } from "./ColumnsBranches";

export const DashboardSection = () => {
  // Estado para page
  const [page, setPage] = useState(1);

  // Query al backend usando page
  const { data, isFetching } = useGetBranchesQuery(page);

  // Estado local de datos
  const [branches, setBranches] = useState<Branches[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    totalPages: 1,
    total: 0,
  });

  // Cuando trae datos nuevos
  useEffect(() => {
    if (data) {
      setBranches(data.data);
      setPagination(data.pagination);
    }
  }, [data]);

  return (
    <section className="flex justify-center items-center min-h-dvh">
      <div style={{ width: "100%" }}>
        <TablePagination
          dataSource={branches}
          pagination={pagination}
          columns={ColumnsBranches}
          loading={isFetching}
          rowKey="userId"
          onPageChange={(newPage) => setPage(newPage)}
          title="Empresas y Establecimientos Registrados"
          footer="Total de Empresas:"
        />
      </div>
    </section>
  );
};
