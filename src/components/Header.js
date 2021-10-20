import React from "react";

//* Icons
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Search from "./Search";
import { Link } from "react-router-dom";

function Header({ pins, setPins }) {
  const iconSize = 24;

  return (
    <div className="header-container">
      <div className="header-container__btn">
        <Link to="/">
          <svg
            className="pinterest-logo"
            height={iconSize}
            width={iconSize}
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label=""
            role="img"
          >
            <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
          </svg>
        </Link>
      </div>

      <div className="header-container__link header-container__link--active">
        <a href="/">
          <h1>Acceuil</h1>
        </a>
      </div>
      <div className="header-container__link">
        <Link to="/">
          <h1>Aujourd'hui</h1>
        </Link>
      </div>

      <Search className="header-container__search" setPins={setPins} />
      {/* <div className="header-container__background"></div> */}

      <div className="header-container__btn">
        <BsBellFill size={iconSize} color="#767676" />
      </div>

      <div className="header-container__btn">
        <AiFillMessage size={iconSize} color="#767676" />
      </div>

      <div className="header-container__btn">
        <a href="/profile/𝕭𝖊𝖑𝖟𝖊𝕭𝖚𝖇𝖚">
          <img
            className="header-container__profile-picture header-container__profile-picture--active"
            src="https://i0.wp.com/64.media.tumblr.com/c87de732d3923a195eb01bfd04e3f1b9/4b477156d7901c26-fc/s1280x1920/e9e320e1009b25c4f751b39e6ea5d45f367cde46.png"
            alt=""
          />
        </a>
      </div>

      <div className="header-container__btn header-container__btn--mini">
        <FaChevronDown color="#767676" />
      </div>
    </div>
  );
}

export default Header;
