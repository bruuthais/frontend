import {useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../../api/api";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";

export function ProfileMeRestaurant() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState([]);

  async function handleEditProfile(e: any) {
    await api
      .put(`/api/Restaurant/me`, {
        name: name,
        password: password,
        email: email,
      })

      .then(function (resposta) {
        console.log(resposta);
      })
      .catch(function (error) {
        toast.error("É necessário preencher todos os campos");
      });
  }

  useEffect(() => {
    api.get("/api/Restaurant/me").then((response) => {
      const data = response.data;
      setProfile(data);
      console.log(response);
    });
  }, []);
  return (
    <div className="page-profile-restaurant">
      <NavBarRestaurant />
      <main>
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <img
              src={profile.logoUrl}
              width="200px"
              alt="logo do restaurante"
            />
            <h3 className="h3-profile-restaurant">Editar Informações</h3>
            <div className="profile-restaurant">
              <p className="p-form-profile">Nome do Restaurante:</p>
              <input
                type="text"
                className="input-img-restaurant"
                placeholder="insira um nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="p-form-profile">Email:</p>
              <input
                type="email"
                className="input-img-restaurant"
                placeholder="insira um email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className="p-form-profile">Senha:</p>
              <input
                type="password"
                className="input-img-restaurant"
                placeholder="insira ima senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="profile-adress-restaurant"></div>

            <button
              className="button-profile-restaurant"
              onClick={handleEditProfile}
            >
              salvar perfil
            </button>
            <ToastContainer />
          </form>
        </div>
      </main>
    </div>
  );
}
