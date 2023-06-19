import React from "react";
import { Link } from "react-router-dom";
import Slides from "../Slides";
import "./Onboard.css";

function Onboard(props) {
  const { spotIllustration, title, findSomeone } = props;

  return (
    <div className="container-center-horizontal">
      <div className="onboard screen">
        <img className="spot-illustration" src={spotIllustration} alt="Spot Illustration" />
        <Slides />
        <h1 className="title poppins-medium-blumine-24px">{title}</h1>
        <Link to="/train" className="align-self-flex-end">
          <div className="button-1">
            <div className="overlap-group-12">
              <div className="find-someone valign-text-middle poppins-medium-white-20px">{findSomeone}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Onboard;
