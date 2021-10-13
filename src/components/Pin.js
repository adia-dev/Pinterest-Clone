import React from "react";

import { FaChevronDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForward2Fill } from "react-icons/ri";

import { useState } from "react/cjs/react.development";

function Pin({ imageURL, suggestedLibrary, name }) {
  const [showCtas, setShowCtas] = useState(false);

  const onMouseEnter = () => {
    setShowCtas(true);
  };

  const onMouseLeave = () => {
    setShowCtas(false);
  };

  const shrinkText = (text, max) => {
    if (text.length > max) {
      text = text.substring(0, max) + "...";
    }
    return text;
  };

  return (
    <div
      className="pin-container"
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <a className="pin" href="#">
        <img
          className={`pin-image ${showCtas && "pin-image--hover"}`}
          src={imageURL}
          alt=""
        />
      </a>
      <h3 className="pin-name">{name ? shrinkText(name, 36) : ""}</h3>

      {showCtas && (
        <div className="pin-ctas">
          <div className="pin-library pin-cta">
            <p>{suggestedLibrary}</p>
            <FaChevronDown size={16} color="#fff" />
          </div>
          <div className="pin-save pin-cta">
            <p>Enregistrer</p>
          </div>
          <div className="pin-send pin-cta">
            <RiShareForward2Fill size={26} color="#000" />
          </div>
          <div className="pin-more pin-cta">
            <BsThreeDots size={26} color="#000" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Pin;
