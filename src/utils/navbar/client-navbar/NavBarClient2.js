import "./style.scss";
import {FiLogOut, FiShoppingBag} from "react-icons/fi";

import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ImgLogo from "../../../assets/image/logo.svg";
import api from "../../../api/api";
import {MenuProfileUser} from "../restaurant-navbar/menus/MenuProfileUser";

export function NavBarClient2(props) {
  const [profile, setProfile] = useState([]);
  const history = useHistory();
  useEffect(() => {
    api.get("/api/Customer/me").then((response) => {
      const data = response.data;
      setProfile(data);
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

  function handleBag() {
    history.push("/finish");
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

        <div className="types">
          <p className="username">{profile.name}</p>

          <MenuProfileUser size="1.2em" />

          <Link
            to={{pathname: "/finish", state: props.bagItems}}
            className="nav-react-icon nav-react-icon-cart"
          >
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
