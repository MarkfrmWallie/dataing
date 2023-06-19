import React from "react";
import { Link } from "react-router-dom";
import X1 from "../X1";
import Group4 from "../Group4";
import X5 from "../X5";
import X6 from "../X6";
import "./MeetCupid.css";

function MeetCupid(props) {
  const {
    profilePicture,
    cupidAi,
    armenian2535Rav,
    text1,
    weFoundAMatch3M,
    spanText1,
    spanText2,
    toolBar,
    x1Props,
    group4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="meet-cupid-2 screen">
        <div className="overlap-group8">
          <div className="profile">
            <div className="profile-picture" style={{ backgroundImage: `url(${profilePicture})` }}></div>
            <div className="cupid-ai poppins-semi-bold-blumine-18px">{cupidAi}</div>
            <img className="divider" src="/img/divider.svg" alt="divider" />
          </div>
          <img className="icon_back" src="/img/icon-back.svg" alt="icon_back" />
        </div>
        <X1 wowYouUberEatsALot={x1Props.wowYouUberEatsALot} youreTop01OnO={x1Props.youreTop01OnO} />
        <div className="x2">
          <div className="overlap-group1">
            <p className="armenian-25-35-rav poppins-medium-tickle-me-pink-14px">{armenian2535Rav}</p>
          </div>
          <div className="text-1 poppins-medium-we-peep-11px">{text1}</div>
        </div>
        <div className="x7">
          <div className="overlap-group5">
            <p className="we-found-a-match-3-m poppins-medium-blumine-14px">{weFoundAMatch3M}</p>
          </div>
        </div>
        <Group4 overlapGroupContainer={group4Props.overlapGroupContainer} profilePicture={group4Props.profilePicture} />
        <div className="overlap-group7">
          <Link to="/cupid-x-mark-yes">
            <p className="great-were-try-and poppins-medium-white-14px">
              <span className="poppins-medium-blumine-14px">{spanText1}</span>
              <span className="poppins-bold-brink-pink-14px">{spanText2}</span>
            </p>
          </Link>
        </div>
        <X5 />
        <X6 />
        <img className="tool-bar" src={toolBar} alt="Tool Bar" />
      </div>
    </div>
  );
}

export default MeetCupid;
