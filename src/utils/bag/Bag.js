import {Menu, MenuItem} from "@szhsin/react-menu";
import {FiShoppingBag} from "react-icons/fi";
import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import {NavBarClient} from "../navbar/client-navbar/NavBarClient";
import {useEffect, useState} from "react";
import api from "../../api/api";

export function Bag() {
  const [items, setItems] = useState([]);
  const [paymentType, setPaymentType] = useState({});
  useEffect(() => {
    //trazer formas de pagamentos;
    api.get("/api/Home/payment-types").then((response) => {
      const data = response.data;

      setPaymentType(data);
    });
  }, [items]);
  return (
    <div>
      <NavBarClient />
      <h2>Sacola</h2>
      <div className="bag-items">
        <p>Item: Bolo de morango</p>
        <p>Quantidade: 1</p>
        <p>Preço: R$10</p>
      </div>
      <p> Preço total: 10</p>

      <h2>
        Forma de pagamento:
        <select
          className="input-item-category"
          name="paymentType"
          required="required"
        >
          <option className="option-select" value={null}>
            Forma de pagamento
          </option>
          {paymentType.map((paymentType) => (
            <option value={paymentType.id}>{paymentType.name}</option>
          ))}
        </select>
      </h2>

      <button>Finalizar Pedido</button>
    </div>
  );
}
