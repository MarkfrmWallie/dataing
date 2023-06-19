import React from "react";
import { Link } from "react-router-dom";
import "./GuyPitch3.css";

function GuyPitch3(props) {
  const {
    img_0609Abd7055511,
    img_Ebbe9E59289911,
    overwatch2MercySigmaBeeSkins11,
    over2,
    over1,
    whenHeIsntWorkin,
    hardNo,
    setMeUp,
    aaaand,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="guy-pitch-3 screen">
        <div className="x-container-1">
          <img className="img_0609-abd70555-1-1-1" src={img_0609Abd7055511} alt="IMG_0609ABD70555-1 1" />
          <img className="img_ebbe9-e592899-1-1-1" src={img_Ebbe9E59289911} alt="IMG_EBBE9E592899-1 1" />
        </div>
        <div className="over-container-1">
          <img
            className="overwatch-2-mercy-sigma-bee-skins-1-1-1"
            src={overwatch2MercySigmaBeeSkins11}
            alt="overwatch-2-mercy-sigma-bee-skins-1 1"
          />
          <img className="over-2-1" src={over2} alt="over 2" />
          <img className="over-1-1" src={over1} alt="over 1" />
        </div>
        <p className="when-he-isnt-workin poppins-semi-bold-blumine-16px">{whenHeIsntWorkin}</p>
        <div className="button-9">
          <div className="overlap-group-container-7">
            <div className="overlap-group2-16">
              <div className="hard-no-5 valign-text-middle poppins-medium-white-16px">{hardNo}</div>
            </div>
            <div className="overlap-group1-26">
              <div className="set-me-up-5 valign-text-middle poppins-medium-white-16px">{setMeUp}</div>
            </div>
          </div>
          <Link to="/guy-pitch-4">
            <div className="group-1905">
              <div className="overlap-group-31">
                <div className="aaaand-5 valign-text-middle poppins-medium-white-16px">{aaaand}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GuyPitch3;
