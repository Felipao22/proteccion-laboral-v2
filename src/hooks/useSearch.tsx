import { useState, useMemo } from "react";

/**
 * Hook personalizado para manejar la búsqueda
 *
 * @template T - Tipo genérico que extiende Record<string, any> para los datos de la tabla
 * @param {T[]} data - Array de datos a filtrar
 * @returns {Object} Objeto con el estado y funciones de búsqueda
 * @property {string} searchTerm - El término de búsqueda actual
 * @property {function} setSearchTerm - Función para actualizar el término de búsqueda
 * @property {T[]} filteredData - Array de datos filtrados según el término de búsqueda
 *
 * @example
 * ```tsx
 * // Uso básico
 * const { searchTerm, setSearchTerm, filteredData } = useSearch(productos);
 *
 * // Uso con tipo específico
 * interface Usuario {
 *   id: number;
 *   nombre: string;
 *   email: string;
 * }
 *
 * const { searchTerm, setSearchTerm, filteredData } = useSearch<Usuario>(usuarios);
 * ```
 *
 * @example
 * ```tsx
 * // Ejemplo de implementación completa
 * function TablaEmpresas() {
 *   const [usuarios, setUsuarios] = useState<Usuario[]>([]);
 *   const { searchTerm, setSearchTerm, filteredData } = useSearch(usuarios);
 *
 *   return (
 *     <div>
 *       <SearchInput
 *         searchTerm={searchTerm}
 *         onSearchChange={setSearchTerm}
 *         placeholder="Buscar usuarios..."
 *       />
 *       <Table data={filteredData} />
 *     </div>
 *   );
 * }
 * ```
 */
export const useSearch = <T extends Record<string, any>>(data: T[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Filtra un elemento según el término de búsqueda
   * @param {T} item - Elemento a filtrar
   * @param {string} searchTerm - Término de búsqueda
   * @returns {boolean} true si el elemento coincide con la búsqueda
   */
  const filterDataByField = (item: T, searchTerm: string): boolean => {
    const searchLower = searchTerm.toLowerCase();

    const itemValues = Object.values(item).map((value) =>
      value === null ? "" : String(value).toLowerCase()
    );

    return itemValues.some((value) => value.includes(searchLower));
  };

  /**
   * Datos filtrados según el término de búsqueda
   * Se memoiza para optimizar el rendimiento
   */
  const filteredData = useMemo(
    () =>
      data.filter(
        (item) => searchTerm === "" || filterDataByField(item, searchTerm)
      ),
    [data, searchTerm]
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
};
