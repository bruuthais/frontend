import React, {useState, Fragment, useEffect} from "react";

import "./style.scss";
import ReadOnlyOrdersDelivering from "../../../../utils/table/ReadOnlyOrdersDelivering";
import api from "../../../../api/api";

export function Delivering() {
  const [items, setItems] = useState([]);

  //Dados

  useEffect(() => {
    api.get("/api/Restaurant/bags/status/delivering").then((response) => {
      const idList = response.data.map((bag) => bag.id);

      Promise.all(
        idList.map((id) => api.get(`/api/Restaurant/bags/${id}`))
      ).then((bag) => {
        const pedidos = bag.map((item) => item.data);

        setItems(pedidos);
      });
    });
  }, []);
  //Botão de deletar
  const handleDeleteClick = (itemId) => {
    const newItems = [...items];
    api.delete(`/api/Restaurant/foods/${itemId}`, items).then((response) => {
      const index = items.findIndex((item) => item.id === itemId);
      newItems.splice(index, 1);

      setItems(newItems);
    });
  };

  return (
    <>
      <div className="table-container">
        <h2>Entregas</h2>

        <form className="form-table">
          <table className="menu-table">
            <thead>
              <tr>
                <th className="td-Num-Order">Nº Pedido</th>
                <th className="td-client-name">Cliente</th>
                <th className="td-client-address">Endereço</th>
                <th className="td-itens-order">Itens do pedido</th>
                <th className="td-price">Valor Total</th>
                <th className="td-payment">Pagamento</th>
                <th className="td-status">Status pedido</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Fragment>
                  <ReadOnlyOrdersDelivering
                    item={item}
                    handleDeleteClick={handleDeleteClick}
                  />
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}
