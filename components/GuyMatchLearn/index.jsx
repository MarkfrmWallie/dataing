import React from "react";
import { Link } from "react-router-dom";
import Scroll from "../Scroll";
import Name from "../Name";
import "./GuyMatchLearn.css";

function GuyMatchLearn(props) {
  const { overlapGroup, icon_Instagram, ceoDataing, weFeelGoodAboutThisOne, why, nameProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="guy-match-learn screen">
        <div className="profile-9">
          <div className="overlap-group-27" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <Scroll />
            <div className="overlap-group1-21">
              <div className="icon_-container-2">
                <img className="icon_instagram-2" src={icon_Instagram} alt="icon_instagram" />
                <div className="icon_spotify-2">
                  <div className="circle-2"></div>
                </div>
              </div>
              <div className="overlap-group2-13">
                <div className="ceo-dat-a-ing poppins-normal-white-14px">{ceoDataing}</div>
                <Name samantha18={nameProps.samantha18} className={nameProps.className} />
              </div>
            </div>
          </div>
        </div>
        <h1 className="we-feel-good-about-this-one-1 poppins-semi-bold-blumine-32px">{weFeelGoodAboutThisOne}</h1>
        <Link to="/guy-sales-pitch">
          <div className="button-6">
            <div className="overlap-group3-8">
              <div className="why-1 valign-text-middle poppins-medium-white-20px">{why}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GuyMatchLearn;
