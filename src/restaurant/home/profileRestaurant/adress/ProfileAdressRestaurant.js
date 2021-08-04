import {useState} from "react";

import api from "../../../../api/api";
import {Cep} from "../../../../utils/cep/Cep";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";

export function ProfileAdressRestaurant() {
  const [adress, setAdress] = useState({
    name: "",
    zipCod: "",
    streetAddress: "",
    zone: "",
    city: "",
    state: "",
    refference: "",
  });

  async function handleAdress(e) {
    e.preventDefault();

    await api
      .post(`/api/Restaurant/addresses`, {
        name: "",
        zipCod: "",
        streetAddress: "",
        zone: "",
        city: "",
        state: "",
        refference: "",
      })
      .then(function (resposta) {
        console.log(resposta);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function handleSubmit(values) {
    debugger;
    console.log(values);
  }

  return (
    <div className="page-profile-restaurant">
      <NavBarRestaurant />
      <main className="main-adress">
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <div className="profile-adress-restaurant">
              <h3 className="h3-profile-restaurant">Endereço:</h3>

              <Cep handleAdress={handleAdress} handleSubmit={handleSubmit} />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
