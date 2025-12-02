import { Layout } from "antd";
import { Outlet } from "react-router";
import AppHeader from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

export const LayOutMain = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Content style={{ flex: 1 }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};
