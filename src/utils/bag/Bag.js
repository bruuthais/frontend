import "@szhsin/react-menu/dist/index.css";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import api from "../../api/api";
import "./style.scss";
import {NavbarClient} from "../navbar/client-navbar/NavBarClient";

export function Bag(props) {
  const [items, setItems] = useState(props.location.state);
  const [address, setAddress] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [user, setUser] = useState({});
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectedPaymentType, setSelectedPaymentType] = useState({});

  //"​/api​/Customer​/foods​/{id}"

  //useEffect(() => {
  //    api.get("/api/Restaurant/bags/status/delivering").then((response) => {
  //      const idList = response.data.map((bag) => bag.id);
  //
  //      Promise.all(
  //        idList.map((id) => api.get(`/api/Restaurant/bags/${id}`))
  //      ).then((bag) => {
  //        const pedidos = bag.map((item) => item.data);
  //
  //        setItems(pedidos);
  //      });
  //    });
  //  }, []);

  console.log(items);
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
  //PEGA OS ITENS ADICIONADOS AO CARRINHO E CONFIRMA A SACOLA/CARRINHO
  const handleSubmit = (event) => {
    event.preventDefault();
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
        Swal.fire({
          text: "Pedido realizado com sucesso!",
          icon: "success",
          confirmButtonColor: "#4054b2",
        });
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
    <>
      <NavbarClient />
      <div className="cart-content">
        <main className="cart-main">
          <div className="cart-container">
            <form className="form-cart">
              <h2>Carrinho de Pedidos</h2>
              <div className="cart-items"></div>
              <div className="cart-inputs">
                <h2 className="cart-input-title">
                  Endereço:
                  <select
                    className="cart-select"
                    required="required"
                    onChange={handleSelectedAddressChange}
                  >
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
              </div>
              <div className="cart-inputs">
                <h2 className="cart-input-title">
                  Forma de Pagamento:
                  <select
                    className="cart-select"
                    required="required"
                    onChange={handleSelectedPaymentTypeChange}
                  >
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
              </div>
              <div className="cart-button-div">
                <button className="cart-button" onClick={handleSubmit}>
                  Finalizar Pedido
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
