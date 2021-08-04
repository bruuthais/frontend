import {useState} from "react";

import api from "../../../../api/api";
import {Cep} from "../../../../utils/cep/Cep";
import "./form.scss";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";

export function ProfileAdressRestaurant() {
  const [name, setName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState("");
  const [reference, setReference] = useState("");

  async function handleAddress(e: any) {
    e.preventDefault();

    await api
      .post(`/api/Restaurant/addresses`, {
        name: name,
        zipCode: zipCode,
        streetAddress: streetAddress,
        zone: zone,
        city: city,
        state: state,
        refference: reference,
      })
      .then(function (resposta) {
        console.log(resposta);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="page-profile-restaurant">
      <NavBarRestaurant />
      <main className="main-address">
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <div className="profile-address-restaurant">
              <h3 className="h3-profile-restaurant">Endereço:</h3>

              <div className="form-control-group">
                <p className="p-form-address">Nome para o endereço:</p>
                <input
                  className="form-input"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control-group">
                <p className="p-form-address">Cep:</p>
                <input
                  className="form-input"
                  required
                  type="text"
                  value={zipCode}
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
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </div>

              <div className="form-control-group">
                <p className="p-form-address">Complemento:</p>
                <input
                  className="form-input"
                  required
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
              </div>
              <div className="form-control-group">
                <p className="p-form-address">Bairro:</p>
                <input
                  className="form-input"
                  required
                  type="text"
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
              <button onClick={handleAddress}>enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
