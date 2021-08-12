import React, {useEffect, useState} from "react";
import api from "../../api/api";
import {NavBarRestaurant} from "../../utils/navbar/restaurant-navbar/NavBarRestaurant";
import "./style.scss";
export function HomeRestaurant() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    api.get("/api/Restaurant/me").then((response) => {
      const data = response.data;
      setProfile(data);
      console.log(response);
    });
  }, []);

  async function handleOpenRestaurant() {
    await api
      .post(`api/Restaurant/me/open`, {
        isOpen: "",
      })
      .then(function (resposta) {
        alert("Você abriu o restaurante");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  async function handleCloseRestaurant() {
    await api
      .post(`api/Restaurant/me/close`, {
        isOpen: "",
      })
      .then(function (resposta) {
        alert("Você fechou o restaurante");
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <div className="home-restaurant">
      <NavBarRestaurant />
      <div className="home-profile-restaurant">
        <h1 className="home-profile-welcome">Seja bem vindo(a)!</h1>
        <h2 className="home-profile-restaurant-name">{profile.name}</h2>
        <div className="home-img-profile-restaurant">
          <img
            src={profile.logoUrl}
            className="img-logo-home"
            alt="logo do restaurante"
          ></img>
        </div>
        <button className="button-open" onClick={handleOpenRestaurant}>
          Abrir restaurante
        </button>
        <button className="button-close" onClick={handleCloseRestaurant}>
          Fechar restaurante
        </button>
      </div>
    </div>
  );
}
