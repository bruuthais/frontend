import {Menu, MenuItem} from "@szhsin/react-menu";
import {FiShoppingBag} from "react-icons/fi";
import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import {NavBarClient} from "../navbar/client-navbar/NavBarClient";
import {useEffect, useState} from "react";
import api from "../../api/api";

export function Bag(props) {
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [user, setUser] = useState({});
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectedPaymentType, setSelectedPaymentType] = useState({});

  useEffect(() => {
    //trazer id do usuario;
    api.get("/api/Customer/me").then((response) => {
      const data = response.data;

      setUser(data);
    });
  }, []);

  useEffect(() => {
    //trazer endereços do usuario;
    api.get("/api/Customer/addresses").then((response) => {
      const data = response.data;

      setAddress(data);
    });
  }, []);
  useEffect(() => {
    //trazer formas de pagamentos;
    api.get("/api/Home/payment-types").then((response) => {
      const data = response.data;

      setPaymentType(data);
    });
  }, []);

  const handleSubmit = (event) => {
    const bagItems = props.location.state;
    api
      .post("/api/Customer/bags", {
        customerId: user.id,
        address: {
          streetAddress: selectedAddress.streetAddress,
          refference: selectedAddress.refference,
          zone: selectedAddress.zone,
          city: selectedAddress.city,
        },
        items: bagItems,
        paymentTypeName: selectedPaymentType.name,
      })
      .then((response) => {
        alert("Feito");
      });
  };

  const handleSelectedAddressChange = (event) => {
    const add = JSON.parse(event.target.value);

    setSelectedAddress(add);
  };

  const handleSelectedPaymentTypeChange = (event) => {
    const pType = JSON.parse(event.target.value);
    setSelectedPaymentType(pType);
  };
  return (
    <div>
      <NavBarClient />
      <h2>Sacola</h2>
      <div className="bag-items"></div>
      <p> Preço total: 10</p>
      <h2>
        Endereço:
        <select required="required" onChange={handleSelectedAddressChange}>
          <option className="option-select" value={null}>
            Selecionar Endereço
          </option>
          {address.map((ad) => (
            <option value={JSON.stringify(ad)} key={ad.id}>
              {ad.name}
            </option>
          ))}
        </select>
      </h2>
      <h2>
        Forma de pagamento:
        <select required="required" onChange={handleSelectedPaymentTypeChange}>
          <option className="option-select" value={null}>
            Forma de pagamento
          </option>
          {paymentType.map((pt) => (
            <option value={JSON.stringify(pt)} key={pt.id}>
              {pt.name}
            </option>
          ))}
        </select>
      </h2>

      <button onClick={handleSubmit}>Finalizar Pedido</button>
    </div>
  );
}
