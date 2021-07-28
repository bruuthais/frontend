import { useState } from "react";

import  api  from "../../../api/api";
import { NavBarRestaurant } from "../../../utils/navbar/restaurant-navbar/NavBarRestaurant";
import "./style.scss";

export function ProfileRestaurant() {
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");
  async function uploadImage(e: any) {
    e.preventDefault();

    await api.post(`/api/Restaurant/images`, {
      logoUrl: logo,
      bannerUrl: banner,
    })
      .then(function (resposta) {
        console.log(resposta);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
      <main>
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <h3 className="h3-profile-restaurant">Editar perfil</h3>
            <div className="profile-restaurant">
              <p className="p-form-profile">Logo:</p>
              <input
                type="text"
                className="input-img-restaurant"
                placeholder="insira a url da logo"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />

              <p className="p-form-profile">Banner:</p>
              <input
                type="text"
                className="input-img-restaurant"
                placeholder="insira a url do banner"
                value={banner}
                onChange={(e) => setBanner(e.target.value)}
              />
            </div>
            <div className="profile-adress-restaurant">
              <h3 className="h3-profile-restaurant">Endereço:</h3>
              <p className="p-form-adress">Cep:</p>
              <input
                className="input-adress"
                type="text"
                placeholder="insira o cep"
                //value={this.state.value}
                //onChange={this.handleChange}
              />

              <p className="p-form-adress">Rua:</p>
              <input
                className="input-adress"
                type="text"
                placeholder="insira a rua"
                //value={this.state.value}
                //onChange={this.handleChange}
              />

              <p className="p-form-adress">Numero:</p>
              <input
                className="input-adress"
                type="text"
                //value={this.state.value}
                //onChange={this.handleChange}
                placeholder="insira o numero"
              />
              <p className="p-form-adress">Complemento:</p>
              <input
                className="input-adress"
                type="text"
                placeholder="insira o bairro"
                //value={this.state.value}
                //onChange={this.handleChange}
              />
              <p className="p-form-adress">Bairro:</p>
              <input
                className="input-adress"
                type="text"
                placeholder="insira o bairro"
                //value={this.state.value}
                //onChange={this.handleChange}
              />

              <p className="p-form-adress">Cidade: </p>
              <input
                className="input-adress"
                type="text"
                placeholder="insira a cidade"
                //value={this.state.value}
                //onChange={this.handleChange}
              />
              <p className="p-form-adress">Estado:</p>
              <input
                className="input-adress"
                type="text"
                placeholder="insira o estado"
                //value={this.state.value}
                //onChange={this.handleChange}
              />
            </div>

            <button className="button-profile-restaurant" onClick={uploadImage}>
              salvar perfil
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
