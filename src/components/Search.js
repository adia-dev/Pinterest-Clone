import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillLightbulbFill, BsFillTagFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { useState } from "react/cjs/react.development";
import Unsplash from "../utils/Unsplash";

function Search({ setPins }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      onGetDailyImages();
    }
  }, []);

  const onSearchBarKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      history.push("/");
      search(e.target.value).then((response) => {
        const pins = response.map((r, i) => ({
          id: i,
          name: r.description,
          imageURL: r.urls.regular,
        }));
        setPins(pins);
      });
    }
  };

  const onGetDailyImages = () => {
    getDailyImages().then((response) => {
      const pins = response.map((r, i) => ({
        id: i,
        name: r.description,
        imageURL: r.urls.regular,
      }));
      setPins(pins);
    });
  };

  async function search(query) {
    const request = await fetch(Unsplash.baseURL + query);
    setShowSuggestions(false);

    if (request.ok) {
      const result = await request.json();
      return result.results;
    }
    return false;
  }

  async function getDailyImages() {
    const request = await fetch(Unsplash.dailyURL);

    if (request.ok) {
      const result = await request.json();
      return result;
    }
    return false;
  }

  const onSearchBarFocus = () => {
    setShowSuggestions(true);
  };

  const onSearchBarFocusOut = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="search-container">
      <div className="search-container__search">
        <FaSearch
          className="search-container__search__icon"
          size={16}
          color="#767676"
        />
        <input
          type="text"
          onFocus={onSearchBarFocus}
          onBlur={onSearchBarFocusOut}
          placeholder="Rechercher"
          onKeyDown={onSearchBarKeyDown}
        />
      </div>

      {showSuggestions && (
        <div className="search-container__suggestions">
          <div className="search-container__background"></div>

          <div className="search-container__suggestions__category__title">
            <p>Recherches récentes</p>
            <AiFillCloseCircle size={16} color={"#767676"} />
          </div>
          <div className="search-container__suggestions__recent__tags">
            <div className="search-container__suggestions__recent__tag">
              <p>Shader graph</p>
            </div>
            <div className="search-container__suggestions__recent__tag">
              <p>stylized electricity animation</p>
            </div>
            <div className="search-container__suggestions__recent__tag">
              <p>qsab 101</p>
            </div>
          </div>

          <div className="search-container__suggestions__category__title">
            <BsFillTagFill size={16} color={"#000"} />
            <p>Shopping Spotlight</p>
          </div>

          <div className="search-container__suggestions__spotlights">
            <div className="search-container__suggestions__spotlight">
              <img
                src="https://media.melty.fr/article-4392269-ratio15_720-f6/media.jpg"
                alt=""
              />
              <p>-_-</p>
            </div>
            <div className="search-container__suggestions__spotlight">
              <img
                src="https://images.bfmtv.com/2qj55UyV53HY6nK7kuE0z2S76Ms=/0x64:2048x1216/640x0/images/Les-couvertures-des-premieres-tomes-de-Jujutsu-Kaisen-Demon-Slayer-et-L-Attaque-des-Titans-1125420.jpg"
                alt=""
              />
              <p>Mangas du moment !</p>
            </div>
            <div className="search-container__suggestions__spotlight">
              <img
                src="https://giffiles.alphacoders.com/208/208553.gif"
                alt=""
              />
              <p>Goku UI</p>
            </div>
            <div className="search-container__suggestions__spotlight">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
          </div>

          <div className="search-container__suggestions__category__title">
            <BsFillLightbulbFill size={16} color={"#000"} />
            <p>Des idées pour vous</p>
          </div>

          <div className="search-container__suggestions__libraries">
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
          </div>

          <div className="search-container__suggestions__category__title">
            <BsFillLightbulbFill size={16} color={"#000"} />
            <p>Populaire sur Pinterest (Clone) </p>
          </div>

          <div className="search-container__suggestions__libraries">
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
            <div className="search-container__suggestions__board">
              <img
                src="https://i.pinimg.com/originals/15/32/c5/1532c554a74eeabca8ca1847c46e9b08.jpg"
                alt=""
              />
              <p>Nike néon</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
