import "./style.scss";
import {useState, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom";
import logoImgGrande from "../../assets/image/logo.svg";
import {doLogin} from "../../authentication";

export function LoginClient(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      props.history.push("/home");
    }
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    doLogin({email, password})
      .then((response) => {
        const {token} = response.data;

        localStorage.setItem("jwtToken", token);
        props.history.push("/home");
      })

      .catch((err) => {
        toast.error("email ou senha inválidos");
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
          <h2>Você está pronto para matar a sua fome?</h2>
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
