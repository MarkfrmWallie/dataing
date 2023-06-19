import React from "react";
import X42 from "../X42";
import "./GuyPitch4.css";

function GuyPitch4(props) {
  const {
    thatsAllIveGot,
    yepHesBeenToCo,
    bg,
    yesHeLastStreame,
    hisFavoriteSongTh,
    keSbjfa1,
    typeYourMessages,
    hardNo,
    setMeUp,
    aaaand,
    x421Props,
    x422Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="guy-pitch-4 screen">
        <p className="thats-all-ive-got poppins-semi-bold-blumine-16px">{thatsAllIveGot}</p>
        <X42 wowHeIsCuteOkayIllBite={x421Props.wowHeIsCuteOkayIllBite} className={x421Props.className} />
        <div className="x1-5">
          <div className="overlap-group5-8">
            <p className="yep-hes-been-to-co poppins-medium-chathams-blue-12px">{yepHesBeenToCo}</p>
            <img className="bg-9" src={bg} alt="bg" />
          </div>
        </div>
        <X42 wowHeIsCuteOkayIllBite={x422Props.wowHeIsCuteOkayIllBite} className={x422Props.className} />
        <div className="overlap-group8-6">
          <div className="overlap-group6-7">
            <p className="yes-he-last-streame poppins-medium-white-12px">{yesHeLastStreame}</p>
          </div>
          <div className="overlap-group7-6">
            <p className="his-favorite-song-th poppins-medium-white-12px">{hisFavoriteSongTh}</p>
          </div>
          <img className="kesbjfa-1" src={keSbjfa1} alt="ke;sbjfa 1" />
        </div>
        <div className="x6-7">
          <div className="overlap-group2-17">
            <div className="type-your-messages-7 poppins-medium-rock-blue-14px">{typeYourMessages}</div>
            <div className="button_send-7">
              <img className="icon_send-7" src="/img/icon-send-7.svg" alt="icon_send" />
            </div>
          </div>
        </div>
        <div className="button-10 poppins-medium-white-16px">
          <div className="overlap-group-container-8">
            <div className="overlap-group1-27">
              <div className="hard-no-6 valign-text-middle">{hardNo}</div>
            </div>
            <div className="overlap-group-32">
              <div className="set-me-up-6 valign-text-middle">{setMeUp}</div>
            </div>
          </div>
          <div className="aaaand-6 valign-text-middle">{aaaand}</div>
        </div>
      </div>
    </div>
  );
}

export default GuyPitch4;
