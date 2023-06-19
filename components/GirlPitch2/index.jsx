import React from "react";
import { Link } from "react-router-dom";
import "./GirlPitch2.css";

function GirlPitch2(props) {
  const { overwatch2MercySigmaBeeSkins11, over2, over1, map, youBothWentToThe, hardNo, setMeUp, aaaand } = props;

  return (
    <div className="container-center-horizontal">
      <div className="girl-pitch-2 screen">
        <div className="over-container">
          <img
            className="overwatch-2-mercy-sigma-bee-skins-1-1"
            src={overwatch2MercySigmaBeeSkins11}
            alt="overwatch-2-mercy-sigma-bee-skins-1 1"
          />
          <img className="over-2" src={over2} alt="over 2" />
          <img className="over-1" src={over1} alt="over 1" />
        </div>
        <img className="map-1" src={map} alt="Map" />
        <p className="you-both-went-to-the poppins-semi-bold-blumine-16px">{youBothWentToThe}</p>
        <div className="button-3">
          <div className="overlap-group-container-3">
            <div className="overlap-group2-7">
              <div className="hard-no-1 valign-text-middle poppins-medium-white-16px">{hardNo}</div>
            </div>
            <div className="overlap-group1-10">
              <div className="set-me-up-1 valign-text-middle poppins-medium-white-16px">{setMeUp}</div>
            </div>
          </div>
          <Link to="/girl-pitch-3">
            <div className="group-1900">
              <div className="overlap-group-17">
                <div className="aaaand-1 valign-text-middle poppins-medium-white-16px">{aaaand}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GirlPitch2;
