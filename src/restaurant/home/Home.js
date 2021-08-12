import React, {useEffect, useState} from "react";
import api from "../../api/api";
import {NavBarRestaurant} from "../../utils/navbar/restaurant-navbar/NavBarRestaurant";

export function HomeRestaurant() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    api.get("/api/Restaurant/me").then((response) => {
      const data = response.data;
      setProfile(data);
      console.log(response);
    });
  }, []);
  return (
    <div>
      <NavBarRestaurant />
      <h1>Bem vindo(a)!</h1>
      <h2>{profile.name}</h2>
      <img
        src={profile.logoUrl}
        className="img-logo-home"
        alt="logo do restaurante"
      ></img>
    </div>
  );
}
