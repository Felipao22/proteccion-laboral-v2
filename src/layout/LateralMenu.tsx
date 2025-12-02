import { Layout, Menu } from "antd";
import { Icon } from "@iconify/react";
import { useRouter } from "../hooks/useRouter";

const { Sider } = Layout;

export const LateralMenu = () => {
  const { navigateTo, currentPath } = useRouter();

  const widthIcon = 20;
  const heightIcon = 20;

  const menuItems = [
    {
      key: "/dashboard",
      icon: (
        <Icon
          icon="material-symbols:dashboard"
          width={widthIcon}
          height={heightIcon}
        />
      ),
      label: "Dashboard",
    },
    {
      key: "/dashboard/cargar-archivos",
      icon: (
        <Icon
          icon="material-symbols:upload-file"
          width={widthIcon}
          height={heightIcon}
        />
      ),
      label: "Cargar Archivos",
    },
    {
      key: "/dashboard/cambiar-contraseña",
      icon: (
        <Icon
          icon="hugeicons:reset-password"
          width={widthIcon}
          height={heightIcon}
        />
      ),
      label: "Cambiar Contraseña",
    },
    {
      key: "/dashboard/registrar-empresa",
      icon: (
        <Icon icon="famicons:business" width={widthIcon} height={heightIcon} />
      ),
      label: "Registrar Establecimiento/Obra",
    },
    {
      key: "/dashboard/registrar-empleado",
      icon: (
        <Icon icon="mdi:account-plus" width={widthIcon} height={heightIcon} />
      ),
      label: "Registrar Empleado",
    },
    {
      key: "/dashboard/empleados",
      icon: (
        <Icon
          icon="gravity-ui:person-worker"
          width={widthIcon}
          height={heightIcon}
        />
      ),
      label: "Empleados",
    },
    {
      key: "/dashboard/tipo-archivo",
      icon: (
        <Icon
          icon="icon-park-outline:category-management"
          width={widthIcon}
          height={heightIcon}
        />
      ),
      label: "Agregar tipo de Archivo",
    },
    {
      key: "/dashboard/almacenamiento",
      icon: (
        <Icon
          icon="zondicons:chart-pie"
          width={widthIcon}
          height={heightIcon}
        />
      ),
      label: "Almacenamiento",
    },
    {
      key: "/usuarios",
      icon: <Icon icon="bxs:user" width={widthIcon} height={heightIcon} />,
      label: "Usuarios",
      children: [
        { key: "/usuarios/archivos", label: "Archivos" },
        { key: "/usuarios/perfil", label: "Mi Perfil" },
      ],
    },
  ];

  return (
    <Sider collapsible theme="dark">
      <img
        src="/assets/LOGO CUADRADO blanco.png"
        alt="logo protección laboral"
        className="h-auto w-auto"
      />
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[currentPath]}
        defaultOpenKeys={["/dashboard", "/usuarios"]}
        items={menuItems}
        onClick={(item) => navigateTo(item.key)}
      />
    </Sider>
  );
};
