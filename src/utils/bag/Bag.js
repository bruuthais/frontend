import {Menu, MenuItem} from "@szhsin/react-menu";
import {FiShoppingBag} from "react-icons/fi";
import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import {NavBarClient} from "../navbar/client-navbar/NavBarClient";
import {useEffect, useState} from "react";
import api from "../../api/api";

export function Bag() {
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState([]);
  const [paymentType, setPaymentType] = useState([]);

  useEffect(() => {
    //trazer endereços do usuario;
    api.get("/api/Customer/addresses").then((response) => {
      const data = response.data;

      setAddress(data);
    });
  }, [items]);
  useEffect(() => {
    //trazer formas de pagamentos;
    api.get("/api/Home/payment-types").then((response) => {
      const data = response.data;

      setPaymentType(data);
    });
  }, [items]);

  useEffect(() => {
    //trazer formas de pagamentos;
    api.get("/api/Customer/bags").then((response) => {
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
        Endereço:
        <select required="required">
          <option className="option-select" value={null}>
            Selecionar Endereço
          </option>
          {address.map((address) => (
            <option value={address.value}>{address.name}</option>
          ))}
        </select>
      </h2>
      <h2>
        Forma de pagamento:
        <select required="required">
          <option className="option-select" value={null}>
            Forma de pagamento
          </option>
          {paymentType.map((paymentType) => (
            <option value={paymentType.value}>{paymentType.name}</option>
          ))}
        </select>
      </h2>

      <button>Finalizar Pedido</button>
    </div>
  );
}
