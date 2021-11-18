import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

function HeaderMenu() {
  return (
    <div className="hm-container">
      <p className="hm-container__category">Actuellement connecté</p>
      <div className="hm-container__account">
        <div className="hm-container__account__valid">
          <BsCheckLg size={12} />
        </div>
        <img
          src="https://i0.wp.com/64.media.tumblr.com/c87de732d3923a195eb01bfd04e3f1b9/4b477156d7901c26-fc/s1280x1920/e9e320e1009b25c4f751b39e6ea5d45f367cde46.png"
          alt=""
        />
        <div className="hm-container__account__infos">
          <div className="hm-container__account__infos__username">
            <h3>🐀JeSuisUnRat🐀</h3>
          </div>
          <div className="hm-container__account__infos__plan">
            <p>Personnel</p>
          </div>
          <div className="hm-container__account__infos__email">
            <p>abdoudu78130@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="hm-container__category">Vos comptes</p>
      <div className="hm-container__accounts">
        <div className="hm-container__account">
          <img
            src="https://i.pinimg.com/236x/16/6e/1c/166e1c7f84931b07e4fab83ad5a723e7.jpg"
            alt=""
          />
          <div className="hm-container__account__infos">
            <div className="hm-container__account__infos__username">
              <h3>Abdou</h3>
            </div>
            <div className="hm-container__account__infos__plan">
              <p>Personnel</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hm-container__add-account">
        <h1>Ajouter un compte</h1>
      </div>
      <p className="hm-container__category">Plus d'options</p>
      <div className="hm-container__options">
        <div className="hm-container__option">
          <h1>Paramètres</h1>
        </div>
        <div className="hm-container__option">
          <h1>Personaliser votre page d'accueil</h1>
        </div>
        <div className="hm-container__option">
          <h1>Installer l'application Windows</h1>
        </div>
        <div className="hm-container__option">
          <h1>Obtenir de l'aide</h1>
          <FiArrowUpRight size={20} />
        </div>
        <div className="hm-container__option">
          <h1>Voici les règles de confident...</h1>
          <FiArrowUpRight size={20} />
        </div>
        <div className="hm-container__option">
          <h1>Se déconnecter</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
