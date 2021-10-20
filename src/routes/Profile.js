import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgOptions } from "react-icons/cg";
import { GiPadlock } from "react-icons/gi";
import { RiPencilFill, RiShareForward2Fill } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import FloatingActions from "../components/FloatingActions";
import CreateBoard from "../components/CreateBoard";

function Profile({ boards, setBoards, pins, setPins }) {
  const { username } = useParams();
  const [showEdit, setShowEdit] = useState(false);
  const [createBoardOpen, setCreateBoardOpen] = useState(false);
  const [plusActionOpen, setPlusActionOpen] = useState(false);
  const iconSize = 28;

  const onClickCreateBoard = () => {
    setCreateBoardOpen(true);
    setPlusActionOpen(false);
  };

  console.log(boards);

  return (
    <div className="profile-container">
      {createBoardOpen && (
        <CreateBoard setCreateBoardOpen={setCreateBoardOpen} />
      )}
      <FloatingActions />
      <div className="profile-container__infos">
        <img
          className="profile-container__infos__profile-picture"
          src="https://i0.wp.com/64.media.tumblr.com/c87de732d3923a195eb01bfd04e3f1b9/4b477156d7901c26-fc/s1280x1920/e9e320e1009b25c4f751b39e6ea5d45f367cde46.png"
        />
        <div className="profile-container__infos__name">
          {/* <h1>🦆𝕭𝖊𝖑𝖟𝖊𝕭𝖚𝖇𝖚🦆 - 🐱‍👤 ™</h1> */}
          <h1>🦆{username}🦆 - 🐱‍👤 ™</h1>
        </div>
        <div className="profile-container__infos__link">
          <a href="https://plus.google.com/113336444914058368441">
            plus.google.com/113336444914058368441
          </a>
        </div>
        <div className="profile-container__infos__bio">
          <p>@Belzeboobu·Watch me getting better at drawing</p>
        </div>
        <div className="profile-container__infos__following">
          <h4>1 abonné · 7 abonnements</h4>
        </div>
      </div>
      <div className="profile-container__actions">
        <div className="profile-container__actions__row">
          <div className="profile-container__action">
            <RiPencilFill size={iconSize} />
          </div>
          <div className="profile-container__action">
            <RiShareForward2Fill size={iconSize} />
          </div>
        </div>

        <div className="profile-container__actions__row">
          <div className="profile-container__action profile-container__action--active">
            <h3>Enregistrés</h3>
          </div>
          <div className="profile-container__action">
            <h3>Tests</h3>
          </div>
        </div>

        <div className="profile-container__actions__row">
          <div className="profile-container__action">
            <CgOptions size={iconSize} />
          </div>
          <div
            onClick={() => setPlusActionOpen(!plusActionOpen)}
            className="profile-container__action"
          >
            {plusActionOpen ? (
              <TiMinus size={iconSize} />
            ) : (
              <TiPlus size={iconSize} />
            )}
          </div>
          {plusActionOpen && (
            <div className="profile-container__action__create">
              <p>Créer</p>
              <Link to="/pin-builder">
                <div className="profile-container__action__create__link">
                  <h3>Épingle</h3>
                </div>
              </Link>
              <div onClick={onClickCreateBoard}>
                <div className="profile-container__action__create__link">
                  <h3>Tableau</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="profile-container__boards">
        {boards.map((board) => (
          <Link
            key={board._id}
            to={"/board/" + board._id}
            className="profile-container__board"
          >
            <div className="profile-container__board__pin">
              {board.secret && (
                <div className="profile-container__board__private">
                  <GiPadlock size={18} />
                </div>
              )}
              {showEdit && (
                <div className="profile-container__board__edit">
                  <RiPencilFill size={18} />
                </div>
              )}
              {board.pins.length > 0 ? (
                <img src={board.thumbnail} alt="" />
              ) : (
                <div className="profile-container__board__empty">
                  <h3>Empty</h3>
                </div>
              )}
            </div>
            <h3>{board.title}</h3>
            <p>{board.pins.length} Épingles</p>
          </Link>
        ))}
        {/* <Link to="/board/Creatures" className="profile-container__board">
          <div className="profile-container__board__pin">
            <div className="profile-container__board__private">
              <GiPadlock size={18} />
            </div>
            {showEdit && (
              <div className="profile-container__board__edit">
                <RiPencilFill size={18} />
              </div>
            )}
            <img
              src="https://i.pinimg.com/236x/65/d5/17/65d51799a0be30e4da78295ec224b22e.jpg"
              alt=""
            />
          </div>
          <h3>Creatures</h3>
          <p>5 Épingles</p>
        </Link>
        <Link to="/board/Mangas" className="profile-container__board">
          <div className="profile-container__board__pin">
            <div className="profile-container__board__private">
              <GiPadlock size={18} />
            </div>
            <div className="profile-container__board__edit">
              <RiPencilFill size={18} />
            </div>
            <img
              src="https://img.wattpad.com/3a85eb04b49316c7dd2b9088317d262f84dd8129/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e744433445f39384745535f70773d3d2d34302e313635303334646466396433646461333837363032323233373436382e6a7067?s=fit&w=720&h=720"
              alt=""
            />
          </div>
          <h3>Mangas</h3>
          <p>7 Épingles</p>
        </Link>
        <Link to="/board/Anatomy" className="profile-container__board">
          <div className="profile-container__board__pin">
            <div className="profile-container__board__edit">
              <RiPencilFill size={18} />
            </div>
            <img
              src="https://i.pinimg.com/236x/ca/91/94/ca9194b907b9a3dc8cb5ac57d30f5af3.jpg"
              alt=""
            />
          </div>
          <h3>Anatomy</h3>
          <p>2 Épingles</p>
        </Link> */}
      </div>
    </div>
  );
}

export default Profile;
