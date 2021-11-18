import React from "react";

import { BsThreeDots, BsPencilFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

function HeaderInbox() {
  return (
    <div className="hi-container">
      <div className="hi-container__header">
        <div className="hi-container__header__title">
          <h2>Boîte de réception</h2>
        </div>
        <div className="hi-container__header__cta">
          <BsThreeDots size={24} />
        </div>
        <div className="hi-container__header__cta">
          <BsPencilFill size={18} />
        </div>
      </div>
      <div className="hi-container__body">
        <div className="hi-container__body__title">
          <h1>Partagez des idées avec vos amis</h1>
        </div>
        <div className="hi-container__body__search">
          <div className="hi-container__body__search__icon">
            <FaSearch size={12} />
          </div>
          <input
            type="text"
            name="username"
            placeholder="Rechercher par nom ou e-mail"
          />
        </div>
        <p className="hi-container__category">Suggestions</p>
        <div className="hi-container__accounts">
          <div className="hi-container__account">
            <img
              src="https://i.pinimg.com/236x/16/6e/1c/166e1c7f84931b07e4fab83ad5a723e7.jpg"
              alt=""
            />
            <div className="hi-container__account__infos">
              <div className="hi-container__account__infos__username">
                <h3>Abdou</h3>
              </div>
              <div className="hi-container__account__infos__relationship">
                <p>Collaborateur du tableau</p>
              </div>
            </div>
          </div>
          <div className="hi-container__account">
            <img
              src="https://i.pinimg.com/236x/ff/3a/5e/ff3a5e810d614a706b35210ab962741f.jpg"
              alt=""
            />
            <div className="hi-container__account__infos">
              <div className="hi-container__account__infos__username">
                <h3>Hmm...🤔</h3>
              </div>
              <div className="hi-container__account__infos__relationship">
                <p>Collaborateur du tableau</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderInbox;
