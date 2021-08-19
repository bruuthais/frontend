import {useHistory} from "react-router-dom";
import api from "../../api/api";
import "./style.scss";

export function Restaurant(props: any) {
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
        <button
          onClick={handleRestaurantId}
          className={props.isOpen ? "restaurant" : "restaurant-closed"}
        >
          <div className="restaurant-img">
            <img src={props.logoUrl} alt="imagem do restaurante"></img>
          </div>
          <div className="restaurants-box">
            <div className="restaurants-name">
              <h3> {props.name}</h3>
            </div>
            <div
              className={
                props.isOpen ? "restaurant-is-open" : "restaurant-is-closed"
              }
            >
              {props.isOpen ? <p>Aberto</p> : <p>Fechado</p>}
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
