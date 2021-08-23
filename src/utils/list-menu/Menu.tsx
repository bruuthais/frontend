import {useState} from "react";
import {useHistory} from "react-router-dom";
import api from "../../api/api";
import "./style.scss";

export function Menu(props) {
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState();
  const history = useHistory();
  function handleBuyId() {
    props.setBagItems({
      quantity: Number(quantity),
      foodId: props.id,
    });
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
            <div className="list-menu-description">
              <p className="list-menu-description">{props.discription}</p>
            </div>
            <div className="list-menu-price">
              <p className="p-list-menu-price">Preço: R$ {props.price}</p>
              <p className="p-list-menu-quantity">
                Qtd:{" "}
                <input
                  type="number"
                  className="list-menu-quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </p>
            </div>
            <button onClick={handleBuyId} className="button-buy">
              Adicionar
            </button>
          </div>
        </button>
      </div>
    </>
  );
}
