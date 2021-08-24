import React from "react";
import "./style.scss";
const ReadOrdersAccepted = ({item}) => {
  return (
    <>
      <div className="orders-container">
        <div className="orders-list">
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
                R$
                {item.totalPrice}
              </strong>
            </p>
            <p className="orders-list-p">
              Pedido aceito em:{" "}
              <em className="orders-list-blue">{item.acceptedAt}</em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadOrdersAccepted;
