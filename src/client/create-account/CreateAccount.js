import { Link, useHistory } from "react-router-dom";
import { NavBarCreate } from "../../utils/navbar/navbar-create-account/NavBarCreate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";
import { useState } from "react";
import  api  from "../../api/api";

export function CreateAccountClient() {
  //Verificar se os dados exigidos estão preenchidos e válidos.
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  async function CreateAccountIsValid(e: any) {
    e.preventDefault();

    if (senha.length < 4 || senha.length > 12) {
      toast.error("a senha deve ter de 4 a 12 caracteres");
    }
    await api.post(`/api/Home/customer`, {
      name: nome,
      surname: sobrenome,
      user: {
        email: email,
        password: senha,
      },
    })
      .then(function (resposta) {
        history.push("/create-successful");
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
          <h2 className="h2-create-account">Cadastro</h2>
          <form className="form-create-account">
            <h3 className="h3-create-account">Dados Pessoais</h3>

            <p className="p-form">Nome:</p>
            <input
              className="input-create-account"
              type="text"
              placeholder="insira seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <p className="p-form">Sobrenome:</p>
            <input
              className="input-create-account"
              type="text"
              placeholder="insira seu sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />

            <p className="p-form">E-mail:</p>
            <input
              className="input-create-account"
              type="email"
              placeholder="insira o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="p-form">Senha:</p>
            <input
              className="input-create-account"
              type="text"
              placeholder="insira uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <Link to="/create-successful">
              <button
                className="button-create-account"
                onClick={CreateAccountIsValid}
              >
                Cadastrar
              </button>
            </Link>
            <p>
              Já possui uma conta?{" "}
              <Link to="/login" className="link">
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
