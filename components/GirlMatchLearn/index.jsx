import React from "react";
import { Link } from "react-router-dom";
import Profile2 from "../Profile2";
import "./GirlMatchLearn.css";

function GirlMatchLearn(props) {
  const { weFeelGoodAboutThisOne, why, profile2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="girl-match-learn screen">
        <Profile2 nameProps={profile2Props.nameProps} />
        <h1 className="we-feel-good-about-this-one poppins-semi-bold-blumine-32px">{weFeelGoodAboutThisOne}</h1>
        <Link to="/girl-pitch">
          <div className="button-2">
            <div className="overlap-group3-3">
              <div className="why valign-text-middle poppins-medium-white-20px">{why}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GirlMatchLearn;
