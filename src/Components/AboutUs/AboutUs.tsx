// AboutUs.tsx

import React from "react";

import "./AboutUs.scss";
import * as image from "../../Services/Images";
import { text } from "../../Services/textConstants";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutUsContainer">
      <img src={image.appStore} alt="icon" className="icon"></img>
      <img src={image.googlePlay} alt="icon" className="icon"></img>
      <h2 className="title">ABOUT US:</h2>
      <p className="text">
        {text.aboutUs1}
        <br />
        {text.aboutus2}
      </p>
    </div>
  );
};

export default AboutUs;
