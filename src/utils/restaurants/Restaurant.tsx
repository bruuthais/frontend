import {Link} from "react-router-dom";
import "./style.scss";

export function Restaurant(props) {
  return (
    <>
      <div className="content">
        <Link to={`/restaurants/${props.id}`}>
          <button className={props.isOpen ? "restaurant" : "restaurant-closed"}>
            <div className="restaurant-img">
              <img src={props.logoUrl} alt="imagem do restaurante"></img>
            </div>
            <div className="restaurant-box">
              <div className="restaurant-name">
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
        </Link>
      </div>
    </>
  );
}
