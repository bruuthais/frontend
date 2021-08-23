import React from "react";
import {Menu, MenuItem} from "@szhsin/react-menu";
import {FiUser} from "react-icons/fi";
import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import "./style.scss";

export function MenuProfileUser() {
  const history = useHistory();
  function handleMe() {
    history.push("/home/profile");
  }
  function handleAddress() {
    history.push("/home/profile/address");
  }
  function handleOrders() {
    history.push("/home/orders");
  }

  return (
    <Menu
      menuButton={
        <div className="nav-react-icon nav-react-icon-cart">
          <FiUser size="1.2em" />
        </div>
      }
    >
      <MenuItem onClick={handleMe}>alterar perfil</MenuItem>
      <MenuItem onClick={handleAddress}>endereço</MenuItem>
      <MenuItem onClick={handleOrders}>pedidos</MenuItem>
    </Menu>
  );
}
