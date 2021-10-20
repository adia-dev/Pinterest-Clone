import React, { useState } from "react";

import { TiPlus, TiMinus } from "react-icons/ti";
import { FaQuestion, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

function FloatingActions() {
  const [plusActionOpen, setPlusActionOpen] = useState(false);

  const onClickPlusAction = () => {
    setPlusActionOpen(!plusActionOpen);
  };

  const plusActionElem = () => (
    <div className="fa-container__actions">
      <div className="fa-container__action">
        <FaPinterest size={64} />
        <p>
          Installez notre bouton de navigateur pour enregistrer encore plus vite
          vos idées
        </p>
      </div>
      <Link to="/pin-builder" className="fa-container__action">
        <TiPlus size={24} />
        <p>Créer une Épingle</p>
      </Link>
    </div>
  );

  return (
    <div className="">
      <div className="fa-container">
        {plusActionOpen && plusActionElem()}
        <div className="fa-container__cta" onClick={onClickPlusAction}>
          {plusActionOpen ? <TiMinus size={24} /> : <TiPlus size={24} />}
        </div>
        <div className="fa-container__cta">
          <FaQuestion size={18} />
        </div>
      </div>
    </div>
  );
}

export default FloatingActions;
