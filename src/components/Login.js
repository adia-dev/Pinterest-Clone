import React from "react";
import { BsPinterest } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

function Login({ setOpenLogin }) {
  return (
    <div className="login-container">
      <div className="login-container__background"></div>
      <div className="login-container__body">
        <div
          onClick={() => setOpenLogin(false)}
          className="signup-containter__body__close"
        >
          <FaTimes size={18} />
        </div>
        <div className="login-container__body__header">
          <BsPinterest color={"#e60023"} size={32} />
          <h1>Bienvenue sur Pinterest !</h1>
        </div>
        <div className="login-container__body__inputs">
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Mot de passe" />
          <a href="#">Mot de passe oublié ?</a>
        </div>
        <div className="login-container__body__login login-container__btn">
          <h3>Se connecter</h3>
        </div>
        <h4>ou</h4>

        <div className="login-container__body__login__facebook login-container__btn">
          <div className="login-container__facebook">
            <svg
              fill="#1877f2"
              height="19"
              width="19"
              viewBox="0 0 24 24"
              aria-label="Facebook"
              role="img"
            >
              <path d="m17.75 3.984-2.312.001c-1.811 0-2.163.842-2.163 2.077v2.724h4.323l-.563 4.267h-3.76V24H8.769V13.053H5V8.786h3.769V5.64C8.769 1.988 11.05 0 14.383 0c1.596 0 2.967.116 3.367.168v3.816z"></path>
            </svg>
          </div>
          <h3>Continuer avec Facebook</h3>
        </div>
        <div className="login-container__body__login__google login-container__btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
          <p>Continuer avec Google</p>
        </div>
        <p className="login-container__body__tos">
          En continuant, vous acceptez les{" "}
          <a href="#">Conditions d'utilisation</a> de Pinterest et reconnaissez
          avoir lu nos <a href="#">Politique de confidentialité</a>
        </p>
        <a href="#" className="login-container__body__register">
          Vous n'êtes pas encore sur Pinterest ? Inscrivez-vous
        </a>
        <a href="#" className="login-container__body__business">
          Vous êtes un professionnel ? Tout commence ici !
        </a>
      </div>
    </div>
  );
}

export default Login;
