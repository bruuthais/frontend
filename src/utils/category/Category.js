//Carrossel de categorias!!
import "./style.scss";
import React from "react";
import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import api from "../../api/api";

const responsive = {
  450: {items: 1},
  600: {items: 3},
  1024: {items: 5},
};
const items = [<div className="item" data-value="1"></div>];

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
  const history = useHistory();
  useEffect(() => {
    api.get("/api/Home/food-categories").then((response) => {
      const data = response.data;

      setCategory(
        data.map((category) => (
          <div
            className="item"
            onClick={() => handleCategoryName(category.name)}
            data-value={category.id}
          >
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
        history.push(`/home/category/${name}`);
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
