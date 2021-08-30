import "@szhsin/react-menu/dist/index.css";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import api from "../../api/api";
import "./style.scss";
import {NavbarClient} from "../navbar/client-navbar/NavBarClient";
import ModalComponent from "../modal/ModalComponent";

export function Bag(props) {
  const [items, setItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [user, setUser] = useState({});
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectedPaymentType, setSelectedPaymentType] = useState({});

  //PEGA OS ITENS SELECIONADOS NO LOCATION STATE E UTILIZA O FOOD ID PARA MAPEAR
  //OS NOMES DAS COMIDAS, UTILIZA O FOODID TBM PARA PEGAR A QUANTIDADE  ADICIONA-LA NOS FOODS
  console.log(props);
  useEffect(() => {
    if (props.location.state !== undefined) {
      const idList = props.location.state.map((food) => food.foodId);

      Promise.all(
        idList.map((id) => api.get(`/api/Customer/foods/${id}`))
      ).then((foods) => {
        const pedidos = foods
          .map((item) => item.data)
          .map((food) => {
            const {quantity} = props.location.state.find(
              (p) => food.id === p.foodId
            );
            return {...food, quantity: quantity};
          });

        console.log(pedidos);
        setItems(pedidos);
      });
    }
  }, []);

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
    if (
      props.location.state !== undefined ||
      address.value === null ||
      paymentType.value === null
    ) {
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
        })
        .catch((error) => {
          Swal.fire({
            text: "Ocorreu um erro, revise os dados novamente",
            icon: "error",
            confirmButtonColor: "#4054b2",
          });
        });
    } else {
      Swal.fire({
        text: "Você não pode realizar uma compra sem ter itens nela!",
        icon: "error",
        confirmButtonColor: "#4054b2",
      });
    }
  };

  const handleSelectedAddressChange = (event) => {
    const add = JSON.parse(event.target.value);

    setSelectedAddress(add);
  };

  const handleSelectedPaymentTypeChange = (event) => {
    const pType = JSON.parse(event.target.value);
    setSelectedPaymentType(pType);
  };

  //modal

  return (
    <>
      <NavbarClient bagItems={items} />
      <div className="cart-content">
        <main className="cart-main">
          <div className="cart-container">
            <form className="form-cart">
              <h2 className="form-cart-title">Sacola de Pedidos</h2>
              <div className="cart-items">
                {items.map((item) => (
                  <div className="cart-items-list" key={item.id}>
                    <p className="cart-item-name">{item.name} </p>
                    <div className="cart-item-list-quantity">
                      <p className="cart-item-quantity">
                        Quantidade: {item.quantity}
                      </p>
                      <p className="cart-item-price">
                        R$ {item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="separator"></p>
              <div className="cart-items-total-price">
                <p>
                  Total:
                  <em className="total-price">
                    R$
                    {items.reduce(
                      (total, item) => (total += item.quantity * item.price),
                      0
                    )}
                  </em>
                </p>
              </div>
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
                      <option required value={JSON.stringify(ad)} key={ad.id}>
                        {ad.name}
                      </option>
                    ))}
                  </select>
                </h2>

                <button
                  className="add-address-button"
                  type="button"
                  onClick={() => setModalVisible(true)}
                >
                  Adicionar endereço
                </button>
                {isModalVisible ? (
                  <ModalComponent setModalVisible={setModalVisible} />
                ) : null}

                <div className="cart-inputs">
                  <h2 className="cart-input-title">
                    Forma de Pagamento:
                    <select
                      className="cart-select"
                      required="required"
                      onChange={handleSelectedPaymentTypeChange}
                    >
                      <option className="option-select" value={null}>
                        Selecionar Forma de Pgto
                      </option>
                      {paymentType.map((pt) => (
                        <option required value={JSON.stringify(pt)} key={pt.id}>
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
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
