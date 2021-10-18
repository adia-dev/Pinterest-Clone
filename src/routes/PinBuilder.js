import React, { useState } from "react";
import CreatePin from "../components/CreatePin";

import { BsCardImage, BsPlusLg } from "react-icons/bs";

function PinBuilder() {
  const [count, setCount] = useState(1);
  const [targetPin, setTargetPin] = useState(0);

  const addPin = () => {
    setCount(count + 1);
    console.log("Add pin");
  };

  const removePin = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="pb-container">
      <div className="pb-container__side-ctas">
        <div className="pb-container__side-cta">
          <BsPlusLg onClick={addPin} />
        </div>
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setTargetPin(i);
            }}
            className={`pb-container__side-cta ${
              targetPin === i ? "pb-container__side-cta--active" : ""
            }`}
          >
            <BsCardImage key={i} />
          </div>
        ))}
      </div>

      <div className="pb-container__header">
        <div className="pb-container__header__menu pb-container__header__menu--active">
          <h3>Créer une Épingle</h3>
        </div>
        <div className="pb-container__header__menu">
          <h3>Enregistrer à partir d'un site Web</h3>
        </div>
      </div>

      <div className="pb-container__create-pins">
        {[...Array(count)].map((pin, i) => (
          <CreatePin key={i} />
        ))}
      </div>
    </div>
  );
}

export default PinBuilder;
