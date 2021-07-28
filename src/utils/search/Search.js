import React, { useState } from "react";
import "./style.scss";

export function Search() {
  const [busca, setBusca] = useState("");
  return (
    <div className="search-component">
      <form className="search-restaurant">
        <input
          className="search-restaurant-input"
          type="text"
          placeholder="buscar restaurantes"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </form>
    </div>
  );
}
