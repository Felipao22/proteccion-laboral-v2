import { useState } from "react";
import { Link } from "react-router";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";

import IMAGE from "../assets/LOGO CUADRADO.png";
import IMAGE2 from "../assets/logo largo.png";

import "./Header.css";
import { Icon } from "@iconify/react";

const { Header } = Layout;

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();

  const drawerMenu = (
    <Menu
      mode="vertical"
      style={{ border: "none", fontSize: "16px", fontWeight: 500 }}
      onClick={() => setOpen(false)}
    >
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="nosotros">
        <Link to="/nosotros">Nosotros</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link to="/services">Servicios</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contacto</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">Iniciar sesión</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="box">
      <Header
        className="appbar"
        style={{
          backgroundColor: "#E9EEF4",
          color: "black",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          height: "auto",
          lineHeight: "80px",
        }}
      >
        <Row
          align="middle"
          justify="space-between"
          style={{ width: "100%", flexWrap: "nowrap" }}
        >
          {/* === Botón menú hamburguesa === */}
          <Col flex="none">
            <Button
              className="menu"
              type="text"
              icon={<Icon icon="material-symbols:menu" />}
              onClick={() => setOpen(true)}
              style={{ fontSize: 22, color: "black", marginRight: 10 }}
            />
            <Drawer
              title="Menú"
              placement="left"
              onClose={() => setOpen(false)}
              open={open}
              width={280}
            >
              {drawerMenu}
            </Drawer>
          </Col>

          {/* === Logos === */}
          <Col flex="auto" style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img
                className="logo"
                src={IMAGE}
                alt="logo"
                style={{ maxHeight: "6rem", paddingRight: "2rem" }}
              />
            </Link>
            <Link to="/">
              <img
                className="logo-largo"
                src={IMAGE2}
                alt="logo largo"
                style={{ height: "40px" }}
              />
            </Link>
          </Col>

          {/* === Navegación y sesión === */}
          <div className="container-botones">
            <div>
              <Link to="/">
                <Button>
                  <span className="font-semibold px-4 py-2">Home</span>
                </Button>
              </Link>
              <Link to="/nosotros">
                <Button>
                  <span className="font-semibold px-4 py-2">Nosotros</span>
                </Button>
              </Link>
              <Link to="/services">
                <Button>
                  <span className="font-semibold px-4 py-2">Servicios</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button>
                  <span className="font-semibold px-4 py-2">Contacto</span>
                </Button>
              </Link>
            </div>
            <div className="log">
              <Link to="/login">
                <Button>
                  {" "}
                  <span className="font-semibold px-4 py-2">
                    Iniciar sesión
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Header>
    </div>
  );
}
