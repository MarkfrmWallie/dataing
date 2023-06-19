import React from "react";
import { Link } from "react-router-dom";
import "./GirlPitch3.css";

function GirlPitch3(props) {
  const {
    img_0609Abd7055511,
    img_Ebbe9E59289911,
    group2,
    profilePicture1,
    profilePicture2,
    tooBadMercyCant,
    hardNo,
    setMeUp,
    aaaand,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="girl-pitch-3 screen">
        <div className="x-container">
          <img className="img_0609-abd70555-1-1" src={img_0609Abd7055511} alt="IMG_0609ABD70555-1 1" />
          <img className="img_ebbe9-e592899-1-1" src={img_Ebbe9E59289911} alt="IMG_EBBE9E592899-1 1" />
        </div>
        <div className="group-2" style={{ backgroundImage: `url(${group2})` }}>
          <div className="profile-picture-12" style={{ backgroundImage: `url(${profilePicture1})` }}></div>
          <div className="profile-picture-13" style={{ backgroundImage: `url(${profilePicture2})` }}></div>
        </div>
        <p className="too-bad-mercy-cant poppins-semi-bold-blumine-16px">{tooBadMercyCant}</p>
        <div className="button-4">
          <div className="group-container">
            <div className="overlap-group2-10">
              <div className="hard-no-2 valign-text-middle poppins-medium-white-16px">{hardNo}</div>
            </div>
            <Link to="/cupid-x-samantha-yes">
              <div className="group-1902">
                <div className="overlap-group-22">
                  <div className="set-me-up-2 valign-text-middle poppins-medium-white-16px">{setMeUp}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group1-15">
            <div className="aaaand-2 valign-text-middle poppins-medium-white-16px">{aaaand}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GirlPitch3;
