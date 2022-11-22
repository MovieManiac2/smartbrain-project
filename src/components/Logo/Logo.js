import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = function () {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 200, width: 200 }}
      >
        <div className="pa3">
          <img alt="logo" style={{ paddingTop: "5px" }} src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
