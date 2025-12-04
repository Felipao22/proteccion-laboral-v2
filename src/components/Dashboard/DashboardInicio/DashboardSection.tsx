import { useEffect, useState } from "react";
import {
  useGetBranchesQuery,
  type Branches,
} from "../../../services/usuariosApi";
import { TablePagination } from "../../../utils/TablePagination";
import { ColumnsBranches } from "./ColumnsBranches";
import { Card, Layout, Typography, Space, Input, Select, Button } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

export const DashboardSection = () => {
  // Estado para page
  const [page, setPage] = useState(1);

  // Query al backend usando page
  const { data, isFetching } = useGetBranchesQuery(page);

  // Estado local de datos
  const [branches, setBranches] = useState<Branches[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    totalPages: 1,
    total: 0,
  });

  // Cuando trae datos nuevos
  useEffect(() => {
    if (data) {
      setBranches(data.data);
      setPagination(data.pagination);
    }
  }, [data]);

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Content
        style={{ padding: "32px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "100%" }}>
          <Space direction="vertical" size={4} style={{ marginBottom: 24 }}>
            <Title level={2} style={{ margin: 0 }}>
              Empresas Registradas
            </Title>
            <Text type="secondary">
              Gestión administrativa de empresas y establecimientos del sistema.
            </Text>
          </Space>
          <Card
            style={{
              marginBottom: 24,
              borderRadius: 12,
            }}
          >
            <Space size="middle" wrap>
              <Input.Search
                placeholder="Buscar empresa..."
                allowClear
                style={{ width: 260 }}
              />

              <Select
                placeholder="Estado"
                style={{ width: 160 }}
                options={[
                  { value: "all", label: "Todos" },
                  { value: "active", label: "Activos" },
                  { value: "inactive", label: "Inactivos" },
                ]}
              />

              <Button type="primary">+ Nueva Empresa</Button>
            </Space>
          </Card>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              padding: 0,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <TablePagination
              dataSource={branches}
              pagination={pagination}
              columns={ColumnsBranches}
              loading={isFetching}
              rowKey="userId"
              onPageChange={(newPage) => setPage(newPage)}
              footer="Total de Empresas:"
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};
