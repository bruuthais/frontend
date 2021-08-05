import React, {useState} from "react";
import "./styleRestaurant.scss";
export function SearchRestaurantMenu(handleFilter) {
  return (
    <div className="search-menu-component">
      <form className="search-menu-restaurant">
        <input
          className="search-menu-restaurant-input"
          type="text"
          placeholder="buscar itens..."
          onChange={handleFilter}
        />
      </form>
    </div>
  );
}
