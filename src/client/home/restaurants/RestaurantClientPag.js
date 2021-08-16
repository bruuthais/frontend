import React, {useEffect, useState} from "react";
import api from "../../../api/api";
import {NavBarClient} from "../../../utils/navbar/client-navbar/NavBarClient";

export function RestaurantClientPag() {
  const [restaurant, setRestaurant] = useState([]);
  useEffect((id) => {
    api.get("/api/Customer/restaurants/${id}").then((response) => {
      const data = response.data;
      setRestaurant(data);
      console.log(response);
    });
  }, []);
  return (
    <div className="home">
      <NavBarClient />
    </div>
  );
}
