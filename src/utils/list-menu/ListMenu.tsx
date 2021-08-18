import React, {useState, useEffect} from "react";
import {Menu} from "./Menu";
import {useParams} from "react-router-dom";
import {MenuResponse} from "./interface/MenuResponse";
import api from "../../api/api";

export function ListMenu(props) {
  const [dados, setDados] = useState<MenuResponse | []>([]);

  console.log(props);
  //Retorna os restaurantes para a lista de restaurantes
  const {id} = useParams();
  useEffect(() => {
    api.get(`/api/Customer/restaurants/${id}`).then((response) => {
      const data = response.data;
      setDados(data);
    });
  }, []);

  return (
    <>
      <section className="container">
        {dados.map((menu) => (
          <Menu
            key={menu.id}
            id={menu.id}
            name={menu.name}
            discription={menu.description}
            photoUrl={menu.photoUrl}
            foodCategoryName={menu.foodCategoryName}
          />
        ))}
      </section>
    </>
  );
}
