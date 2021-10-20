import React, { useEffect } from "react";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import SaveDialogBox from "./SaveDialogBox";
import SelectBoard from "./SelectBoard";

function Pin({ id, imageURL, name, largeDialogBox, boards, size }) {
  const [showCtas, setShowCtas] = useState(false);
  const [showSaveDialogBox, setShowSaveDialogBox] = useState(false);
  const [currentBoard, setCurrentBoard] = useState(
    boards.length > 0 ? boards[0] : {}
  );

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

  async function savePin() {
    const data = {
      id: id,
      title: name,
      url: imageURL,
      board: currentBoard,
    };
    await axios
      .post("http://192.168.0.10:5000/pin/add", data)
      .then((response) => console.log(response))
      .catch((err) => console.log("Error: " + err));
  }

  const onSavePin = () => {
    openSaveDialogBox();
    savePin();
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
      className={"pin-container pin-container-" + size}
      onMouseLeave={onPinLeave}
      onMouseEnter={onPinHover}
    >
      {showSaveDialogBox && largeDialogBox && (
        <SelectBoard
          setCurrentBoard={setCurrentBoard}
          closeSaveDialogBox={closeSaveDialogBox}
        />
      )}
      <div className="pin-container__body">
        {showSaveDialogBox && !largeDialogBox && (
          <SaveDialogBox boards={boards} setCurrentBoard={setCurrentBoard} />
        )}

        <Link to={"/pin/" + id} className="pin-container__media" href="#">
          <img
            className={`pin-image ${showCtas && "pin-image--hover"}`}
            src={imageURL}
            alt=""
          />
        </Link>
        <h3 className="pin-name">{name ? shrinkText(name, 36) : ""}</h3>

        {showCtas && (
          <div className="pin-ctas">
            {currentBoard && (
              <div onClick={openSaveDialogBox} className="pin-board pin-cta">
                <p>{currentBoard.title}</p>
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
