import { useState, useEffect } from "react";
import { Layout, Typography, Card, Empty, Spin, Pagination } from "antd";
import { useGetFilesByUserEmailQuery } from "../../../services/filesApi";
import { FileCard } from "./FileCard";
import { useRouter } from "../../../hooks/useRouter";

const { Content } = Layout;
const { Title, Text } = Typography;

interface ArchivosSectionProps {
  userEmail: string;
  initialPage?: number;
}

export const ArchivosSection = ({ userEmail, initialPage = 1 }: ArchivosSectionProps) => {
  const { updateQueryParams, searchParams } = useRouter();
  
  // Obtener la página actual de la URL
  const getPageFromUrl = () => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      const parsedPage = parseInt(pageParam, 10);
      if (!isNaN(parsedPage) && parsedPage > 0) {
        return parsedPage;
      }
    }
    return initialPage;
  };
  
  const [page, setPage] = useState(() => getPageFromUrl());
  
  const { data, isLoading, isFetching, error } = useGetFilesByUserEmailQuery({
    email: userEmail,
    page,
  });

  // Sincronizar page con URL solo cuando cambia la página en la URL o el email
  useEffect(() => {
    const newPage = getPageFromUrl();
    if (newPage !== page) {
      setPage(newPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, userEmail]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // Actualizar URL con el nuevo page
    updateQueryParams({ page: newPage });
    // Scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) {
    return (
      <Layout className="min-h-screen bg-gray-100">
        <Content className="p-8 flex justify-center items-center">
          <Card className="w-full max-w-4xl">
            <Empty
              description="Error al cargar los archivos"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          </Card>
        </Content>
      </Layout>
    );
  }

  const files = data?.data || [];
  const pagination = data?.pagination;

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Content className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <Title level={2} className="m-0">
                Archivos de la Empresa
              </Title>
              <Text type="secondary" className="text-base">
                {userEmail}
              </Text>
            </div>
            {pagination && (
              <div className="text-right">
                <Text className="text-lg font-semibold">
                  Total: {pagination.total} archivos
                </Text>
              </div>
            )}
          </div>

          {isLoading && !data ? (
            <Card className="w-full">
              <div className="flex justify-center items-center py-20">
                <Spin size="large" />
              </div>
            </Card>
          ) : files.length === 0 ? (
            <Card className="w-full">
              <Empty
                description="No hay archivos disponibles para esta empresa"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            </Card>
          ) : (
            <>
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6 ${isFetching ? 'opacity-50' : ''}`}>
                {files.map((file) => (
                  <FileCard key={file.id} file={file} />
                ))}
              </div>

              {pagination && pagination.totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <Pagination
                    current={page}
                    total={pagination.total}
                    pageSize={pagination.limit}
                    showSizeChanger={false}
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} de ${total} archivos`
                    }
                    onChange={handlePageChange}
                    className="bg-white rounded-lg shadow-sm"
                    style={{
                      padding: "10px"
                    }}
                    responsive={true}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </Content>
    </Layout>
  );
};
