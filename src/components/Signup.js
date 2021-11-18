import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BsPinterest } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

function Signup({ setOpenSignup }) {
  const history = useHistory();

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-container__background"></div>
      <div className="signup-container__body">
        <div
          onClick={() => setOpenSignup(false)}
          className="signup-containter__body__close"
        >
          <FaTimes size={18} />
        </div>
        <div className="signup-container__body__header">
          <BsPinterest color={"#e60023"} size={32} />
          <h1>Bienvenue sur Pinterest !</h1>
          <p>Trouvez de nouvelles idées à tester</p>
        </div>
        <form
          onSubmit={onSubmitForm}
          method="post"
          className="signup-container__body__inputs"
        >
          <input type="text" name="email" placeholder="E-mail" />
          <input
            type="password"
            name="password"
            placeholder="Créer un mot de passe"
          />
          <input type="number" name="age" placeholder="Âge" />
          <input
            value="S'inscrire"
            type="submit"
            name="submit"
            className="signup-container__body__login signup-container__btn"
          />
        </form>
        <h4>ou</h4>

        <div className="signup-container__body__login__facebook signup-container__btn">
          <div className="signup-container__facebook">
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
        <div className="signup-container__body__login__google signup-container__btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
          <p>Continuer avec Google</p>
        </div>
        <p className="signup-container__body__tos">
          En continuant, vous acceptez les{" "}
          <a href="#">Conditions d'utilisation</a> de Pinterest et reconnaissez
          avoir lu nos <a href="#">Politique de confidentialité</a>
        </p>
        <a href="#" className="signup-container__body__register">
          Vous êtes déjà membre ? Connectez-vous
        </a>
        <div className="signup-container__body__business">
          <h3>Créer un compte profesionnel gratuit</h3>
        </div>
      </div>
    </div>
  );
}

export default Signup;
