import React from "react";
import {useHistory} from "react-router";
import api from "../../../api/api";
import "./style.scss";
const ReadOrders = ({item}) => {
  const history = useHistory();
  function handleOrdersId(id) {
    api
      .get(`/api/Customer/bags/${item.id}`)
      .then(function (resposta) {
        history.push(`/orders/${item.id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="orders-container">
        <div className="orders-list" onClick={handleOrdersId}>
          <div className="orders-list-img">
            <p className="orders-img-logo" alt="imagem do restaurante"></p>
          </div>
          <div className="orders-list-box">
            <div className="orders-list-box">
              <div className="orders-list-texts">
                <h3 className="h3-orders-text"> {item.restaurantName}</h3>
              </div>
            </div>

            <p className="orders-list-p">
              Forma de pagamento:{" "}
              <em className="orders-list-blue">{item.paymentTypeName}</em>
            </p>
            <p className="orders-list-p">
              {" "}
              Valor total:{" "}
              <strong className="orders-list-green">
                R$ {item.totalPrice}
              </strong>
            </p>
            <p className="orders-list-p">
              Pedido feito em:{" "}
              <em className="orders-list-blue">{item.orderedAt}</em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadOrders;
