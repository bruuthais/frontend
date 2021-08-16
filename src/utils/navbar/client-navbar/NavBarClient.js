import "./style.scss";
import {FiLogOut, FiShoppingBag} from "react-icons/fi";

import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ImgLogo from "../../../assets/image/logo.svg";
import api from "../../../api/api";
import {MenuProfileUser} from "../restaurant-navbar/menus/MenuProfileUser";

export function NavBarClient() {
  const [busca, setBusca] = useState("");
  const [profile, setProfile] = useState([]);
  const history = useHistory();
  useEffect(() => {
    api.get("/api/Customer/me").then((response) => {
      const data = response.data;
      setProfile(data);
      console.log(response);
    });
  }, []);

  //Redireciona ao home
  function handleHome() {
    history.push("/home");
  }

  //Logout
  function handleLogout() {
    localStorage.removeItem("jwtToken");
    history.push("/");
  }

  return (
    <header className="navbar-home-login">
      <div className="api-name">
        <div className="img-logo">
          <img
            className="img-logo"
            src={ImgLogo}
            alt="Logo"
            onClick={handleHome}
          />
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
          <p className="username">{profile.name}</p>

          <MenuProfileUser size="1.2em" />

          <Link to="/" className="nav-react-icon nav-react-icon-cart">
            <FiShoppingBag size="1.2em" />
          </Link>

          <div
            onClick={handleLogout}
            className="nav-react-icon nav-react-icon-logout"
          >
            <FiLogOut size="1.2em" />
          </div>
        </div>
      </div>
    </header>
  );
}
