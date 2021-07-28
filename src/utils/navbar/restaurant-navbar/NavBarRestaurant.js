import "./style.scss";

import ImgLogo from "../../../assets/image/logo.svg";
import { useHistory } from "react-router-dom";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";
import Switches from "./OpenClose";
export function NavBarRestaurant() {
  const history = useHistory();

  //Redireciona a configuração do perfil
  function handleProfile() {
    history.push("/home-restaurant/profile");
  }
  //Redireciona...
  function handleCreateAccount() {
    history.push("/create-account");
  }

  function handleRestaurantLogin() {
    history.push("/restaurant-login");
  }
  return (
    <header className="navbar-restaurant">
      <div className="api-logo-restaurant">
        <div className="img-logo">
          <img className="img-logo" src={ImgLogo} alt="Logo" />
        </div>
        <div className="types">
          <p className="p-switch">restaurante aberto</p>
          <Switches />
          <p className="p-switch-close">fechado</p>
        </div>
        <div className="types">
          <button
            className="button-menu-restaurant button-home-restaurant"
            onClick={handleProfile}
          >
            perfil
          </button>
          <button
            className="button-menu-restaurant button-home-restaurant"
            onClick={handleCreateAccount}
          >
            pedidos
          </button>
          <button
            className="button-menu-restaurant button-home-restaurant"
            onClick={handleCreateAccount}
          >
            cardápio
          </button>
          <>
            <Link to="/help" className="nav-react-icon nav-react-icon-help">
              <FiHelpCircle size="1.2em" />
            </Link>
            <Link to="/" className="nav-react-icon nav-react-icon-logout">
              <FiLogOut size="1.2em" />
            </Link>
          </>
        </div>
      </div>
    </header>
  );
}
