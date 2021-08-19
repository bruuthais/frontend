import {useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import {useHistory} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../../api/api";
import "../picture/style.scss";
import Swal from "sweetalert2";

import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";

export function ProfileMeRestaurant() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState([]);
  const history = useHistory();
  async function handleEditProfile(e) {
    e.preventDefault();
    await api
      .put(`/api/Restaurant/me`, {
        name: name,
        password: password,
        email: email,
      })
      .then(function (resposta) {
        Swal.fire({
          title: "Dados alterados",
          text: "Por favor faça novamente o login! :)",
          icon: "success",
          confirmButtonColor: "#4054b2",
          confirmButtonText: "OK",
        });
        localStorage.removeItem("jwtToken");
        history.push("/");
      })
      .catch(function (error) {
        toast.error("Preencha os dados corretamente");
      });
  }

  useEffect(() => {
    api.get("/api/Restaurant/me").then((response) => {
      const data = response.data;
      setProfile(data);
      console.log(response);
    });
  }, []);

  async function handleDeleteRestaurant(e) {
    e.preventDefault();
    await api
      .delete("/api/Restaurant/me")
      .then(function (resposta) {
        Swal.fire({
          title: "Conta deletada",
          text: "Sentiremos sua falta...",
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
        });
        localStorage.removeItem("jwtToken");
        history.push("/");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="page-profile-restaurant">
      <NavBarRestaurant />
      <main>
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <img
              src={profile.logoUrl}
              className="me-logo-restaurant"
              alt="logo do restaurante"
            />
            <h3 className="h3-profile-restaurant">Editar Informações</h3>
            <div className="profile-restaurant">
              <p className="p-form-profile">Nome do Restaurante:</p>
              <input
                type="text"
                required
                className="input-img-restaurant"
                placeholder="insira um nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="p-form-profile">Email:</p>
              <input
                type="email"
                required
                className="input-img-restaurant"
                placeholder="insira um email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className="p-form-profile">Senha:</p>
              <input
                type="password"
                required
                className="input-img-restaurant"
                placeholder="insira ima senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="button-profile-restaurant"
              onClick={handleEditProfile}
            >
              salvar perfil
            </button>
            <>
              <button
                className="button-profile-delete"
                onClick={handleDeleteRestaurant}
              >
                excluir conta
              </button>
            </>
            <ToastContainer />
          </form>
        </div>
      </main>
    </div>
  );
}
