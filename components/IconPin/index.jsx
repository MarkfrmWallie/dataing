import React from "react";
import "./IconPin.css";

function IconPin(props) {
  const { className } = props;

  return (
    <div className={`icon_pin ${className || ""}`}>
      <img className="pin" src="/img/pin.svg" alt="pin" />
    </div>
  );
}

export default IconPin;
