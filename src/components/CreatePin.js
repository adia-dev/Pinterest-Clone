import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { TiArrowUpThick } from "react-icons/ti";

function CreatePin() {
  return (
    <div className="cp-container">
      <div className="cp-container__select">
        <FaCheck size={22} />
      </div>
      <div className="cp-container__header">
        <div className="cp-container__header__cta">
          <BsThreeDots size={24} />
        </div>
        <div className="cp-container__header__save">
          <div className="cp-container__header__save__libraries">
            <p>Fx</p>
            <FaChevronDown />
          </div>
          <div className="cp-container__header__save__btn">
            <h3>Enregistrer</h3>
          </div>
        </div>
      </div>
      <div className="cp-container__content">
        <div className="cp-container__content__media">
          <div className="cp-container__content__media__input">
            <div className="cp-container__content__media__input__btn">
              <TiArrowUpThick size={18} />
            </div>
            <p className="cp-container__content__media__input__instructions">
              Glissez/déposez votre photo ou vidéo ou cliquez pour la
              télécharger
            </p>
            <div className="cp-container__content__media__input__recommendations">
              <p>
                Recommendation : utilisez des fichiers .jpg de haute qualité de
                moins de 20 Mo ou .mp4 de moins de 2 Go.
              </p>
            </div>
          </div>
        </div>
        <div className="cp-container__content__infos">
          <div className="cp-container__content__infos__title">
            <input type="text" name="title" placeholder="Ajoutez un titre" />
          </div>
          <div className="cp-container__content__infos__author">
            <img
              src="https://i.pinimg.com/736x/a5/ae/c9/a5aec9ead4d30c2aca5c92f5358fee7f.jpg"
              alt=""
            />
            <div className="cp-container__content__infos__author__infos">
              <h3>🐀𝕭𝖊𝖑𝖟𝖊𝕭𝖚𝖇𝖚🐀 - 🐱‍👤 ™</h3>
              <p>1 abonné(e)</p>
            </div>
          </div>
          <div className="cp-container__content__infos__description">
            <input
              type="text"
              name="description"
              placeholder="Parlez-nous de votre Épingle..."
            />
          </div>
          <div className="cp-container__content__infos__link">
            <input
              type="text"
              name="link"
              placeholder="Ajoutez un lien de destination"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePin;
