import React from "react";

function HeaderNotifications() {
  return (
    <div className="hn-container">
      <div className="hn-container__header">
        <h1 className="hn-container__header__title">Mises à jour</h1>
      </div>
      <div className="hn-container__body">
        <div className="hn-container__body__notifications">
          <div className="hn-container__body__notification">
            <p>
              Vous aimerez sûrement ces 17 idées{" "}
              <span className="light-grey">1 j</span>
            </p>
            <div className="hn-container__body__notification__images">
              <img
                src="https://i.pinimg.com/236x/15/a4/2d/15a42d0fd47ef3da8ac0f8526e2cddf0.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/236x/5d/00/a4/5d00a4dc308d7ce303f13c2e2f0dcfc4.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/236x/ff/3a/5e/ff3a5e810d614a706b35210ab962741f.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="hn-container__body__notification">
            <p>
              Vous aimerez sûrement ces 17 idées{" "}
              <span className="light-grey">1 j</span>
            </p>
            <div className="hn-container__body__notification__images">
              <img
                src="https://i.pinimg.com/236x/15/a4/2d/15a42d0fd47ef3da8ac0f8526e2cddf0.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/236x/5d/00/a4/5d00a4dc308d7ce303f13c2e2f0dcfc4.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/236x/ff/3a/5e/ff3a5e810d614a706b35210ab962741f.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNotifications;
