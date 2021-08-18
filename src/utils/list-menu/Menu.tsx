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
      <div className="content">
        <button className="list-menu">
          <div className="list-menu-img">
            <img src={props.photoUrl} alt="imagem do item"></img>
          </div>
          <div className="list-menu-box">
            <div className="list-menu-name">
              <h3> {props.name}</h3>
            </div>
            <div className="list-menu-description">
              <p>{props.discription}</p>
            </div>
            <div className="list-menu-price">
              <p>{props.price}</p>
            </div>
            <button className="button-buy">Comprar</button>
          </div>
        </button>
      </div>
    </>
  );
}
