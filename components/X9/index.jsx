import React from "react";
import "./X9.css";

function X9(props) {
  const { yeahICouldBeConv, text4, className } = props;

  return (
    <div className={`x9 ${className || ""}`}>
      <div className="overlap-group6">
        <p className="yeah-i-could-be-conv poppins-medium-tickle-me-pink-12px">{yeahICouldBeConv}</p>
      </div>
      <div className="text-4 poppins-medium-we-peep-12px">{text4}</div>
    </div>
  );
}

export default X9;
