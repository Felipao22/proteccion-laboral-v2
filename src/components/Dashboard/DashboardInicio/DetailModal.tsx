import { Button, Modal, Descriptions } from "antd";
import type { Branches } from "../../../services/usuariosApi";
import { formatDate } from "../../../lib/parseDate";

interface DetailModalProps {
  open: boolean;
  onClose: () => void;
  branch: Branches | null;
}

export const DetailModal = ({ open, onClose, branch }: DetailModalProps) => {
  if (!branch) return null;

  return (
    <Modal
      title="Detalles de la Empresa"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="close" danger onClick={onClose}>
          Cerrar
        </Button>,
      ]}
      width={600}
    >
      <Descriptions column={1} bordered>
        
        <Descriptions.Item label="Emails">
          {branch.emails && branch.emails.length > 0 ? (
            <div className="flex flex-col gap-1">
              {branch.emails.map((email: string, index: number) => (
                <a key={index} href={`mailto:${email}`} className="text-blue-600 hover:underline">
                  {email}
                </a>
              ))}
            </div>
          ) : (
            <span className="text-gray-400">No hay emails registrados</span>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Ciudad">
          {branch.ciudad || <span className="text-gray-400">No especificada</span>}
        </Descriptions.Item>
        <Descriptions.Item label="Dirección">
          {branch.direccion || <span className="text-gray-400">No especificada</span>}
        </Descriptions.Item>
        <Descriptions.Item label="Teléfono">
          {branch.telefono || <span className="text-gray-400">No especificado</span>}
        </Descriptions.Item>
        <Descriptions.Item label="Registrado">
          {branch.createdAt ? formatDate(new Date(branch.createdAt)) : "-"}
          
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};
