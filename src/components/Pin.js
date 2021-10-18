import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import SaveDialogBox from "./SaveDialogBox";
import SelectBoard from "./SelectBoard";

function Pin({ imageURL, suggestedBoard, name, largeDialogBox }) {
  const [showCtas, setShowCtas] = useState(false);
  const [showSaveDialogBox, setShowSaveDialogBox] = useState(false);

  const onPinHover = () => {
    setShowCtas(true);
  };

  const onPinLeave = () => {
    setShowCtas(false);
    setShowSaveDialogBox(false);
  };

  const openSaveDialogBox = () => {
    setShowCtas(false);
    setShowSaveDialogBox(true);
  };

  const closeSaveDialogBox = () => {
    setShowSaveDialogBox(false);
    setShowCtas(false);
  };

  const onSavePin = () => {
    openSaveDialogBox();
  };

  const shrinkText = (text, max) => {
    if (text.length > max) {
      text = text.substring(0, max) + "...";
    }
    return text;
  };

  return (
    // <SelectBoard />*

    <div
      className="pin-container"
      onMouseLeave={onPinLeave}
      onMouseEnter={onPinHover}
    >
      {showSaveDialogBox && largeDialogBox && (
        <SelectBoard closeSaveDialogBox={closeSaveDialogBox} />
      )}
      <div className="pin-container__body">
        {showSaveDialogBox && !largeDialogBox && <SaveDialogBox />}

        <Link to="/pin" className="pin" href="#">
          <img
            className={`pin-image ${showCtas && "pin-image--hover"}`}
            src={imageURL}
            alt=""
          />
        </Link>
        <h3 className="pin-name">{name ? shrinkText(name, 36) : ""}</h3>

        {showCtas && (
          <div className="pin-ctas">
            {suggestedBoard && (
              <div onClick={openSaveDialogBox} className="pin-board pin-cta">
                <p>{suggestedBoard}</p>
                <FaChevronDown size={16} color="#fff" />
              </div>
            )}

            <div className="pin-save pin-cta" onClick={onSavePin}>
              <p>Enregistrer</p>
            </div>
            <div className="pin-ctas__bottom">
              <div className="pin-send pin-cta">
                <RiShareForward2Fill size={26} color="#000" />
              </div>
              <div className="pin-more pin-cta">
                <BsThreeDots size={26} color="#000" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pin;
