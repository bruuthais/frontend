import React, {useState} from "react";
import "../../../assets/styles/home.scss";
import {Category} from "../../../utils/category/Category";
import {NavbarClient} from "../../../utils/navbar/client-navbar/NavBarClient";
import {NavBarClientWithSearch} from "../../../utils/navbar/client-navbar/NavBarClientWithSearch";
import {RestaurantListCategory} from "../../../utils/restaurants-category/RestaurantListCategory";

export function HomeCategory() {
  const [busca, setBusca] = useState("");
  return (
    <div className="home">
      <NavBarClientWithSearch busca={busca} setBusca={setBusca} />
      <main className="home-main">
        <Category />
        <RestaurantListCategory busca={busca} />
      </main>
    </div>
  );
}
