import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import api from "../../api/api";
import logoImgGrande from "../../assets/image/logo.svg";
import "./style.scss";
import {toast, ToastContainer} from "react-toastify";
import {doLogin} from "../../authentication";

const LoginRestaurant = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      props.history.push("/home-restaurant");
    }
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    doLogin({email, password})
      .then((response) => {
        const {jwt} = response.data;

        localStorage.setItem("jwtToken", jwt);
        props.history.push("/home-restaurant");
      })

      .catch((err) => {
        alert(err.response.data.error);
        localStorage.removeItem("jwtToken");
      });
    console.log(doLogin);
  };

  // verificar o que volta do objeto resposta e ver se tem erro
  // se não ter erro, redirecionar para a outra pagina (usar o useHistory)
  // se tiver erro, informar erro no toast

  return (
    <div id="page-auth">
      <aside className="aside-login"></aside>
      <main className="main-login-account">
        <div className="login-content">
          <img src={logoImgGrande} alt="logo" className="img-logo-login" />
          <h2>Tá na hora de vender essa comida gostosa!</h2>
          <form className="form-login" onSubmit={handleSubmit}>
            <input
              className="input-login"
              type="text"
              placeholder="insira o seu e-mail"
              value={email}
              error="wrong"
              success="right"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-login"
              type="password"
              placeholder="insira a sua senha"
              value={password}
              minLength={4}
              maxLength={12}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-to-account" type="submit">
              Fazer Login
            </button>
          </form>
          <>
            <p>
              Não possui conta?{" "}
              <Link to="/restaurant-create-account" className="link">
                Crie a sua conta aqui
              </Link>
              .
            </p>
            <ToastContainer />
          </>
        </div>
      </main>
    </div>
  );
};

export default React.memo(LoginRestaurant);
