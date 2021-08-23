import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {RestaurantCategory} from "./RestaurantCategory";
import {RestaurantResponseCategory} from "./interface/RestaurantResponseCategory";
import api from "../../api/api";

export function RestaurantListCategory(props: any) {
  const [dados, setDados] = useState<RestaurantResponseCategory | []>([]);
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
      <section className="container-category">
        {dados
          .filter(({name}) =>
            name.toLowerCase().includes(props.busca.toLowerCase())
          )
          .sort((aberto) => (aberto.isOpen ? -1 : 1))
          .map((restaurant) => (
            <RestaurantCategory
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
