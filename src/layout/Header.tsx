import { useState } from "react";
import { Link } from "react-router";
import { Layout, Menu, Button, Drawer } from "antd";

import IMAGE from "/assets/LOGO CUADRADO.png";
import IMAGE2 from "/assets/logo largo.png";

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
      <Menu.Item key="servicios">
        <Link to="/servicios">Servicios</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contacto</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">Iniciar sesión</Link>
      </Menu.Item>
    </Menu>
  );

  type LinkItem = {
    key: number;
    link: string;
    text: string;
  };

  const Links: LinkItem[] = [
    { key: 1, link: "/", text: "HOME" },
    { key: 2, link: "/nosotros", text: "NOSOTROS" },
    { key: 3, link: "/servicios", text: "SERVICIOS" },
    { key: 4, link: "/contact", text: "CONTACTO" },
  ];

  return (
    <>
      <Header
        className="flex items-center"
        style={{
          backgroundColor: "#E9EEF4",
          padding: "0 20px",
          height: "80px",
        }}
      >
        <div className="w-full max-w-auto mx-auto flex items-center justify-between">
          {/* === Botón menú hamburguesa === */}
          <div className="flex items-center gap-6">
            <Button
              className="block md:hidden! text-black mr-2.5"
              type="text"
              icon={<Icon icon="material-symbols:menu" />}
              onClick={() => setOpen(true)}
              style={{ fontSize: 22 }}
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
          </div>

          {/* === Logos === */}
          <div className="flex flex-1 justify-center md:flex-none md:justify-start items-center">
            <Link to="/">
              <img
                className="hidden md:block h-24 xl:pr-8 p-0"
                src={IMAGE}
                alt="logo"
              />
              <img
                className="block md:hidden h-12 mx-auto"
                src={IMAGE2}
                alt="logo largo"
              />
            </Link>
          </div>

          {/* === Navegación y sesión === */}
          <div className="hidden md:flex flex-row justify-start items-center w-screen h-auto m-0 p-0">
            {Links &&
              Links.map((item) => (
                <div key={item.key}>
                  <Link to={item.link}>
                    <Button
                      className="hover:border-transparent! focus:outline-hidden!"
                      color="default"
                      variant="text"
                    >
                      <span className="font-semibold px-4 py-2">
                        {item.text}
                      </span>
                    </Button>
                  </Link>
                </div>
              ))}
          </div>
          <div className="hidden md:block">
            <Link to="/login">
              <Button
                className="hover:border-transparent! focus:outline-hidden!"
                color="default"
                variant="text"
              >
                <span className="font-semibold px-4 py-2">INICIAR SESIÓN</span>
              </Button>
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
}
