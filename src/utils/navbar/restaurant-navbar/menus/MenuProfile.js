import React from "react";
import {Menu, MenuItem} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import "./style.scss";

export function MenuProfile() {
  const history = useHistory();
  function handlePicture() {
    history.push("/home-restaurant/profile/picture");
  }
  function handleAdress() {
    history.push("/home-restaurant/profile/adress");
  }

  function handleMeRestaurant() {
    history.push("/home-restaurant/profile/me");
  }
  return (
    <Menu
      menuButton={
        <button className="button-menu-restaurant button-home-restaurant">
          restaurante
        </button>
      }
    >
      <MenuItem onClick={handleMeRestaurant}>informações</MenuItem>
      <MenuItem onClick={handlePicture}>imagem</MenuItem>
      <MenuItem onClick={handleAdress}>endereço</MenuItem>
    </Menu>
  );
}
