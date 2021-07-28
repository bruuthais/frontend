import "./style.scss";

import { FiLogOut } from "react-icons/fi";
import ImgLogo from "../../../assets/image/logo.svg";

import { Link } from "react-router-dom";

export function NavBarCreate() {
  return (
    <header className="navbar-create">
      <div className="api-bar-create">
        <div className="img-logo-create">
          <img className="img-logo" src={ImgLogo} alt="Logo" />
        </div>

        <div className="types">
          <Link to="/" className="create-logout-button">
            <FiLogOut size="1.5em" />
          </Link>
        </div>
      </div>
    </header>
  );
}
