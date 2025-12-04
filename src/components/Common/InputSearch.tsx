import { Input } from "antd";
import type React from "react";

/**
 * Props para el componente InputSearch.
 * @interface InputSearchProps
 * @property {string} searchTerm - El término de búsqueda actual
 * @property {(value: string) => void} onSearchChange - Función que se llama cuando cambia el término de búsqueda
 * @property {string} [placeholder] - Texto de placeholder opcional para el campo de búsqueda
 * @property {string} [label] - Etiqueta opcional para el campo de búsqueda
 */

interface InputSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

/**
 * Componente de búsqueda reutilizable para tablas.
 *
 * Este componente proporciona una interfaz de búsqueda consistente para tablas,
 * utilizando Ant Input.Search con estilos predefinidos
 *
 * @param {Object} props - Props del componente TableSearch.
 * @param {string} props.searchTerm - El término de búsqueda actual.
 * @param {(value: string) => void} props.onSearchChange - Función que se llama cuando cambia el término de búsqueda.
 * @param {string} [props.placeholder] - Texto de placeholder opcional para el campo de búsqueda.
 * @param {string} [props.label] - Etiqueta opcional para el campo de búsqueda.
 * @example
 * ```tsx
 * <TableSearch
 *   searchTerm={searchTerm}
 *   onSearchChange={setSearchTerm}
 *   placeholder="Buscar por nombre..."
 *   label="Filtrar resultados"
 * />
 * ```
 */

export const InputSearch: React.FC<InputSearchProps> = ({
  searchTerm,
  onSearchChange,
  placeholder,
}) => {
  return (
    <Input.Search
      placeholder={placeholder ?? "Buscar..."}
      onChange={(e) => onSearchChange(e.target.value)}
      value={searchTerm}
      allowClear
      style={{ width: 260 }}
    />
  );
};
