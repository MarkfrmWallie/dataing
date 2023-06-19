import React from "react";
import { Link } from "react-router-dom";
import "./GirlPitch.css";

function GirlPitch(props) {
  const { img_2880, img_2879, img_2881, sheLikesPsychedeli, hardNo, setMeUp, aaaand } = props;

  return (
    <div className="container-center-horizontal">
      <div className="girl-pitch screen">
        <div className="img_-container">
          <img className="img_2880" src={img_2880} alt="IMG_2880" />
          <img className="img_2879" src={img_2879} alt="IMG_2879" />
          <img className="img_2881" src={img_2881} alt="IMG_2881" />
        </div>
        <p className="she-likes-psychedeli poppins-semi-bold-blumine-16px">{sheLikesPsychedeli}</p>
        <div className="button">
          <div className="overlap-group-container-2">
            <div className="overlap-group1-3">
              <div className="hard-no valign-text-middle poppins-medium-white-16px">{hardNo}</div>
            </div>
            <div className="overlap-group2-1">
              <div className="set-me-up valign-text-middle poppins-medium-white-16px">{setMeUp}</div>
            </div>
          </div>
          <div className="overlap-group-11">
            <Link to="/girl-pitch-2">
              <div className="bg"></div>
            </Link>
            <div className="aaaand valign-text-middle poppins-medium-white-16px">{aaaand}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GirlPitch;
