import { Layout } from "antd";
import { Outlet } from "react-router";
import { LateralMenu } from "./LateralMenu";

const { Content } = Layout;

export const LayOutUsers = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LateralMenu />
      <Layout>
        <Content style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
