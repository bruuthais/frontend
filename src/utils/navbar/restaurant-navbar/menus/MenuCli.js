import React from "react";
import {Menu, MenuItem, MenuButton} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import "./style.scss";

export function MenuCli() {
  const history = useHistory();
  function handlePayments() {
    history.push("/home-restaurant/manager/payments");
  }
  function handleOrdered() {
    history.push("/home-restaurant/manager/orders");
  }
  return (
    <Menu
      menuButton={
        <button className="button-menu-restaurant button-home-restaurant">
          restaurante
        </button>
      }
    >
      <MenuItem onClick={handlePayments}>pagamentos</MenuItem>
      <MenuItem Onclick={handleOrdered}>pedidos</MenuItem>

      <MenuItem>fechar</MenuItem>
    </Menu>
  );
}
