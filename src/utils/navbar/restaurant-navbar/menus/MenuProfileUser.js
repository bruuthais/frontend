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
  function handleAdress() {
    history.push("/home/profile/address");
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
      <MenuItem onClick={handleAdress}>endereço</MenuItem>
    </Menu>
  );
}
