import "./style.scss";
import  api  from "../../api/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";
import logoImgGrande from "../../assets/image/logo.svg";

export function LoginClient() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();
  async function handleLogin(e: any) {
    e.preventDefault();

    await api.post(`/api/Auth`, {
      email: email,
      password: senha,
    })
      .then(function (resposta) {
        history.push("/home-login");
      })
      .catch(function (error) {
        toast.error("email ou senha inválidos");
      });

    // verificar o que volta do objeto resposta e ver se tem erro
    // se não ter erro, redirecionar para a outra pagina (usar o useHistory)
    // se tiver erro, informar erro no toast
  }
  return (
    <div id="page-auth">
      <aside className="aside-login"></aside>
      <main className="main-login-account">
        <div className="login-content">
          <img src={logoImgGrande} alt="logo" className="img-logo-login" />
          <h2>Você está pronto para matar a sua fome?</h2>
          <form className="form-login">
            <input
              className="input-login"
              type="text"
              placeholder="insira o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-login"
              type="password"
              placeholder="insira a sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="login-to-account" onClick={handleLogin}>
              Fazer Login
            </button>
          </form>
          <>
            <p>
              Não possui conta?{" "}
              <Link to="/create-account" className="link">
                Crie a sua conta aqui
              </Link>
              .
            </p>
          </>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
}
