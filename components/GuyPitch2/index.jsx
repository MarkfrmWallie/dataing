import React from "react";
import { Link } from "react-router-dom";
import "./GuyPitch2.css";

function GuyPitch2(props) {
  const {
    img_E5Bc852Bcd6711,
    img_Bc8Cc7511Abb11,
    img_Bcc2F5Edad9F11,
    hesHadSomePretty,
    hardNo,
    setMeUp,
    aaaand,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="guy-pitch-2 screen">
        <div className="overlap-group4-7">
          <div className="overlap-group3-9">
            <div className="mask"></div>
            <img className="img_e5-bc852-bcd67-1-1" src={img_E5Bc852Bcd6711} alt="IMG_E5BC852BCD67-1 1" />
            <img className="img_bc8-cc7511-abb-1-1" src={img_Bc8Cc7511Abb11} alt="IMG_BC8CC7511ABB-1 1" />
          </div>
          <img className="img_bcc2-f5-edad9-f-1-1" src={img_Bcc2F5Edad9F11} alt="IMG_BCC2F5EDAD9F-1 1" />
        </div>
        <p className="hes-had-some-pretty poppins-semi-bold-blumine-16px">{hesHadSomePretty}</p>
        <div className="button-7">
          <div className="overlap-group-container-4">
            <div className="overlap-group2-14">
              <div className="hard-no-3 valign-text-middle poppins-medium-white-16px">{hardNo}</div>
            </div>
            <div className="overlap-group1-22">
              <div className="set-me-up-3 valign-text-middle poppins-medium-white-16px">{setMeUp}</div>
            </div>
          </div>
          <Link to="/guy-pitch-3">
            <div className="group-1904">
              <div className="overlap-group-28">
                <div className="aaaand-3 valign-text-middle poppins-medium-white-16px">{aaaand}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GuyPitch2;
