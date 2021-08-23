import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {RestaurantSearch} from "./RestaurantSearch";
import {RestaurantResponseSearch} from "./interface/RestaurantResponseSearch";
import api from "../../api/api";

export function RestaurantListSearch(props: any) {
  const [dados, setDados] = useState<RestaurantResponseSearch | []>([]);
  //Retorna os restaurantes para a lista de restaurantes
  const {name} = useParams();
  useEffect(() => {
    async function fetchRestaurants() {
      const resposta = await api.get(
        `/api/Customer/restaurants/category/${name}`
      );
      console.log(dados);
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
            <RestaurantSearch
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
