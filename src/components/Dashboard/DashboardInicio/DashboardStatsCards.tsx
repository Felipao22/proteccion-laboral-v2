import { Row, Col, Statistic } from "antd";
import { Icon } from "@iconify/react";

interface DashboardStatsCardsProps {
  totalCompanies: number;
  totalFiles: number;
  isLoadingCompanies: boolean;
  isLoadingFiles: boolean;
}

export const DashboardStatsCards = ({
  totalCompanies,
  totalFiles,
  isLoadingCompanies,
  isLoadingFiles,
}: DashboardStatsCardsProps) => {
  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} lg={12}>
        <div
          className="rounded-xl shadow-md bg-linear-to-br from-[#316FC8] to-[#0F41A2] p-5"
        >
          <Statistic
            title={
              <span className="text-white/90 text-base">
                Total de Empresas
              </span>
            }
            value={totalCompanies ?? 0}
            valueStyle={{ 
              color: "#fff", 
              fontSize: 32, 
              fontWeight: "bold" 
            }}
            prefix={
              <Icon 
                icon="mdi:office-building" 
                className="text-white/90 text-2xl mr-2" 
              />
            }
            loading={isLoadingCompanies}
          />
        </div>
      </Col>
      <Col xs={24} sm={12} lg={12}>
        <div
          className="rounded-xl shadow-md bg-linear-to-br from-[#0F41A2] to-[#316FC8] p-5"
        >
          <Statistic
            title={
              <span className="text-white/90 text-base">
                Total de Archivos
              </span>
            }
            value={totalFiles ?? 0}
            valueStyle={{ 
              color: "#fff", 
              fontSize: 32, 
              fontWeight: "bold" 
            }}
            prefix={
              <Icon 
                icon="mdi:file-document" 
                className="text-white/90 text-2xl mr-2" 
              />
            }
            loading={isLoadingFiles}
          />
        </div>
      </Col>
    </Row>
  );
};
