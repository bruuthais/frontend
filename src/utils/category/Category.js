//Carrossel de categorias!!
import "./style.scss";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img01 from "../../assets/image/saudavel.svg";
import img02 from "../../assets/image/Doces.svg";
import img03 from "../../assets/image/italiana.svg";
import img04 from "../../assets/image/Japonesa.svg";
import img05 from "../../assets/image/Mexicana.svg";
import img06 from "../../assets/image/Cafeterias.svg";
import img07 from "../../assets/image/chinesa.svg";
import img08 from "../../assets/image/Lanches.svg";
import {useState} from "react";
import api from "../../api/api";
import {useEffect} from "react";

const responsive = {
  450: {items: 1},
  600: {items: 3},
  1024: {items: 5},
};
const items = [
  <div className="item" data-value="1">
    <img width="100%" height="100%" src={img01} alt="Comida saudável" />
  </div>,
];

const Carousel = (props) => (
  <AliceCarousel
    disableButtonsControls
    mouseTracking
    activeIndex
    items={props.items}
    paddingLeft={5}
    paddingRight={5}
    responsive={responsive}
  />
);

export function Category(props) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    api.get("/api/Home/food-categories").then((response) => {
      const data = response.data;

      setCategory(
        data.map((category) => (
          <div
            className="item"
            onClick={handleCategoryName}
            data-value={category.id}
          >
            <h1>{category.name}</h1>

            <img
              width="100%"
              height="100%"
              src={category.imageUrl}
              alt="imagens das categorias"
            />
          </div>
        ))
      );
    });
  }, [items]);

  function handleCategoryName(name) {
    api
      .get(`/api/Customer/restaurants/category/${name}`)
      .then(function (resposta) {
        console.log(resposta);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section className="types-of-food">
      <h2>Eai, você tem fome de que?</h2>
      <Carousel items={category} />
    </section>
  );
}
