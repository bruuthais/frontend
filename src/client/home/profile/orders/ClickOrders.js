import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import api from "../../../../api/api";
import ReadOrder from "../../../../utils/bag/orders/ReadOrder";
import {NavbarClient} from "../../../../utils/navbar/client-navbar/NavBarClient";

export function ClickOrders(props) {
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    api.get(`/api/Customer/bags/${id}`).then((response) => {
      const data = response.data;
      setOrder(data);
    });
  }, []);

  useEffect(() => {
    api.get(`/api/Customer/bags/items/${id}`).then((response) => {
      const data = response.data;
      setItems(data);
    });
  }, []);
  return (
    <div>
      <NavbarClient />
      <div>
        <h2 className="order-list-title">Restaurante {order.restaurantName}</h2>

        <h2 className="order-list-items">Items do pedido:</h2>
        <div className="container">
          {items.map((item) => (
            <ReadOrder item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
