import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import api from "../../../../api/api";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";
import {Cep} from "./Cep";

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

  async function handleAdress(e: any) {
    e.preventDefault();

    await api
      .post(`/api/Restaurant/addresses`, {})
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
      <main className="main-adress">
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <div className="profile-adress-restaurant">
              <h3 className="h3-profile-restaurant">Endereço:</h3>

              <Cep handleAdress={handleAdress} />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
