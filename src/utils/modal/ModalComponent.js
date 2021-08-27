import React, {useState} from "react";
import NumberFormat from "react-number-format";
import {ToastContainer, toast} from "react-toastify";
import Swal from "sweetalert2";
import api from "../../api/api";
import "./style.scss";
const ModalComponent = (props) => {
  const [name, setName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [number, setNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState("");
  const [refference, setRefference] = useState("");

  //concatena o endereço e o numero
  const a = number;
  const b = streetAddress;
  const concatenar = ` ${b}, ${a}`;
  async function handleAddress(e) {
    e.preventDefault();
    await api
      .post(`/api/Customer/addresses`, {
        name: name,
        zipCode: zipCode,
        streetAddress: concatenar,
        zone: zone,
        city: city,
        state: state,
        refference: refference,
      })

      .then(function (resposta) {
        Swal.fire({
          timer: 2800,
          showConfirmButton: false,
          icon: "success",
          text: "Endereço adicionado",
        });
      })
      .catch(function (error) {
        toast.error(`Preencha os dados corretamente`);
      });
  }
  const {children} = props;
  return (
    <div className="modal">
      <div className="modal-container">
        <p className="p-modal">
          <button className="close-modal" />
        </p>
        <div className="modal-content">
          <div className="modal-form-div">
            <h3 className="h3-modal-form">Adicionar endereço:</h3>

            <div className="modal-control-group">
              <p className="p-modal-address">Nome para o endereço:</p>
              <input
                className="modal-input"
                type="text"
                placeholder="casa"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="modal-control-group">
              <p className="p-modal-address">Cep:</p>
              <NumberFormat
                format="#####-###"
                mask="_"
                className="modal-input"
                type="text"
                value={zipCode}
                placeholder="88000-123"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div className="modal-control-group">
              <p className="p-modal-address">Rua:</p>
              <div className="modal-control-group-address">
                <input
                  className="modal-input-address-num"
                  type="text"
                  value={streetAddress}
                  placeholder="margaridas"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />

                <input
                  className="modal-input-address-number"
                  type="text"
                  value={number}
                  placeholder="123"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-control-group">
              <p className="p-modal-address">Complemento:</p>
              <input
                className="modal-input"
                type="text"
                value={refference}
                placeholder="ao lado da roseira"
                onChange={(e) => setRefference(e.target.value)}
              />
            </div>
            <div className="modal-control-group">
              <p className="p-modal-address">Bairro:</p>
              <input
                className="modal-input"
                type="text"
                placeholder="jardim"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
              />
            </div>
            <div className="modal-control-group">
              <p className="p-modal-address">Cidade:</p>
              <input
                className="modal-input"
                type="text"
                value={city}
                placeholder="floricultura"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="modal-control-group">
              <p className="p-modal-address">Estado:</p>
              <select
                className="modal-input-select"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value={null}>Selecione o estado</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="ES">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MH">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
            <p className="p-modal-form-button">
              <button
                className="modal-button-profile-restaurant"
                onClick={handleAddress}
              >
                adicionar
              </button>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ModalComponent;
