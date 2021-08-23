import React, {useState, useEffect} from "react";
import {Menu} from "./Menu";
import {useParams} from "react-router-dom";
import {MenuResponse} from "./interface/MenuResponse";
import api from "../../api/api";

export function ListMenu(props) {
  const [dados, setDados] = useState<MenuResponse | []>([]);

  //Retorna o cardapio do  restaurante
  const {id} = useParams();
  useEffect(() => {
    api.get(`/api/Customer/restaurants/${id}/foods`).then((response) => {
      const data = response.data;
      setDados(data);
    });
  }, []);

  return (
    <>
      <section className="list-menu-content">
        {dados.map((menu) => (
          <Menu
            key={menu.id}
            id={menu.id}
            name={menu.name}
            discription={menu.description}
            photoUrl={menu.photoUrl}
            foodCategoryName={menu.foodCategoryName}
            price={menu.price}
            quantity={menu.quantity}
            foodId={menu.id}
            setBagItems={props.setBagItems}
          />
        ))}
      </section>
    </>
  );
}
