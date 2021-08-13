import React, {useState, Fragment, useEffect} from "react";

import "./style.scss";

import ReadOnlyOrders from "../../../../utils/table/ReadOnlyOrders";

import api from "../../../../api/api";

export function NewRequests() {
  const [items, setItems] = useState([]);

  //Dados

  useEffect(() => {
    api.get("/api/Restaurant/bags/status/ordered").then((response) => {
      const idList = response.data.map((bag) => bag.id);

      Promise.all(
        idList.map((id) => api.get(`/api/Restaurant/bags/${id}`))
      ).then((bag) => {
        const pedidos = bag.map((item) => item.data);

        setItems(pedidos);
      });
    });
  }, []);
  //envia para o próximo status da bag
  async function handleBagNext(id) {
    await api
      .post(`/api/Restaurant/bags/${id}/next`, {
        status: "",
      })
      .then(function (resposta) {
        alert("NEXT DEU CERTO");
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  //Não aceita a bag
  async function handleBagCancel(id) {
    await api
      .post(`/api/Restaurant/bags/${id}/cancel`, {
        status: "",
      })
      .then(function (resposta) {
        alert("NEXT DEU CERTO");
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <>
      <div className="table-container">
        <h2>Novos Pedidos</h2>

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
                <th className="td-status">Aceitar pedido</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Fragment>
                  <ReadOnlyOrders
                    item={item}
                    handleBagNext={handleBagNext}
                    handleBagCancel={handleBagCancel}
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
