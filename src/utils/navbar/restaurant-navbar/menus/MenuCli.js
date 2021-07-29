import React from "react";
import {Menu, MenuItem, MenuButton} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import "./style.scss";

export function MenuCli() {
  const history = useHistory();
  function handlePicture() {
    history.push("/home-restaurant/profile/picture");
  }
  function handleAdress() {
    history.push("/home-restaurant/profile/adress");
  }
  return (
    <Menu
      menuButton={
        <button className="button-menu-restaurant button-home-restaurant">
          restaurante
        </button>
      }
    >
      <MenuItem onClick={handlePicture}>pagamentos</MenuItem>
      <MenuItem Onclick={handleAdress}>pedidos</MenuItem>

      <MenuItem>fechar</MenuItem>
    </Menu>
  );
}
