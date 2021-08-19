import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {NavBarCreate} from "../../utils/navbar/navbar-create-account/NavBarCreate";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";
import Swal from "sweetalert2";
import api from "../../api/api";

export function CreateAccountRestaurant() {
  //Verificar se os dados exigidos estão preenchidos e válidos.
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();
  async function CreateAccountIsValid(e: any) {
    e.preventDefault();

    if (nome.length === 0 || email.length === 0 || senha.length === 0) {
      return toast.error("Preencha todos os campos corretamente.");
    }

    await api
      .post(`/api/Home/restaurant`, {
        name: nome,
        user: {
          email: email,
          password: senha,
        },
      })
      .then(function (resposta) {
        Swal.fire({
          title: "Conta criada",
          text: "Faça o login!",
          icon: "success",
          confirmButtonColor: "#4054b2",
        });
        history.push("/");
      })
      .catch(function (error) {
        toast.error("insira os dados corretamente");
      });
  }
  return (
    <div id="page-create-account">
      <NavBarCreate />

      <main>
        <div className="create-account-content">
          <h2 className="h2-create-account">Cadastro para restaurante</h2>

          <form className="form-create-account">
            <h3 className="h3-create-account">Dados do restaurante</h3>
            <p className="p-form">Nome do restaurante:</p>
            <input
              className="input-create-account"
              type="text"
              placeholder="insira o nome do restaurante"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <p className="p-form">E-mail:</p>
            <input
              className="input-create-account"
              type="email"
              placeholder="insira o seu e-mail do restaurante"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="p-form">Senha:</p>
            <input
              className="input-create-account"
              type="password"
              placeholder="insira uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <Link to="/create-successful">
              <button
                onClick={CreateAccountIsValid}
                className="button-create-account"
              >
                Cadastrar
              </button>
            </Link>
            <p>
              Já possui uma conta?{" "}
              <Link to="/restaurant-login" className="link">
                Faça login
              </Link>
              .
            </p>
            <ToastContainer />
          </form>
        </div>
      </main>
    </div>
  );
}
