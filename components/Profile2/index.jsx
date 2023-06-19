import React from "react";
import Scroll from "../Scroll";
import Name from "../Name";
import "./Profile2.css";

function Profile2(props) {
  const { className, nameProps } = props;

  return (
    <div className={`profile-4 ${className || ""}`}>
      <div className="overlap-group-15">
        <Scroll />
        <div className="overlap-group1-9">
          <div className="icon_-container">
            <img className="icon_instagram" src="/img/icon-instagram@2x.png" alt="icon_instagram" />
            <div className="icon_spotify">
              <div className="circle"></div>
            </div>
          </div>
          <div className="overlap-group2-5">
            <div className="designer-adorable-agency poppins-normal-white-14px">Designer, Adorable Agency</div>
            <Name samantha18={nameProps.samantha18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile2;
