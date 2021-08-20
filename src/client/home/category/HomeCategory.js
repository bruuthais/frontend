import React, {useEffect, useState} from "react";
import "../../../assets/styles/home.scss";
import {NavBarClient} from "../../../utils/navbar/client-navbar/NavBarClient";
import {RestaurantListSearch} from "../../../utils/restaurants-search/RestaurantListSearch";
import {Search} from "../../../utils/search/Search";

export function HomeCategory() {
  const [busca, setBusca] = useState("");
  return (
    <div className="home">
      <NavBarClient busca={busca} setBusca={setBusca} />
      <main className="home-main">
        <Search />
        <RestaurantListSearch busca={busca} />
      </main>
    </div>
  );
}
