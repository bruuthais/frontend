import React, {Fragment, useEffect, useState} from "react";
import api from "../../../../api/api";
import ReadOrders from "../../../../utils/bag/orders/ReadOrders";
import {NavbarClient} from "../../../../utils/navbar/client-navbar/NavBarClient";

export function Orders() {
  const [items, setItems] = useState([]);

  //Dados

  useEffect(() => {
    api.get("​/api​/Customer​/bags​/status​/").then((response) => {
      const idList = response.data.map((bag) => bag.id);

      setItems(idList);
      console.log(response);
    });
  });

  return (
    <>
      <NavbarClient />
      <div>
        <h2>Pedidos em aberto:</h2>
        {items.map((item) => (
          <Fragment>
            <ReadOrders item={item} />
          </Fragment>
        ))}
      </div>
    </>
  );
}
