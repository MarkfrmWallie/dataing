import React from "react";
import { Link } from "react-router-dom";
import X1 from "../X1";
import IconPin from "../IconPin";
import X5 from "../X5";
import X6 from "../X6";
import "./MeetCupid2.css";

function MeetCupid2(props) {
  const {
    profilePicture1,
    cupidAi,
    text8,
    unvaxxedArmenian,
    weFoundAMatch3M,
    unvaxxedRemoveVaxxedFromMatchPool,
    text7,
    overlapGroup7,
    overlapGroup1,
    profilePicture2,
    view,
    text9,
    spanText1,
    spanText2,
    toolBar,
    x1Props,
    x5Props,
    x6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="meet-cupid screen">
        <div className="overlap-group8-2">
          <div className="profile-3">
            <div className="profile-picture-7" style={{ backgroundImage: `url(${profilePicture1})` }}></div>
            <div className="cupid-ai-1 poppins-semi-bold-blumine-18px">{cupidAi}</div>
            <img className="divider-3" src="/img/divider.svg" alt="divider" />
          </div>
          <img className="icon_back-1" src="/img/icon-back.svg" alt="icon_back" />
        </div>
        <X1
          wowYouUberEatsALot={x1Props.wowYouUberEatsALot}
          youreTop01OnO={x1Props.youreTop01OnO}
          className={x1Props.className}
        />
        <div className="x2-1">
          <div className="overlap-group2-4">
            <div className="text-8 poppins-medium-we-peep-11px">{text8}</div>
            <p className="unvaxxed-armenian poppins-medium-tickle-me-pink-14px">{unvaxxedArmenian}</p>
          </div>
        </div>
        <div className="x7-1">
          <div className="overlap-group6-1">
            <p className="we-found-a-match-3-m-1 poppins-medium-blumine-14px">{weFoundAMatch3M}</p>
          </div>
        </div>
        <div className="x4-1">
          <div className="overlap-group1-7">
            <p className="unvaxxed-remove-vaxxed-from-match-pool poppins-medium-tickle-me-pink-14px">
              {unvaxxedRemoveVaxxedFromMatchPool}
            </p>
          </div>
          <div className="text-7 poppins-medium-we-peep-12px">{text7}</div>
        </div>
        <div className="group-3-1">
          <div className="overlap-group7-3" style={{ backgroundImage: `url(${overlapGroup7})` }}>
            <div className="overlap-group1-8" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="profile-picture-8" style={{ backgroundImage: `url(${profilePicture2})` }}></div>
              <IconPin />
            </div>
            <Link to="/girl-match-learn">
              <div className="button_view">
                <div className="overlap-group-14">
                  <div className="view-2 poppins-medium-white-12px">{view}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-9 poppins-medium-tiara-12px">{text9}</div>
        </div>
        <div className="overlap-group9-2">
          <Link to="/cupid-x-samantha-yes">
            <p className="great-were-try-and-1 poppins-medium-white-14px">
              <span className="poppins-medium-blumine-14px">{spanText1}</span>
              <span className="poppins-bold-brink-pink-14px">{spanText2}</span>
            </p>
          </Link>
        </div>
        <X5 className={x5Props.className} />
        <X6 className={x6Props.className} />
        <img className="tool-bar-1" src={toolBar} alt="Tool Bar" />
      </div>
    </div>
  );
}

export default MeetCupid2;
