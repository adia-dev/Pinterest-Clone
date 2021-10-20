import React from "react";

import { FaSearch, FaPlus, FaChevronRight } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

function SelectBoard({ closeSaveDialogBox }) {
  return (
    <div className="sl-body">
      <div className="sl-container__background"></div>
      <div className="sl-container" onMouseLeave={closeSaveDialogBox}>
        <div className="sl-container__header">
          <h1>Choisir un tableau</h1>
        </div>
        <div className="sl-container__content">
          <div className="sl-container__content__media">
            <img
              src="https://i.pinimg.com/236x/c6/98/52/c69852816daa13912e9b60eba0d50cad.jpg"
              alt=""
            />
          </div>
          <div className="sl-container__content__boards">
            <div className="sl-container__content__boards__search">
              <FaSearch size={18} />
              <input type="text" name="board" placeholder="Rechercher" />
            </div>

            <div className="sl-container__content__boards__section">
              <p>Tous les tableaux</p>
            </div>

            {[...Array(3)].map((_, i) => (
              <div key={i} className="sl-container__content__boards__board">
                <img
                  src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                  alt=""
                />
                <h4>Character Inspiration - IRL</h4>
                <GiPadlock />
                <FaChevronRight />
              </div>
            ))}

            <div className="sl-container__content__boards__section">
              <p>Tous les tableaux</p>
            </div>
            {[...Array(7)].map((_, i) => (
              <div key={i} className="sl-container__content__boards__board">
                <img
                  src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                  alt=""
                />
                <h4>Character Inspiration - IRL</h4>
                <GiPadlock />
                <FaChevronRight />
              </div>
            ))}
          </div>
        </div>

        <div className="sl-container__footer">
          <div className="sl-container__footer__plus">
            <FaPlus size={20} />
          </div>
          <h3>Créer un tableau</h3>
        </div>
      </div>
    </div>
  );
}

export default SelectBoard;
