import { useState } from "react";
import { Button, Dropdown, Modal, message } from "antd";
import type { MenuProps as AntMenuProps } from "antd";
import { Icon } from "@iconify/react";
import type { Branches } from "../../../services/usuariosApi";
import { DetailModal } from "./DetailModal";
import { useRouter } from "../../../hooks/useRouter";

interface ActionsDropdownProps {
  record: Branches;
}

export const ActionsDropdown = ({ record }: ActionsDropdownProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { navigateTo } = useRouter();

  const handleVerDetalles = () => {
    setModalOpen(true);
  };

  const handleVerArchivos = () => {
    navigateTo(`/archivos?email=${record.email}&page=1`);
  };

  const handleEliminar = () => {
    Modal.confirm({
      title: "¿Está seguro de eliminar esta empresa?",
      content: `Se eliminará la empresa: ${record.nombreEmpresa}`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk: () => {
        message.success("Empresa eliminada correctamente");
        // TODO: Implementar lógica de eliminación
      },
    });
  };

  const handleBloquear = () => {
    const action = record.active ? "bloquear" : "desbloquear";
    Modal.confirm({
      title: `¿Está seguro de ${action} esta empresa?`,
      content: `Se ${action === "bloquear" ? "bloqueará" : "desbloqueará"} la empresa: ${record.nombreEmpresa}`,
      okText: action === "bloquear" ? "Bloquear" : "Desbloquear",
      okType: action === "bloquear" ? "danger" : "default",
      cancelText: "Cancelar",
      onOk: () => {
        message.success(`Empresa ${action === "bloquear" ? "bloqueada" : "desbloqueada"} correctamente`);
        // TODO: Implementar lógica de bloqueo/desbloqueo
      },
    });
  };

  const menuItems: AntMenuProps["items"] = [
    {
      key: "ver-detalles",
      label: "Ver Detalles",
      icon: <Icon icon="mdi:eye-outline" />,
      onClick: handleVerDetalles,
    },
    {
      key: "ver-archivos",
      label: "Ver Archivos",
      icon: <Icon icon="mdi:file-document-outline" />,
      onClick: handleVerArchivos,
    },
    {
      type: "divider",
    },
    {
      key: "bloquear",
      label: record.active ? "Bloquear" : "Desbloquear",
      icon: <Icon icon={record.active ? "mdi:lock-outline" : "mdi:lock-open-outline"} />,
      onClick: handleBloquear,
      danger: record.active,
    },
    {
      key: "eliminar",
      label: "Eliminar",
      icon: <Icon icon="mdi:delete-outline" />,
      onClick: handleEliminar,
      danger: true,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
        <Button icon={<Icon icon="mdi:dots-horizontal" />} />
      </Dropdown>
      <DetailModal open={modalOpen} onClose={() => setModalOpen(false)} branch={record} />
    </>
  );
};
