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
  <div className="item" data-value="2">
    <img width="100%" height="100%" src={img02} alt="Doces" />
  </div>,
  <div className="item" data-value="3">
    <img width="100%" height="100%" src={img03} alt="Comida italiana" />
  </div>,
  <div className="item" data-value="4">
    <img width="100%" height="100%" src={img04} alt="Comida japonesa" />
  </div>,
  <div className="item" data-value="5">
    <img width="100%" height="100%" src={img05} alt="Comida mexicana" />
  </div>,
  <div className="item" data-value="6">
    <img width="100%" height="100%" src={img06} alt="Cafeterias" />
  </div>,
  <div className="item" data-value="7">
    <img width="100%" height="100%" src={img07} alt="Comida Chinesa" />
  </div>,
  <div className="item" data-value="8">
    <img width="100%" height="100%" src={img08} alt="Lanches" />
  </div>,
];

const Carousel = (props) => (
  <AliceCarousel
    disableButtonsControls
    mouseTracking
    items={props.items}
    paddingLeft={5}
    paddingRight={5}
    responsive={responsive}
  />
);
export function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    api.get("/api/Home/food-categories").then((response) => {
      const data = response.data;
      setCategory(
        data.map((category) => (
          <div className="item" data-value={category.id}>
            <h1>{category.name}</h1>
            <img width="100%" height="100%" src={img08} alt="Lanches" />
          </div>
        ))
      );
    });
  });
  return (
    <section className="types-of-food">
      <h2>Eai, você tem fome de que?</h2>
      <Carousel items={category} />
    </section>
  );
}
