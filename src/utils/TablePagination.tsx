import { Empty, Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

interface BackendPagination {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
}

interface TablePaginationProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
  pagination: BackendPagination;
  loading?: boolean;
  rowKey?: string;
  onPageChange?: (page: number) => void;
  title?: string;
  footer?: string;
}

export function TablePagination<T extends object>({
  columns,
  dataSource,
  pagination,
  loading = false,
  rowKey = "id",
  onPageChange,
  title,
  footer,
}: TablePaginationProps<T>) {
  const antPagination: TablePaginationConfig = {
    current: pagination.page,
    pageSize: pagination.limit,
    total: pagination.total,
    showSizeChanger: false,
    onChange: (page) => {
      if (onPageChange) onPageChange(page);
    },
  };

  return (
    <>
      <Table<T>
        sticky
        title={() => title}
        columns={columns}
        dataSource={dataSource}
        pagination={antPagination}
        loading={loading}
        rowKey={rowKey}
        scroll={{ x: true }}
        bordered
        size="small"
        footer={() => `${footer} ${pagination.total}`}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Sin registros"
            />
          ),
        }}
      />
    </>
  );
}
