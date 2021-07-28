import React, { useState, useEffect } from "react";
import { Restaurant } from "./Restaurant";
import { RestaurantResponse } from "./interface/RestaurantResponse";
import  api  from "../../api/api";

export function RestaurantList() {
  const [dados, setDados] = useState<RestaurantResponse | []>([]);

  useEffect(() => {
    async function fetchRestaurants() {
      const resposta = await api.get("45249ed7-de21-497f-b1ac-8d2cb158c179");
      console.log(resposta);
      setDados(resposta.data);
    }
    fetchRestaurants();
  }, []);
  return (
    <section className="container">
      {dados.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          category={restaurant.category}
          isOpen={restaurant.isOpen}
          logoUrl={restaurant.logoUrl}
        />
      ))}
    </section>
  );
}
