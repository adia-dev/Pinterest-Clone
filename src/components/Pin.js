import React from "react";

import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForward2Fill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { GiPadlock } from "react-icons/gi";

import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

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
      {/* <div className="pin-container__pin"> */}
      <Link to="/" className="pin" href="#">
        <img
          className={`pin-image ${showCtas && "pin-image--hover"}`}
          src={imageURL}
          alt=""
        />
      </Link>
      <h3 className="pin-name">{name ? shrinkText(name, 36) : ""}</h3>

      {showCtas && (
        <div className="pin-ctas">
          {suggestedLibrary && (
            <div className="pin-suggested">
              <div className="pin-library pin-cta">
                <p>{suggestedLibrary}</p>
                <FaChevronDown size={16} color="#fff" />
              </div>

              {/*//! Suggested Library Dialog */}

              {/* <div className="pin-library__dialog">
                <div className="pin-library__dialog__title">
                  <h3>Enregistrer dans le tableau</h3>
                </div>
                <div className="pin-library__dialog__searchbar">
                  <FaSearch
                    className="search-container__search__icon"
                    size={16}
                    color="#767676"
                  />
                  <input
                    type="text"
                    placeholder="Rechercher"
                    name="library-search"
                    id="library-search"
                  />
                </div>
                <div className="pin-library__dialog__sections">
                  <div className="pin-library__dialog__section__title">
                    <p>Meilleurs choix</p>
                  </div>
                  <div className="pin-library__dialog__libraries">
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock size={20} />
                    </div>
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock />
                      <FaChevronRight />
                    </div>
                  </div>
                  <div className="pin-library__dialog__section__title">
                    <p>Tous les tableaux</p>
                  </div>
                  <div className="pin-library__dialog__libraries">
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock size={20} />
                    </div>
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock />
                      <FaChevronRight />
                    </div>
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock size={20} />
                    </div>
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock />
                      <FaChevronRight />
                    </div>
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock size={20} />
                    </div>
                    <div className="pin-library__dialog__library">
                      <img
                        src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                        alt=""
                      />
                      <h4>Character Inspiration - IRL</h4>
                      <GiPadlock />
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
                <div className="pin-library__dialog__create">
                  <div className="pin-library__dialog__cta">
                    <TiPlus size={32} />
                  </div>
                  <p>Créer un tableau</p>
                </div>
              </div> */}
            </div>
          )}

          <div className="pin-save pin-cta">
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
  );
}

export default Pin;
