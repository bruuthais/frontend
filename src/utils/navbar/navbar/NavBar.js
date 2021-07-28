import "./style.scss";
import ImgLogo from "../../../assets/image/logo.svg";
import { useHistory } from "react-router-dom";

export function NavBar() {
  const history = useHistory();

  // Redireciona a página de login do cliente
  function handleLogin() {
    history.push("/login");
  }

  // Redireciona a página de criar conta do cliente
  function handleCreateAccount() {
    history.push("/create-account");
  }


  // Redireciona a página de login restaurante 
  //(ali você poderá ir para p/agina de criar a conta restaurante também!)


  function handleRestaurantLogin() {
    history.push("/restaurant-login");
  }
  return (
    <header className="navbar-home">
      <div className="api-name">
        <div className="img-logo">
          <img className="img-logo" src={ImgLogo} alt="Logo" />
        </div>
        <div className="types">
          <button
            className="create-account-button button-home"
            onClick={handleCreateAccount}
          >
            criar conta
          </button>
          <button className="login-button  button-home" onClick={handleLogin}>
            entrar
          </button>
          <button
            className="restaurant-button  button-home"
            onClick={handleRestaurantLogin}
          >
            sou restaurante
          </button>
        </div>
      </div>
    </header>
  );
}
