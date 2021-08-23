import {useHistory} from "react-router-dom";
import api from "../../api/api";
import "./style.scss";

export function RestaurantCategory(props: any) {
  const history = useHistory();
  function handleRestaurantId(id: any) {
    api
      .get(`/api/Customer/restaurants/${props.id}`)
      .then(function (resposta) {
        history.push(`/home/restaurant/${props.id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="content">
        <div
          onClick={handleRestaurantId}
          className={
            props.isOpen ? "restaurant-category" : "restaurant-category-closed"
          }
        >
          <div className="restaurant-category-img">
            <img
              className="restaurant-logo-category"
              src={props.logoUrl}
              alt="imagem do restaurante"
            ></img>
          </div>
          <div className="restaurants-category-box">
            <div className="restaurants-category-name">
              <h3 className="restaurants-category-text"> {props.name}</h3>
            </div>
            <div
              className={
                props.isOpen
                  ? "restaurant-category-is-open"
                  : "restaurant-category-is-closed"
              }
            >
              {props.isOpen ? <p>Aberto</p> : <p>Fechado</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
