import "./style.scss";

import ImgLogo from "../../../assets/image/logo.svg";
import {useHistory} from "react-router-dom";
import {FiLogOut} from "react-icons/fi";
import {MenuProfile} from "./menus/MenuProfile";

export function NavBarRestaurant() {
  const history = useHistory();

  //Redireciona ao home
  function handleHomeRestaurant() {
    history.push("/home-restaurant");
  }
  //Redireciona ao cardápio
  function handleMenu() {
    history.push("/home-restaurant/menu");
  }

  //Redireciona aos pedidos
  function handleOrdered() {
    history.push("/home-restaurant/manager/orders");
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
          {/*Menu do perfil*/}
          <MenuProfile />
          {/*Menu de pagamentos/pedidos*/}
          <button
            className="button-menu-restaurant button-home-restaurant"
            onClick={handleOrdered}
          >
            pedidos
          </button>
          <button
            className="button-menu-restaurant button-home-restaurant"
            onClick={handleMenu}
          >
            cardápio
          </button>
        </div>
      </div>
    </header>
  );
}
