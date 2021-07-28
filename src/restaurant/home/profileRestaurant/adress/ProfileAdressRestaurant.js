import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import api from "../../../../api/api";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";
import "./style.scss";

export function ProfileAdressRestaurant() {
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");
  const history = useHistory();

  async function uploadImage(e: any) {
    e.preventDefault();

    await api
      .post(`/api/Restaurant/images`, {
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
      <main className="main-adress">
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
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

            <button
              className="button-profile-restaurant"
              type="submit"
              onClick={uploadImage}
            >
              salvar perfil
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
