import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";

function SaveDialogBox({ boards, setCurrentBoard }) {
  return (
    <div className="sdb-container">
      <div className="sdb-container__dialog">
        <div className="sdb-container__dialog__title">
          <h3>Enregistrer dans le tableau</h3>
        </div>
        <div className="sdb-container__dialog__searchbar">
          <FaSearch
            className="search-container__search__icon"
            size={16}
            color="#767676"
          />
          <input
            type="text"
            placeholder="Rechercher"
            name="board-search"
            id="board-search"
          />
        </div>
        <div className="sdb-container__dialog__sections">
          <div className="sdb-container__dialog__section__title">
            <p>Meilleurs choix</p>
          </div>
          <div className="sdb-container__dialog__boards">
            <div className="sdb-container__dialog__board">
              <img
                src="https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
                alt=""
              />
              <h4>Character Inspiration - IRL</h4>
              <GiPadlock size={20} />
            </div>
          </div>
          <div className="sdb-container__dialog__section__title">
            <p>Tous les tableaux</p>
          </div>
          <div className="sdb-container__dialog__boards">
            {boards.map((board) => (
              <div
                to={`board/${board._id}`}
                onClick={() => setCurrentBoard(board)}
                key={board._id}
                className="sdb-container__dialog__board"
              >
                <img src={board.thumbnail} alt="" />
                <h4>{board.title}</h4>
                {board.secret && <GiPadlock size={20} />}
              </div>
            ))}
          </div>
        </div>
        <div className="sdb-container__dialog__create">
          <div className="sdb-container__dialog__cta">
            <TiPlus size={32} />
          </div>
          <p>Créer un tableau</p>
        </div>
      </div>
    </div>
  );
}

export default SaveDialogBox;
