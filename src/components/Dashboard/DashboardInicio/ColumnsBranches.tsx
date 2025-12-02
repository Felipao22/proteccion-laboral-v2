import type { ColumnsType } from "antd/es/table";
import type { Branches } from "../../../services/usuariosApi";
import { formatDate } from "../../../lib/parseDate";
import { Icon } from "@iconify/react";
import { Flex, Tag } from "antd";

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
  {
    title: "Emails",
    dataIndex: "emails",
    render: (emails) =>
      emails && emails.length > 0 ? (
        <span>
          {emails.map((email: string, index: number) => (
            <span key={index}>
              <a href={`mailto:${email}`}>{email}</a>
              {index < emails.length - 1 && ", "}
            </span>
          ))}
        </span>
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
  { title: "Ciudad", dataIndex: "ciudad" },
  { title: "Dirección", dataIndex: "direccion" },
  {
    title: "Teléfono",
    dataIndex: "telefono",
    render: (value) =>
      value || (
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
  {
    title: "Registrado",
    dataIndex: "createdAt",
    render: (date) => formatDate(new Date(date)),
  },
  {
    title: "Activo",
    dataIndex: "active",
    render: (active) => (
      <Flex gap="small" align="center" wrap>
        <Tag color={active ? "green" : "volcano"}>{active ? "SÍ" : "NO"}</Tag>
      </Flex>
    ),
  },
];
