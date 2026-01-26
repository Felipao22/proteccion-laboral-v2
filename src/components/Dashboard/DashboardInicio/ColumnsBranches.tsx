import type { ColumnsType } from "antd/es/table";
import type { Branches } from "../../../services/usuariosApi";
import { Icon } from "@iconify/react";
import { Flex, Tag } from "antd";
import { ActionsDropdown } from "./ActionsDropdown";

export const ColumnsBranches: ColumnsType<Branches> = [
  { title: "Empresa", dataIndex: "nombreEmpresa" },
  { title: "Establecimiento/Obra", dataIndex: "nombreSede" },
  {
    title: "Email Empresa",
    dataIndex: "email",
    render: (text) => <a href={`mailto:${text}`}>{text}</a>,
  },
  {
    title: "Email Jefe",
    dataIndex: "emailJefe",
    render: (text) =>
      text ? (
        <a href={`mailto:${text}`}>{text}</a>
      ) : (
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Icon icon="mdi:minus" />
        </span>
      ),
  },
  { title: "CUIT", dataIndex: "cuit" },
  {
    title: "Activo",
    dataIndex: "active",
    render: (active) => (
      <Flex gap="small" align="center" wrap>
        <Tag color={active ? "green" : "volcano"}>{active ? "SÍ" : "NO"}</Tag>
      </Flex>
    ),
  },
  {
    title: "Acciones",
    key: "acciones",
    render: (_, record) => <ActionsDropdown record={record} />,
  },
];
