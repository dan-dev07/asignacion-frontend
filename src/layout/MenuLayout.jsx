import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { getItem } from "./getItem";

export const MenuLayout = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userReducer);
  const [items, setItems] = useState([]);
  
  const Operador = [
    getItem("Contactos", "/contactos", <DesktopOutlined />),
  ];
  const Admin = [
    getItem("Usuarios", "/usuarios", <DesktopOutlined />),
    getItem("Reportes", "/reportes", <DesktopOutlined />),  
  ];

  const roles = {
    Operador,
    Admin,
  };

  useEffect(() => {
    const itemUser = user.rol.flatMap(rol => roles[rol] || []);
    setItems(itemUser);
  }, [user]);
  
  const menuClick = ({ key }) => {
    navigate(key);
  };
  
  return (
    <Menu
      theme="light"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      onClick={menuClick}
    />
  );
};
