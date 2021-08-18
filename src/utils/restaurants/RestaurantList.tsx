import React, {useState, useEffect} from "react";
import {Restaurant} from "./Restaurant";
import {RestaurantResponse} from "./interface/RestaurantResponse";
import api from "../../api/api";

export function RestaurantList(props) {
  const [dados, setDados] = useState<RestaurantResponse | []>([]);

  console.log(props);
  //Retorna os restaurantes para a lista de restaurantes
  useEffect(() => {
    async function fetchRestaurants() {
      const resposta = await api.get("/api/Customer/restaurants");
      console.log(resposta);
      setDados(resposta.data);
    }
    fetchRestaurants();
  }, []);

  return (
    <>
      <section className="container">
        {dados
          .filter(({name}) =>
            name.toLowerCase().includes(props.busca.toLowerCase())
          )
          .sort((aberto) => (aberto.isOpen ? -1 : 1))
          .map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              isOpen={restaurant.isOpen}
              logoUrl={restaurant.logoUrl}
            />
          ))}
      </section>
    </>
  );
}
