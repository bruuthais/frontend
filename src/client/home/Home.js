import React, {useState} from "react";
import "../../assets/styles/home.scss";
import {Category} from "../../utils/category/Category";
import {NavBarClient} from "../../utils/navbar/client-navbar/NavBarClient";
import {RestaurantList} from "../../utils/restaurants/RestaurantList";
import {Search} from "../../utils/search/Search";
export function HomeClient() {
  const [busca, setBusca] = useState("");
  return (
    <div className="home">
      <NavBarClient busca={busca} setBusca={setBusca} />
      <main className="home-main">
        <Search />
        <Category />
        <RestaurantList busca={busca} />
      </main>
    </div>
  );
}
