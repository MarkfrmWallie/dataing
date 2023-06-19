import React from "react";
import Profile from "../Profile";
import X42 from "../X42";
import X9 from "../X9";
import IconPin from "../IconPin";
import Group4 from "../Group4";
import X10 from "../X10";
import X6 from "../X6";
import "./CupidXMarkYes.css";

function CupidXMarkYes(props) {
  const {
    sorrySarahHasntBe,
    heySamanthaIThin,
    hesGotAPrettySw,
    bg,
    imSoGladYoureInterested,
    areYouAvailableTonightAt930Pm,
    yesIAm,
    okayImDown,
    soooHowWasTheDateWhoWon,
    name,
    map,
    profilePicture1,
    profilePicture2,
    profileProps,
    x42Props,
    x9Props,
    iconPinProps,
    group4Props,
    x10Props,
    x6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cupid-x-mark-yes screen">
        <Profile className={profileProps.className} />
        <div className="overlap-group11">
          <X42 wowHeIsCuteOkayIllBite={x42Props.wowHeIsCuteOkayIllBite} />
          <div className="overlap-group2-11">
            <p className="y-sa-1 poppins-medium-blumine-12px">{sorrySarahHasntBe}</p>
          </div>
          <div className="x8-3">
            <div className="overlap-group6-5">
              <p className="y-sa-1 poppins-medium-blumine-12px">{heySamanthaIThin}</p>
            </div>
            <div className="overlap-group-25">
              <p className="hes-got-a-pretty-sw-1 poppins-medium-chathams-blue-12px">{hesGotAPrettySw}</p>
              <img className="bg-4" src={bg} alt="bg" />
            </div>
            <div className="overlap-group1-19">
              <p className="im-so-glad-youre-interested poppins-medium-blumine-12px">{imSoGladYoureInterested}</p>
            </div>
            <div className="overlap-group2-12">
              <p className="are-you-available-tonight-at-930-pm-1 poppins-medium-blumine-12px">
                {areYouAvailableTonightAt930Pm}
              </p>
            </div>
            <div className="overlap-group3-7">
              <div className="yes-i-am valign-text-middle poppins-medium-tickle-me-pink-12px">{yesIAm}</div>
            </div>
            <div className="overlap-group4-6">
              <div className="okay-im-down valign-text-middle poppins-medium-tickle-me-pink-12px">{okayImDown}</div>
            </div>
            <div className="overlap-group5-6">
              <p className="sooo-how-was-the-date-who-won poppins-medium-blumine-12px">{soooHowWasTheDateWhoWon}</p>
            </div>
          </div>
          <X9 yeahICouldBeConv={x9Props.yeahICouldBeConv} text4={x9Props.text4} className={x9Props.className} />
          <div className="overlap-group8-4">
            <div className="bg-5"></div>
            <p className="name-7 poppins-medium-blumine-12px">{name}</p>
            <img className="map-3" src={map} alt="Map" />
            <IconPin className={iconPinProps.className} />
            <div className="profile-picture-14" style={{ backgroundImage: `url(${profilePicture1})` }}></div>
            <div className="profile-picture-15" style={{ backgroundImage: `url(${profilePicture2})` }}></div>
          </div>
          <Group4
            overlapGroupContainer={group4Props.overlapGroupContainer}
            profilePicture={group4Props.profilePicture}
            className={group4Props.className}
          />
        </div>
        <X10 className={x10Props.className} />
        <X6 className={x6Props.className} />
      </div>
    </div>
  );
}

export default CupidXMarkYes;
