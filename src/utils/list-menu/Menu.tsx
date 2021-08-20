import {useHistory} from "react-router-dom";
import api from "../../api/api";
import "./style.scss";

export function Menu(props) {
  const history = useHistory();
  function handleRestaurantId(id) {
    api
      .get(`/api/Customer/restaurants/category/${props.id}`)
      .then(function (resposta) {
        console.log(resposta);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(handleRestaurantId);
  }
  return (
    <>
      <div className="list-menu-content">
        <button className="list-menu">
          <div className="list-menu-img">
            <img
              className="list-menu-img-food"
              src={props.photoUrl}
              alt="imagem do item"
            ></img>
          </div>
          <div className="list-menu-box">
            <div className="list-menu-name">
              <h3 className="list-menu-name"> {props.name}</h3>
            </div>
            <div className="list-menu-category">
              <p>Categoria: {props.foodCategoryName}</p>
            </div>
            <div className="list-menu-description">
              <p className="list-menu-description">{props.discription}</p>
            </div>
            <div className="list-menu-price">
              <p>R${props.price}</p>
            </div>
            <button className="button-buy">Comprar</button>
          </div>
        </button>
      </div>
    </>
  );
}
