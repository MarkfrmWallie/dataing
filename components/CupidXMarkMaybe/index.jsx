import React from "react";
import Profile from "../Profile";
import X9 from "../X9";
import X11 from "../X11";
import X10 from "../X10";
import X6 from "../X6";
import "./CupidXMarkMaybe.css";

function CupidXMarkMaybe(props) {
  const {
    ehhIdkHesNotReallyMyType,
    text3,
    sorrySarahHasntBe,
    heySamanthaIThin,
    hesGotAPrettySw,
    bg,
    heSeemsReallyInte,
    damn,
    areYouAvailableTonightAt930Pm,
    yesImExcited,
    greatHesTakingY,
    map,
    x9Props,
    x6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cupid-x-mark-maybe screen">
        <Profile />
        <div className="overlap-group10">
          <div className="x4">
            <div className="overlap-group1-4">
              <p className="ehh-idk-hes-not-really-my-type poppins-medium-tickle-me-pink-12px">
                {ehhIdkHesNotReallyMyType}
              </p>
            </div>
            <div className="text-3 poppins-medium-we-peep-12px">{text3}</div>
          </div>
          <div className="overlap-group2-2">
            <p className="y-sa poppins-medium-blumine-12px">{sorrySarahHasntBe}</p>
          </div>
          <div className="x8">
            <div className="overlap-group5-2">
              <p className="y-sa poppins-medium-blumine-12px">{heySamanthaIThin}</p>
            </div>
            <div className="overlap-group-13">
              <p className="hes-got-a-pretty-sw poppins-medium-chathams-blue-12px">{hesGotAPrettySw}</p>
              <img className="bg-1" src={bg} alt="bg" />
            </div>
            <div className="overlap-group1-5">
              <p className="he-seems-really-inte poppins-medium-blumine-12px">{heSeemsReallyInte}</p>
            </div>
            <div className="overlap-group3-2">
              <div className="damn valign-text-middle poppins-medium-tickle-me-pink-12px">{damn}</div>
            </div>
            <div className="overlap-group2-3">
              <p className="are-you-available-tonight-at-930-pm poppins-medium-blumine-12px">
                {areYouAvailableTonightAt930Pm}
              </p>
            </div>
            <div className="overlap-group4-2">
              <div className="yes-im-excited valign-text-middle poppins-medium-tickle-me-pink-12px">{yesImExcited}</div>
            </div>
          </div>
          <X9 yeahICouldBeConv={x9Props.yeahICouldBeConv} text4={x9Props.text4} />
          <X11 />
        </div>
        <div className="group-4-1">
          <div className="overlap-group7-1">
            <p className="great-hes-taking-y poppins-medium-blumine-12px">{greatHesTakingY}</p>
            <img className="map" src={map} alt="Map" />
          </div>
        </div>
        <X10 />
        <X6 className={x6Props.className} />
      </div>
    </div>
  );
}

export default CupidXMarkMaybe;
