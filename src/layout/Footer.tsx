import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Layout, Row, Col, Typography, Space } from "antd";
import { Icon } from "@iconify/react";

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

export default function Footer() {
  const year = new Date().getFullYear();

  // Scroll to top on route change
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <AntFooter style={{ backgroundColor: "#fafafa", padding: "40px 24px" }}>
      <ScrollToTop />

      {/* Redes sociales */}
      <Row
        justify="space-between"
        align="middle"
        style={{
          borderBottom: "1px solid #e8e8e8",
          paddingBottom: 16,
          marginBottom: 24,
        }}
      >
        <Col xs={24} md={12} style={{ marginBottom: 12 }}>
          <Text strong>Conocé nuestras redes:</Text>
        </Col>
        <Col xs={24} md={12}>
          <Space size="large">
            <a
              href="https://www.facebook.com/people/Proteccion-Laboral/100090978247598/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="mdi:facebook"
                width="22"
                height="22"
                color="#1677ff"
              />
            </a>
            <a
              href="https://www.instagram.com/proteccion_laboral/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="mdi:instagram"
                width="22"
                height="22"
                color="#d63384"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/proteccion-laboral-b2a21a26b/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="mdi:linkedin"
                width="22"
                height="22"
                color="#0a66c2"
              />
            </a>
          </Space>
        </Col>
      </Row>

      {/* Contenido principal */}
      <Row gutter={[24, 24]} justify="space-between">
        {/* Columna 1 */}
        <Col xs={24} md={8} lg={6}>
          <Title level={5}>Protección Laboral</Title>
          <Text type="secondary">
            Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.
          </Text>
        </Col>

        {/* Columna 2 */}
        <Col xs={24} md={8} lg={6}>
          <Title level={5}>Navegar</Title>
          <Space direction="vertical">
            <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/iniciar-sesion">Iniciar sesión</Link>
          </Space>
        </Col>

        {/* Columna 3 */}
        <Col xs={24} md={8} lg={6}>
          <Title level={5}>Contacto</Title>
          <Space direction="vertical">
            <Text className="text-reset">
              <Icon icon="mdi:home" className="me-2" /> San Luis, ARG.
            </Text>
            <a
              href="mailto:info@proteccionlaboral.com.ar"
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >
              <Icon icon="mdi:email" /> info@proteccionlaboral.com.ar
            </a>
            <a
              href="https://wa.me/542664678961"
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >
              <Icon icon="mdi:whatsapp" /> 2664 678961
            </a>
            <a
              href="https://wa.me/542664722453"
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >
              <Icon icon="mdi:whatsapp" /> 2664 722453
            </a>
          </Space>
        </Col>
      </Row>

      {/* Copyright */}
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          paddingTop: 16,
          borderTop: "1px solid #e8e8e8",
        }}
      >
        <Text type="secondary">
          © {year} Copyright:{" "}
          <a
            href="https://www.linkedin.com/in/felipeaviani/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Felipe Aviani</strong>
          </a>
        </Text>
      </div>
    </AntFooter>
  );
}
