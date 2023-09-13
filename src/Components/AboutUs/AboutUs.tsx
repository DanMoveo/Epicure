// AboutUs.tsx

import React from "react";

import "./AboutUs.scss";
import epicure from "../../Images/AboutUs/epicure_logo.png";
import appStore from "../../Images/AboutUs/appStore.png";
import googlePlay from "../../Images/AboutUs/googlePlay.png";
import { text } from "../../Services/textConstants";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutUsContainer">
      <img src={epicure} alt="icon" className="logo"></img>
      <img src={appStore} alt="icon" className="icon"></img>
      <img src={googlePlay} alt="icon" className="icon"></img>
      <h2 className="title">ABOUT US:</h2>
      <p className="text">
        {text.aboutUs1}
        <br />
        {text.aboutus2}
      </p>
      <p className="text"></p>
    </div>
  );
};

export default AboutUs;
