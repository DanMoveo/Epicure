// AboutUsDesktop.tsx

import React from "react";

import "./AboutUsDesktop.scss";
import * as image from "../../Services/Images";
import { text } from "../../Services/textConstants";

const AboutUsDesktop: React.FC = () => {
  return (
    <div className="aboutUsDesktopContainer">
      <div className="textContainer">
        <h2 className="title">ABOUT US:</h2>
        <p className="text">{text.aboutUs1}</p>
        <p className="text">{text.aboutus2}</p>

        <div className="iconContainer">
          <img src={image.appStore} alt="icon" className="icon"></img>
          <img src={image.googlePlay} alt="icon" className="icon"></img>
        </div>
      </div>
      <div className="logoContainer">
        <img src={image.epicure_logo} alt="icon" className="logo"></img>
      </div>
    </div>
  );
};

export default AboutUsDesktop;
