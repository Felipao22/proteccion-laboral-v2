import { Card, Button, Tooltip } from "antd";
import { Icon } from "@iconify/react";
import type { File } from "../../../services/usuariosApi";
import { formatDate } from "../../../lib/parseDate";
import { useLazyGetDownloadFileQuery } from "../../../services/filesApi";
import { NotificationFailure, NotificationSuccess } from "../../Common/Notifications";

interface FileCardProps {
  file: File;
}

export const FileCard = ({ file }: FileCardProps) => {
  const [getDownloadFile, { isLoading: isDownloading }] = useLazyGetDownloadFileQuery();

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const getFileIcon = (type: string): string => {
    const typeLower = type.toLowerCase();
    if (typeLower.includes("pdf")) return "mdi:file-pdf-box";
    if (typeLower.includes("word") || typeLower.includes("doc")) return "mdi:file-word-box";
    if (typeLower.includes("excel") || typeLower.includes("xls")) return "mdi:file-excel-box";
    if (typeLower.includes("image")) return "mdi:file-image-box";
    if (typeLower.includes("zip") || typeLower.includes("rar")) return "mdi:folder-zip";
    return "mdi:file-document";
  };


  const getFileIconColor = (type: string): string => {
    const typeLower = type.toLowerCase();
    if (typeLower.includes("pdf")) return "text-red-600";
    if (typeLower.includes("word") || typeLower.includes("doc")) return "text-blue-600";
    if (typeLower.includes("xlsx") || typeLower.includes("xls")) return "text-green-600";
    if (typeLower.includes("image")) return "text-yellow-600";
    if (typeLower.includes("zip") || typeLower.includes("rar")) return "text-purple-600";
    return "text-gray-600";
  };

  const handleDownload = async () => {
    try {
      const blob = await getDownloadFile(file.id).unwrap();
      
      // Crear URL temporal y descargar
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      NotificationSuccess("Archivo descargado correctamente");
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
      NotificationFailure("Error al descargar el archivo");
    }
  };

  return (
    <Card
      className="hover:shadow-lg transition-all duration-300 border border-gray-200"
      actions={[
        <Tooltip title="Descargar archivo" key="download">
          <Button
            type="text"
            icon={<Icon icon="mdi:download" className="text-xl" />}
            onClick={handleDownload}
            loading={isDownloading}
            className="w-full"
          >
            Descargar
          </Button>
        </Tooltip>,
      ]}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Icon
            icon={getFileIcon(file.type)}
            className={`text-6xl ${getFileIconColor(file.type)}`}
          />
        </div>
        <Tooltip title={file.name}>
          <h3 className="font-semibold text-base mb-2 line-clamp-2 min-h-12">
            {file.name}
          </h3>
        </Tooltip>
        <div className="flex flex-col gap-2 w-full text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <Icon icon="mdi:file-outline" className="text-base" />
            <span>{formatFileSize(file.size)}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icon icon="mdi:calendar-outline" className="text-base" />
            <span>{formatDate(new Date(file.createdAt))}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
