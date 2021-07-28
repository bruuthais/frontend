import "./style.scss";
import { FiLogOut, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImgLogo from "../../../assets/image/logo.svg";

export function NavBarClient() {
  const [busca, setBusca] = useState("");
  return (
    <header className="navbar-home-login">
      <div className="api-name">
        <div className="img-logo">
          <img className="img-logo" src={ImgLogo} alt="Logo" />
        </div>
        <form className="header-search-restaurant">
          <input
            type="text"
            placeholder="buscar restaurantes"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </form>
        <div className="types">
          <p className="username">nomeusuario</p>

          <Link to="/" className="nav-react-icon nav-react-icon-cart">
            <FiShoppingBag size="1.2em" />
          </Link>
          <Link to="/" className="nav-react-icon nav-react-icon-logout">
            <FiLogOut size="1.2em" />
          </Link>
        </div>
      </div>
    </header>
  );
}
