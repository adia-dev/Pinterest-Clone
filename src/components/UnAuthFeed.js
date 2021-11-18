import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function UnAuthFeed() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [slideUp, setSlideUp] = useState(true);
  const sliderInfos = [
    {
      name: "jardinage",
      color: "#407a57",
      //! Ajoute un tableau d'images correspondant au thème
      //? ex : images: ["plante", "fleur"],
    },
    {
      name: "repas pour le week-end",
      color: "#618c7b",
    },
    {
      name: "décoration intérieure",
      color: "#c28b00",
    },
    {
      name: "tenue pour un nouveau look",
      color: "#0076d3",
    },
  ];

  const incrementSlider = () => {
    setSlideUp(!slideUp);
    setCurrentSlider((currentSlider + 1) % sliderInfos.length);
  };

  //! Conflit entre onClick et setTimeout
  function selectSlider(index) {
    if (index >= 0 && index < sliderInfos.length) {
      setCurrentSlider(index);
    }
  }

  const incrementInterval = setTimeout(incrementSlider, 3000);
  useEffect(() => {
    return () => clearTimeout(incrementInterval);
  }, []);

  useEffect(() => {}, [currentSlider]);

  return (
    <div>
      <div className="ua-feed-container">
        <div
          style={{ backgroundColor: sliderInfos[currentSlider].color }}
          className="ua-feed-container__down ua-feed-container__discovery--color-fade"
        >
          <FaChevronDown size={24} />
        </div>
        <div className="ua-feed-container__fade"></div>
        <div className="ua-feed-container__discovery">
          <h3>Trouvez votre prochaine idée de</h3>
          <h3
            className="ua-feed-container__discovery--color-fade"
            style={{ color: sliderInfos[currentSlider].color }}
          >
            {sliderInfos[currentSlider].name}
          </h3>
          <div className="ua-feed-container__discovery__sliders ">
            {[...Array(4)].map((_, i) => (
              <div
                //TODO: implementer selectSlider onClick={() => selectSlider(i)}
                key={i}
                style={{
                  backgroundColor:
                    i === currentSlider && sliderInfos[currentSlider].color,
                }}
                className={`ua-feed-container__discovery__slider ua-feed-container__discovery--color-fade ${
                  i === currentSlider &&
                  "ua-feed-container__discovery__slider--current"
                }`}
                id="slider-1"
              ></div>
            ))}
          </div>
        </div>
        {/* //TODO: Recuperer des pins depuis une API
            //TODO: Changer [...Array(5)]  
            PS : C'est moche eheh
            */}
        <div className="ua-feed-container__pins">
          <div
            className={`ua-feed-container__pins__column mt-5 slide-${
              slideUp ? "up" : "down"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ua-feed-container__pin">
                <img
                  src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div
            className={`ua-feed-container__pins__column mt-10 delay-1 slide-${
              slideUp ? "up" : "down"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ua-feed-container__pin">
                <img
                  src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div
            className={`ua-feed-container__pins__column mt-15 delay-2 slide-${
              slideUp ? "up" : "down"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ua-feed-container__pin">
                <img
                  src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div
            className={`ua-feed-container__pins__column mt-20 delay-3 slide-${
              slideUp ? "up" : "down"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ua-feed-container__pin">
                <img
                  src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div
            className={`ua-feed-container__pins__column mt-15 delay-4 slide-${
              slideUp ? "up" : "down"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ua-feed-container__pin">
                <img
                  src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div
            className={`ua-feed-container__pins__column mt-10 delay-5 slide-${
              slideUp ? "up" : "down"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ua-feed-container__pin">
                <img
                  src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div
            className={`ua-feed-container__pins__column mt-5 delay-6 slide-${
              slideUp ? "up" : "down"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ua-feed-container__pin">
                <img
                  src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnAuthFeed;
