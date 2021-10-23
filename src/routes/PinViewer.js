import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForward2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { MdImageSearch } from "react-icons/md";
import Pin from "../components/Pin";
import { Link } from "react-router-dom";
import FloatingActions from "../components/FloatingActions";

function PinViewer() {
  const [pin, setPin] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/pin/" + id)
      .then((res) => setPin(res.data))
      .catch((err) => {
        console.log("Could not find a pin in the database," + err);

        axios
          .get(
            `https://api.unsplash.com/photos/${id}?client_id=XeebjodiB1uOubNRQiQ8wnq-sKfYTAHLSANlHsviJ7Y`
          )
          .then((response) => {
            const pin = {
              id: response.data.id,
              title: response.data.description,
              url: response.data.urls.regular,
            };

            setPin(pin);
            console.log(pin);
          })
          .catch((err) => console.log("Error: " + err));
      });
  }, []);

  return (
    <div className="pv-container">
      <FloatingActions />

      <Link
        to="/profile/Beelzebvb"
        className="pv-container__back pv-container__cta"
      >
        <IoMdArrowRoundBack size={32} />
      </Link>
      <div className="pv-container__main">
        <div className="pv-container__main__content">
          <div className="pv-container__main__content__search">
            <MdImageSearch size={24} />
          </div>
          <div className="pv-container__main__content__media">
            {/* <img src={pin.url} alt="" /> */}
          </div>
        </div>
        <div className="pv-container__main__infos">
          <div className="pv-container__main__header">
            <div className="pv-container__main__header__ctas">
              <div className="pv-container__cta">
                <BsThreeDots size={28} />
              </div>
              <div className="pv-container__cta">
                <RiShareForward2Fill size={28} />
              </div>
            </div>
            <div className="pv-container__main__header__ctas">
              <div className="pv-container__main__header__boards">
                <h3>Art...</h3>
                <FaChevronDown size={20} />
              </div>
              <div className="pv-container__main__header__save">
                <h3>Enregistrer</h3>
              </div>
            </div>
          </div>
          <div className="pv-container__main__link">
            <a href="#">reddit.com</a>
          </div>
          <div className="pv-container__main__title">
            <h1>{pin.title}</h1>
          </div>
          <div className="pv-container__main__description">
            <p>{pin.description}</p>
          </div>
          <div className="pv-container__main__comments">
            <div className="pv-container__main__comments__header">
              <h3>Commentaires</h3>
              <div className="pv-container__cta">
                <FaChevronDown />
              </div>
            </div>
            <p>Partagez vos commentaires, posez une question ou complimentez</p>
            <div className="pv-container__main__comments__add">
              <img
                src="https://i.pinimg.com/236x/e2/3d/20/e23d206cc0a76d9e621a1dbae34c8df2.jpg"
                alt=""
              />
              <input
                placeholder="Ajouter un commentaire"
                type="text"
                name="comment"
                id="add-comment"
              />
            </div>
          </div>
          <div className="pv-container__main__user">
            <img
              src="https://i.pinimg.com/236x/e2/3d/20/e23d206cc0a76d9e621a1dbae34c8df2.jpg"
              alt=""
            />
            <p className="pv-container__main__user__infos">
              <a href="#">Beelzebvb</a> a enregistré cette Épingle dans le
              sous-tableau <a href="#">Warrior</a> du tableau{" "}
              <a href="#">Dark aesthetic</a>
            </p>
          </div>
        </div>
      </div>
      <div className="pv-container__similar">
        <div className="pv-container__similar__title">
          <h1>Plus de contenus similaires</h1>
        </div>
        <div className="pv-container__pins">
          {[...Array(15)].map((_, i) => (
            <Pin
              id={i}
              key={i}
              name="Saber Alter just hits different"
              suggestedBoard="Characters..."
              imageURL={
                "https://i.pinimg.com/564x/e3/b4/9b/e3b49bc2e13f688b9b87c1bf7730dee5.jpg"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PinViewer;
