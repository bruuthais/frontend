import "./style.scss";

import ImgLogo from "../../../assets/image/logo.svg";
import {useHistory} from "react-router-dom";
import {FiHelpCircle, FiLogOut} from "react-icons/fi";

import {Link} from "react-router-dom";
import Switches from "./OpenClose";
import {MenuProfile} from "./menus/MenuProfile";
import {MenuCli} from "./menus/MenuCli";
export function NavBarRestaurant() {
  const history = useHistory();

  //Redireciona a configuração do perfil
  function handleProfile() {
    history.push("/home-restaurant/profile");
  }
  //Redireciona...
  function handleHomeRestaurant() {
    history.push("/home-restaurant");
  }

  function handleMenu() {
    history.push("/home-restaurant/menu");
  }
  return (
    <header className="navbar-restaurant">
      <div className="api-logo-restaurant">
        <div className="img-logo">
          <img
            className="img-logo"
            src={ImgLogo}
            alt="Logo"
            onClick={handleHomeRestaurant}
          />
        </div>

        <div className="types">
          <MenuProfile />

          <MenuCli />
          <button
            className="button-menu-restaurant button-home-restaurant"
            onClick={handleMenu}
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
