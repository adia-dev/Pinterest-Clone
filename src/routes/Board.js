import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { BsStars, BsThreeDots } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";
import { GiPadlock } from "react-icons/gi";
import { MdNotes } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { useParams } from "react-router";
import FloatingActions from "../components/FloatingActions";
import Pin from "../components/Pin";

function Board({ boards, setBoards }) {
  const { id } = useParams();

  const [board, setBoard] = useState({});
  const [pins, setPins] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.10:5000/board/pins/" + id)
      .then((res) => {
        setBoard(res.data.board);
        setPins(res.data.pins);
      })
      .catch((err) => console.log("Error: " + err));
  }, []);

  return (
    <div className="board-container">
      <FloatingActions />

      <div className="board-container__infos">
        <div className="board-container__infos__title">
          <h3>{board.title}</h3>
          <BsThreeDots className="board-container__infos__cta board-container__infos__cta--round board-container__infos__cta__more" />
        </div>
        <div className="board-container__infos__author">
          <img
            src="https://data.whicdn.com/images/352850024/original.jpg"
            alt=""
          />
          <TiPlus className="board-container__infos__cta board-container__infos__cta--round board-container__infos__cta__plus" />
        </div>
        <div className="board-container__infos__privacy-status">
          <GiPadlock />
          <p>Tableau secret</p>
        </div>

        <div className="board-container__infos__actions">
          <div className="board-container__infos__action">
            <BsStars className="board-container__infos__cta board-container__infos__cta--square board-container__infos__cta__actions" />
            <p>Plus d'idées</p>
          </div>
          <div className="board-container__infos__action">
            <BiEdit className="board-container__infos__cta board-container__infos__cta--square board-container__infos__cta__actions" />
            <p>Organiser</p>
          </div>
          <div className="board-container__infos__action">
            <MdNotes className="board-container__infos__cta board-container__infos__cta--square board-container__infos__cta__actions" />
            <p>Notes</p>
          </div>
        </div>
      </div>
      <div className="board-container__pins__actions">
        <h3>{pins.length} Épingles</h3>
        <CgOptions cursor="pointer" size={24} />
      </div>

      {pins && (
        <div className="board-container__pins">
          {pins.map((pin) => (
            <Pin
              boards={boards}
              setBoards={setBoards}
              key={pin._id}
              id={pin.id}
              imageURL={pin.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Board;
