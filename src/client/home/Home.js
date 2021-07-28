import React from "react";
import "../../assets/styles/home.scss";
import { Category } from "../../utils/category/Category";
import { NavBarClient} from "../../utils/navbar/client-navbar/NavBarClient";
import { RestaurantList } from "../../utils/restaurants/RestaurantList";
import { Search } from "../../utils/search/Search";
export function HomeClient() {
  return (
    <div className="home">
      <NavBarClient />
      <main className="home-main">
        <Search />
        <Category />
        <RestaurantList />
      </main>
    </div>
  );
}