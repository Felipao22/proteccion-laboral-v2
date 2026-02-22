import { Row, Col, Statistic } from "antd";
import { Icon } from "@iconify/react";
import type { Branches } from "../../../services/usuariosApi";

interface DashboardStatsCardsProps {
  totalCompanies: number;
  totalFiles: number;
  isLoadingCompanies: boolean;
  isLoadingFiles: boolean;
  filteredData: Branches[];
}

export const DashboardStatsCards = ({
  totalCompanies,
  totalFiles,
  isLoadingCompanies,
  isLoadingFiles,
  filteredData,
}: DashboardStatsCardsProps) => {
  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} lg={12}>
        <div className="flex flex-col gap-4 justify-center">
          <div className={`flex flex-row gap-4 rounded-xl shadow-md bg-linear-to-br from-[#316FC8] to-[#0F41A2] p-5 ${filteredData?.filter((item) => !item.active).length > 0 ? 'justify-between' : 'justify-start'}`}>
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
            {filteredData?.filter((item) => item.deleted).length > 0 && (
              <Statistic
                title={
                  <span className="text-white/90 text-base">
                    Empresas Eliminadas
                  </span>
                }
                value={filteredData?.filter((item) => item.deleted).length as number}
                valueStyle={{
                  color: "#fff",
                  fontSize: 32,
                  fontWeight: "bold"
                }}
                prefix={
                  <Icon
                    icon="mdi:delete"
                    className="text-white/90 text-2xl mr-2"
                  />
                }
                loading={isLoadingCompanies}
              />
            )}
            {filteredData?.filter((item) => !item.active && !item.deleted).length > 0 && (
              <Statistic
                title={
                  <span className="text-white/90 text-base">
                    Empresas Inactivas
                  </span>
                }
                value={filteredData?.filter((item) => !item.active && !item.deleted).length as number}
                valueStyle={{
                  color: "#fff",
                  fontSize: 32,
                  fontWeight: "bold"
                }}
                prefix={
                  <Icon
                    icon="mdi:block-helper"
                    className="text-white/90 text-2xl mr-2"
                  />
                }
                loading={isLoadingCompanies}
              />
            )}


          </div>

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
    </Row >
  );
};
