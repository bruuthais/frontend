import React, {useState} from "react";
import "../../assets/styles/home.scss";
import {Category} from "../../utils/category/Category";
import {NavBarClientWithSearch} from "../../utils/navbar/client-navbar/NavBarClientWithSearch";
import {RestaurantList} from "../../utils/restaurants/RestaurantList";
export function HomeClient() {
  const [busca, setBusca] = useState("");
  return (
    <div className="home">
      <NavBarClientWithSearch busca={busca} setBusca={setBusca} />
      <main className="home-main">
        <Category />
        <RestaurantList busca={busca} />
      </main>
    </div>
  );
}
