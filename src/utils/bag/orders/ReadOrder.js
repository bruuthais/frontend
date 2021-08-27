import React from "react";
import {useHistory} from "react-router";
import api from "../../../api/api";
import "./style.scss";
const ReadOrder = ({item}) => {
  const history = useHistory();

  return (
    <>
      <div className="orders-container">
        <div className="order-list">
          <div className="order-list-img">
            <p className="menu-img-item" alt="imagem do item"></p>
          </div>
          <div className="orders-list-box">
            <div className="orders-list-box">
              <div className="order-list-texts">
                <h3 className="h3-orders-text"> {item.foodName}</h3>
              </div>
            </div>

            <p className="orders-list-p">
              Quantidade:{" "}
              <strong className="orders-list-green">{item.quantity}</strong>
            </p>
            <p className="orders-list-p">
              {" "}
              Preço:{" "}
              <strong className="orders-list-green">
                R$ {item.totalPrice}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadOrder;
