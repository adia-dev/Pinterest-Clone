import React, { useState } from "react";

//* Icons
import { BsBellFill, BsPinterest } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Search from "./Search";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function UnAuthHeader({ pins, setPins }) {
  const iconSize = 34;
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setOpenSignup(false);
      setOpenLogin(false);
    }
  });

  return (
    <div className="ua-header-container">
      {openLogin && <Login setOpenLogin={setOpenLogin} />}
      {openSignup && <Signup setOpenSignup={setOpenSignup} />}
      <div className="ua-header-container__logo">
        <BsPinterest size={iconSize} />
        <h2>Pinterest</h2>
      </div>
      <div className="ua-header-container__links">
        <a href="#">À propos</a>
        <a href="#">Business</a>
        <a href="#">Blog</a>
      </div>
      <div className="ua-header-container__auth">
        <div
          onClick={() => setOpenLogin(true)}
          className="ua-header-container__auth__login ua-header-container__btn"
        >
          <p>Se connecter</p>
        </div>
        <div
          onClick={() => setOpenSignup(true)}
          className="ua-header-container__auth__signup ua-header-container__btn"
        >
          <p>S'inscrire</p>
        </div>
      </div>
    </div>
  );
}

export default UnAuthHeader;
