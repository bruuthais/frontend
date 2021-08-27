import React, {Fragment, useEffect, useState} from "react";
import api from "../../../../api/api";
import ReadOrders from "../../../../utils/bag/orders/ReadOrders";
import ReadOrdersAccepted from "../../../../utils/bag/orders/ReadOrdersAccepted";
import ReadOrdersDelivered from "../../../../utils/bag/orders/ReadOrdersDelivered";
import {NavbarClient} from "../../../../utils/navbar/client-navbar/NavBarClient";

export function Orders(props) {
  const [ordered, setOrdered] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [delivering, setDelivering] = useState([]);
  //Dados

  useEffect(() => {
    api.get(`/api/Customer/bags/status/ordered`).then((response) => {
      const idList = response.data.map((bag) => bag.id);

      Promise.all(idList.map((id) => api.get(`/api/Customer/bags/${id}`))).then(
        (bag) => {
          const pedidos = bag.map((item) => item.data);

          setOrdered(pedidos);
          console.log(pedidos);
        }
      );
    });
  }, []);
  useEffect(() => {
    api.get(`/api/Customer/bags/status/delivering`).then((response) => {
      const idList = response.data.map((bag) => bag.id);

      Promise.all(idList.map((id) => api.get(`/api/Customer/bags/${id}`))).then(
        (bag) => {
          const pedidos = bag.map((item) => item.data);

          setDelivering(pedidos);
          console.log(pedidos);
        }
      );
    });
  }, []);
  useEffect(() => {
    api.get(`/api/Customer/bags/status/delivered`).then((response) => {
      const idList = response.data.map((bag) => bag.id);

      Promise.all(idList.map((id) => api.get(`/api/Customer/bags/${id}`))).then(
        (bag) => {
          const pedidos = bag.map((item) => item.data);

          setDelivered(pedidos);
          console.log(pedidos);
        }
      );
    });
  }, []);
  return (
    <>
      <NavbarClient />
      <h2 className="orders-list-title">Pedido em aberto:</h2>
      <div className="container">
        {ordered.map((item) => (
          <ReadOrders item={item} />
        ))}
      </div>
      <h2 className="orders-list-title">Pedido em andamento:</h2>
      <div className="container">
        {delivering.map((item) => (
          <ReadOrdersAccepted item={item} />
        ))}
      </div>
      <h2 className="orders-list-title">Pedido enviado:</h2>
      <div className="container">
        {delivered.map((item) => (
          <ReadOrdersDelivered item={item} />
        ))}
      </div>
    </>
  );
}
