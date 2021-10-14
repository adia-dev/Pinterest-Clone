import React from "react";
import { useParams } from "react-router";
import { MdNotes } from "react-icons/md";
import { BsThreeDots, BsStars } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";
import { GiPadlock } from "react-icons/gi";
import { CgOptions } from "react-icons/cg";
import Pin from "../components/Pin";

function Library({ pins, setPins }) {
  const { id } = useParams();

  const { name } = useParams();

  return (
    <div className="library-container">
      <div className="library-container__infos">
        <div className="library-container__infos__title">
          <h3>{name}</h3>
          <BsThreeDots className="library-container__infos__cta library-container__infos__cta--round library-container__infos__cta__more" />
        </div>
        <div className="library-container__infos__author">
          <img
            src="https://data.whicdn.com/images/352850024/original.jpg"
            alt=""
          />
          <TiPlus className="library-container__infos__cta library-container__infos__cta--round library-container__infos__cta__plus" />
        </div>
        <div className="library-container__infos__privacy-status">
          <GiPadlock />
          <p>Tableau secret</p>
        </div>

        <div className="library-container__infos__actions">
          <div className="library-container__infos__action">
            <BsStars className="library-container__infos__cta library-container__infos__cta--square library-container__infos__cta__actions" />
            <p>Plus d'idées</p>
          </div>
          <div className="library-container__infos__action">
            <BiEdit className="library-container__infos__cta library-container__infos__cta--square library-container__infos__cta__actions" />
            <p>Organiser</p>
          </div>
          <div className="library-container__infos__action">
            <MdNotes className="library-container__infos__cta library-container__infos__cta--square library-container__infos__cta__actions" />
            <p>Notes</p>
          </div>
        </div>
      </div>
      <div className="library-container__pins__actions">
        <h3>41 Épingles</h3>
        <CgOptions cursor="pointer" size={24} />
      </div>

      {name === "Creatures" && (
        <div className="library-container__pins">
          <Pin
            imageURL={
              "https://i.pinimg.com/236x/65/d5/17/65d51799a0be30e4da78295ec224b22e.jpg"
            }
          />
          <Pin
            imageURL={
              "https://i.pinimg.com/236x/d9/8b/e4/d98be403a6110e9e8042a0a0c1fbfd7b.jpg"
            }
          />
          <Pin
            imageURL={
              "https://i.pinimg.com/236x/40/c1/79/40c1793e3f30e98fd7c479982d639578.jpg"
            }
          />
          <Pin
            imageURL={
              "https://i.pinimg.com/236x/f2/e6/43/f2e6433e104250278f673bf87c5c61ea.jpg"
            }
          />
          <Pin
            imageURL={
              "https://i.pinimg.com/236x/2d/6d/0a/2d6d0a9e0bfd4f5f971eb1607455a36b.jpg"
            }
          />
        </div>
      )}

      {name === "Anatomy" && (
        <div className="library-container__pins">
          <Pin
            imageURL={
              "https://i.pinimg.com/236x/be/d7/3f/bed73f5a4ef11075f060965068f168cd.jpg"
            }
          />
          <Pin
            imageURL={
              "https://i.pinimg.com/236x/34/03/ce/3403ce07edf3859c5c959c70328e586a.jpg"
            }
          />
        </div>
      )}

      {name === "Mangas" && (
        <div className="library-container__pins">
          <Pin
            imageURL={
              "https://i0.wp.com/64.media.tumblr.com/c87de732d3923a195eb01bfd04e3f1b9/4b477156d7901c26-fc/s1280x1920/e9e320e1009b25c4f751b39e6ea5d45f367cde46.png"
            }
          />
          <Pin
            imageURL={
              "https://64.media.tumblr.com/ad3c9ca41806d40ef31b1fc201339848/c83aa501ab96e20e-20/s1280x1920/f7faae8454d6791c45c589ffa5f82c3bcc4d9570.jpg"
            }
          />
          <Pin
            imageURL={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZD1v7jXtuaP74wguyZnF2PVg9aWMmWBK8zBk7XC5PTmnVXAhK_caz9FKnvRBJX3i6zs&usqp=CAU"
            }
          />
          <Pin
            imageURL={
              "https://i.pinimg.com/736x/a5/ae/c9/a5aec9ead4d30c2aca5c92f5358fee7f.jpg"
            }
          />
          <Pin
            imageURL={
              "https://64.media.tumblr.com/bf707ad0bc50d593a0c94d652cd64474/5e546730ed9cfdef-bd/s640x960/0c5ccf1ce0c95ae963863161079218fbdd686bcd.png"
            }
          />
          <Pin
            imageURL={"https://data.whicdn.com/images/347036782/original.jpg"}
          />
          <Pin
            imageURL={
              "https://64.media.tumblr.com/04a332326f521c0049d5e00849319fff/992c3b8609b527e8-b4/s400x600/6a72ac7f3d15677f17049efcb9ad67bb8e65a3c8.png"
            }
          />
        </div>
      )}
    </div>
  );
}

export default Library;
