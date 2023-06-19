import React from "react";
import "./Profile3.css";

function Profile3(props) {
  const { className } = props;

  return (
    <div className={`profile-6 ${className || ""}`}>
      <div className="profile-picture-9"></div>
      <div className="cupid-ai-x-samantha poppins-semi-bold-blumine-18px">Cupid AI x Samantha</div>
      <img className="divider-4" src="/img/divider.svg" alt="divider" />
    </div>
  );
}

export default Profile3;
