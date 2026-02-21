import { useState } from "react";
import { Button, Dropdown, Modal, message } from "antd";
import type { MenuProps as AntMenuProps } from "antd";
import { Icon } from "@iconify/react";
import { usePutBlockOrUnblockUserMutation, type Branches } from "../../../services/usuariosApi";
import { DetailModal } from "./DetailModal";
import { useRouter } from "../../../hooks/useRouter";
import { NotificationFailure, NotificationSuccess } from "../../Common/Notifications";
import { ConfirmModal } from "../../Common/ConfirmModal";

interface ActionsDropdownProps {
  record: Branches;
}

export const ActionsDropdown = ({ record }: ActionsDropdownProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const { navigateTo } = useRouter();

  //Mutation Redux
  const [putBlockOrUnblockUser, {isLoading: isLoadingBlockOrUnblock}] = usePutBlockOrUnblockUserMutation();

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
    setConfirmModalOpen(true);
  };

  const handleConfirmBloquear = async () => {
    try {
      const response = await putBlockOrUnblockUser(record.email).unwrap();
      if (response) {
        NotificationSuccess(response.message);
        setConfirmModalOpen(false);
      }
    } catch (error: any) {
      console.error("Error al bloquear/desbloquear usuario", error);
      NotificationFailure(error.data?.error ?? "Ocurrió un error inesperado");
    }
  };

  const menuItems: AntMenuProps["items"] = [
    {
      key: "ver-detalles",
      label: "Ver Detalles",
      icon: <Icon width={18} icon="mdi:eye-outline" />,
      onClick: handleVerDetalles,
    },
    {
      key: "ver-archivos",
      label: "Ver Archivos",
      icon: <Icon width={18}  icon="mdi:file-document-outline" />,
      onClick: handleVerArchivos,
    },
    {
      type: "divider",
    },
    {
      key: "bloquear",
      label: record.active ? "Bloquear" : "Desbloquear",
      icon: <Icon width={18}  icon={record.active ? "mdi:lock-outline" : "mdi:lock-open-outline"} />,
      onClick: handleBloquear,
      danger: record.active,
      disabled: isLoadingBlockOrUnblock,
    },
    {
      key: "eliminar",
      label: "Eliminar",
      icon: <Icon width={18}  icon="mdi:delete-outline" />,
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
      <ConfirmModal title={`¿Está seguro de ${record.active ? "bloquear" : "desbloquear"} esta empresa?`} description={`Se ${record.active ? "bloqueará" : "desbloqueará"} la empresa: ${record.nombreEmpresa}`} okText={record.active ? "Si, Bloquear" : "Si, Desbloquear"} cancelText="Cancelar" open={confirmModalOpen} onClose={() => setConfirmModalOpen(false)} action={handleConfirmBloquear} isLoading={isLoadingBlockOrUnblock} />
    </>
  );
};
