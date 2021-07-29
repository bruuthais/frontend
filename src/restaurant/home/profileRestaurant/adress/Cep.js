import React from "react";
import {Formik, Field, Form} from "formik";
import "./form.scss";

export function Cep() {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  function onBlurCep(ev, setFieldValue) {
    const {value} = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("rua", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          uf: "",
        }}
        render={({isValid, setFieldValue}) => (
          <Form>
            <div className="form-control-group">
              <p className="p-form">Cep:</p>
              <Field
                name="cep"
                type="text"
                onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                className="form-input"
              />
            </div>
            <div className="form-control-group">
              <p className="p-form">Rua:</p>
              <Field className="form-input" name="rua" type="text" />
            </div>
            <div className="form-control-group">
              <p className="p-form">Número:</p>
              <Field className="form-input" name="numero" type="text" />
            </div>
            <div className="form-control-group">
              <p className="p-form" l>
                Complemento:
              </p>
              <Field className="form-input" name="complemento" type="text" />
            </div>
            <div className="form-control-group">
              <p className="p-form">Bairro:</p>
              <Field className="form-input" name="bairro" type="text" />
            </div>
            <div className="form-control-group">
              <p className="p-form">Cidade:</p>
              <Field className="form-input" name="cidade" type="text" />
            </div>
            <div className="form-control-group">
              <p className="p-form">Estado:</p>
              <Field className="form-input-select" component="select" name="uf">
                <option value={null}>Selecione o Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espirito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Field>
            </div>
            <button type="submit" disabled={!isValid}>
              enviar
            </button>
          </Form>
        )}
      />
    </div>
  );
}
