import React from "react";
import "../assets/styles/home.scss";
import foodsImg from "../assets/image/3683230.jpg";
import { NavBar } from "../utils/navbar/navbar/NavBar";

export function Home() {
  return (
    <div className="home">
      <NavBar />
      <main className="home-main">
        <h2>Peça a sua comida favorita no conforto de sua casa</h2>
        <section>
          <img src={foodsImg} className="img-home" alt="imagem de motoboy" />
        </section>
      </main>
    </div>
  );
}