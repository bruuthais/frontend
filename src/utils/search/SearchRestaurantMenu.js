import React, {useState} from "react";
import "./styleRestaurant.scss";
export function SearchRestaurantMenu() {
  const [busca, setBusca] = useState("");
  return (
    <div className="search-menu-component">
      <form className="search-menu-restaurant">
        <input
          className="search-menu-restaurant-input"
          type="text"
          placeholder="buscar itens"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </form>
    </div>
  );
}
