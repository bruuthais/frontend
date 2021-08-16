import "./style.scss";
import {FiLogOut, FiShoppingBag} from "react-icons/fi";
import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ImgLogo from "../../../assets/image/logo.svg";
import api from "../../../api/api";

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

  function handleLogout() {
    localStorage.removeItem("jwtToken");
    history.push("/");
  }

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
          <p className="username">{profile.name}</p>

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
