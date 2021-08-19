import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../../api/api";
import NumberFormat from "react-number-format";
import "./form.scss";
import Swal from "sweetalert2";
import "../../../../assets/styles/global-form.scss";
import {NavBarClient} from "../../../../utils/navbar/client-navbar/NavBarClient";

export function ProfileAddress() {
  const [name, setName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState("");
  const [refference, setRefference] = useState("");

  async function handleAddress(e: any) {
    e.preventDefault();
    await api
      .post(`/api/Customer/addresses`, {
        name: name,
        zipCode: zipCode,
        streetAddress: streetAddress,
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
        toast.error(
          `Favor verificar os dados, ex: endereço deve conter virgula antes do numero "rua, 123"`
        );
      });
  }
  return (
    <div className="page-global-form">
      <NavBarClient />
      <main className="main-address">
        <div className="global-form-container">
          <form className="global-form-box">
            <div className="global-form-div">
              <h3 className="h3-global-form">Endereço:</h3>

              <div className="global-control-group">
                <p className="p-form-address">Nome para o endereço:</p>
                <input
                  className="form-input"
                  required
                  type="text"
                  placeholder="casa"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control-group">
                <p className="p-form-address">Cep:</p>
                <NumberFormat
                  format="#####-###"
                  mask="_"
                  className="form-input"
                  required
                  type="text"
                  value={zipCode}
                  placeholder="88000-123"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div className="form-control-group">
                <p className="p-form-address">Rua:</p>
                <input
                  className="form-input"
                  required
                  type="text"
                  value={streetAddress}
                  placeholder="margaridas, 123"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </div>

              <div className="form-control-group">
                <p className="p-form-address">Complemento:</p>
                <input
                  className="form-input"
                  type="text"
                  value={refference}
                  placeholder="ao lado da roseira"
                  onChange={(e) => setRefference(e.target.value)}
                />
              </div>
              <div className="form-control-group">
                <p className="p-form-address">Bairro:</p>
                <input
                  className="form-input"
                  required
                  type="text"
                  placeholder="jardim"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                />
              </div>
              <div className="form-control-group">
                <p className="p-form-address">Cidade:</p>
                <input
                  className="form-input"
                  required
                  type="text"
                  value={city}
                  placeholder="floricultura"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-control-group">
                <p className="p-form-address">Estado:</p>
                <select
                  className="form-input-select"
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
              <button
                className="button-profile-restaurant"
                onClick={handleAddress}
              >
                enviar
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
}
