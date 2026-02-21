import { Button, Modal, Typography } from "antd";

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  action: () => void | Promise<void>;
  isLoading: boolean;
  okText?: string;
  cancelText?: string;
  children?: React.ReactNode;
  description?: string;
}

export const ConfirmModal = ({ open, onClose, title, action, isLoading, okText = "Confirmar", cancelText = "Cancelar", children, description }: ConfirmModalProps) => {
  const handleConfirm = () => {
    const result = action();
    if (result instanceof Promise) {
      result.finally(() => {});
    }
  };

  return (
    <Modal
      className="p-4"
      open={open}
      onCancel={onClose}
      title={title}
      footer={
        <div className="flex justify-between gap-2 mt-4 pt-4">
          <Button color="danger" variant="outlined" onClick={onClose} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button type="primary" onClick={handleConfirm} loading={isLoading}>
            {okText}
          </Button>
        </div>
      }
      >
      <Typography.Text className="text-sm text-gray-500">{description}</Typography.Text>
      {children}
    </Modal>
  );
};