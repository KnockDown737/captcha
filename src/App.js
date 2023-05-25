import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Vitoria from "./vitoria";
import "./App.css";

function App() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [redirectTo, setRedirectTo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (recaptchaValue) {
      // ReCAPTCHA foi preenchido corretamente, redirecionar para outra página
      console.log("ReCAPTCHA preenchido corretamente");
      setRedirectTo("/vitoria"); // Define a página de redirecionamento
    } else {
      // ReCAPTCHA não foi preenchido, exibe uma mensagem de erro
      alert("Por favor, preencha o ReCAPTCHA");
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  if (redirectTo) {
    return <Vitoria />;
  }

  return (
    <div id="canva">
      <center>
        <h1>Formulário</h1>
      </center>

      <div class="container">
        <form class="formulario" onSubmit={handleSubmit}>
          <div class="forms">
            <div class="formsContainer">
              <label class="tituloInput">Email:</label>
              <input type="email" placeholder="Email" name="email"  class="input" required />
              <br />
              <label class="tituloInput">Senha:</label>
              <input type="password" placeholder="Senha" name="senha" class="input"   required />
            </div>
            <ReCAPTCHA
              sitekey="6LehEyYmAAAAALYZ4iYcCr_-c7wN63YDs4BH66Y0"
              onChange={handleRecaptchaChange}
              id="captcha"
            />
            <button type="submit" class="btn">Login</button>
            
          </div>
        </form>
      </div>
    </div>
  );
}






export default App;
