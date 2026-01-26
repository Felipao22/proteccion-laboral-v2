import { TablePagination } from "../../../utils/TablePagination";
import { ColumnsBranches } from "./ColumnsBranches";
import { DashboardStatsCards } from "./DashboardStatsCards";
import { Card, Layout, Typography, Space, Select, Button } from "antd";
import { InputSearch } from "../../Common/InputSearch";
import { useDashboardData } from "../../../hooks/useDashboardData";

const { Content } = Layout;
const { Title, Text } = Typography;

export const DashboardSection = () => {
  const {
    setPage,
    pagination,
    searchTerm,
    setSearchTerm,
    filteredData,
    isFetching,
    isFetchingFiles,
    totalFiles,
  } = useDashboardData();

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Content className="p-8 flex justify-center">
        <div className="w-full">
          <Space direction="vertical" size={4} className="mb-6">
            <Title level={2} className="m-0">
              Empresas Registradas
            </Title>
            <Text type="secondary">
              Gestión administrativa de empresas y establecimientos del sistema.
            </Text>
          </Space>
          
          <DashboardStatsCards
            totalCompanies={pagination.total}
            totalFiles={totalFiles}
            isLoadingCompanies={isFetching}
            isLoadingFiles={isFetchingFiles}
          />

          <Card className="mb-6 rounded-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-64 md:w-80">
                <InputSearch
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  placeholder="Buscar empresa..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                <Select
                  placeholder="Estado"
                  className="w-full sm:w-40"
                  options={[
                    { value: "all", label: "Todos" },
                    { value: "active", label: "Activos" },
                    { value: "inactive", label: "Inactivos" },
                  ]}
                />
                <Button 
                  type="primary" 
                  className="w-full sm:w-auto"
                >
                  + Nueva Empresa
                </Button>
              </div>
            </div>
          </Card>
          
          <Card
            bordered={false}
            className="rounded-xl p-0 shadow-sm"
          >
            <TablePagination
              dataSource={filteredData}
              pagination={pagination}
              columns={ColumnsBranches}
              loading={isFetching}
              rowKey="userId"
              onPageChange={(newPage) => setPage(newPage)}
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};
