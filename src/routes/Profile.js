import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";

import { RiPencilFill, RiShareForward2Fill } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";
import { TiPlus } from "react-icons/ti";
import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";

function Profile({ pins, setPins }) {
  const { uid, section } = useParams();
  const [showEdit, setShowEdit] = useState(false);

  const iconSize = 28;

  return (
    <div className="profile-container">
      <div className="profile-container__infos">
        <img
          className="profile-container__infos__profile-picture"
          src="https://i0.wp.com/64.media.tumblr.com/c87de732d3923a195eb01bfd04e3f1b9/4b477156d7901c26-fc/s1280x1920/e9e320e1009b25c4f751b39e6ea5d45f367cde46.png"
        />
        <div className="profile-container__infos__name">
          <h1>🦆𝕭𝖊𝖑𝖟𝖊𝕭𝖚𝖇𝖚🦆 - 🐱‍👤 ™</h1>
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
          <div className="profile-container__action">
            <TiPlus size={iconSize} />
          </div>
        </div>
      </div>

      <div className="profile-container__libraries">
        <Link to="/library/1" className="profile-container__library">
          <div className="profile-container__library__pin">
            <div className="profile-container__library__private">
              <GiPadlock size={18} />
            </div>
            {showEdit && (
              <div className="profile-container__library__edit">
                <RiPencilFill size={18} />
              </div>
            )}
            <img
              src="https://i0.wp.com/64.media.tumblr.com/c87de732d3923a195eb01bfd04e3f1b9/4b477156d7901c26-fc/s1280x1920/e9e320e1009b25c4f751b39e6ea5d45f367cde46.png"
              alt=""
            />
          </div>
          <h3>Anatomy</h3>
          <p>57 Épingles</p>
        </Link>
        <div className="profile-container__library">
          <div className="profile-container__library__pin">
            <div className="profile-container__library__private">
              <GiPadlock size={18} />
            </div>
            <div className="profile-container__library__edit">
              <RiPencilFill size={18} />
            </div>
            <img
              src="https://img.wattpad.com/3a85eb04b49316c7dd2b9088317d262f84dd8129/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e744433445f39384745535f70773d3d2d34302e313635303334646466396433646461333837363032323233373436382e6a7067?s=fit&w=720&h=720"
              alt=""
            />
          </div>
          <h3>Anatomy</h3>
          <p>57 Épingles</p>
        </div>
        <div className="profile-container__library">
          <div className="profile-container__library__pin">
            <div className="profile-container__library__edit">
              <RiPencilFill size={18} />
            </div>
            <img
              src="https://data.whicdn.com/images/352850024/original.jpg"
              alt=""
            />
          </div>
          <h3>Anatomy</h3>
          <p>57 Épingles</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
