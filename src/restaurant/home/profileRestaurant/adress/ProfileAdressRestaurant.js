import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import api from "../../../../api/api";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";
import {Cep} from "./Cep";

export function ProfileAdressRestaurant() {
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");
  const history = useHistory();

  //async function handleSaveRestaurant(e: any) {
  //  e.preventDefault();
  //
  //  await Api.post(`/api/Restaurant/addresses`, {
  //    name: nome,
  //    zipCode: cep,
  //    streetAddress: rua,
  //    zone: bairro,
  //    city: cidade,
  //    state: estado,
  //    refference: complemento,
  //  })
  //    .then(function (resposta) {
  //      console.log(resposta);
  //    })
  //    .catch(function (error) {
  //      console.log(error);
  //    });
  //}
  return (
    <div className="page-profile-restaurant">
      <NavBarRestaurant />
      <main className="main-adress">
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <div className="profile-adress-restaurant">
              <h3 className="h3-profile-restaurant">Endereço:</h3>

              <Cep />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
