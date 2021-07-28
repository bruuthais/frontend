import { Link } from "react-router-dom";
import { NavBarCreate } from "../utils/navbar/navbar-create-account/NavBarCreate";
import "../assets/styles//cadastro-concluido.scss";

export function CadastroConcluido() {
  return (
    <div id="page-create-successful">
      <header className="header-home">
        <NavBarCreate />
      </header>

      <main>
        <div className="create-successful-content">
          <h2>Cadastro concluído com sucesso!</h2>
          <Link to="/">
            <button className="button-create-successful">Voltar para o home</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
