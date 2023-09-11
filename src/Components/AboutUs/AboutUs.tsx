// AboutUs.tsx

import React from "react";

import "./AboutUs.scss";
import epicure from "../../images/AboutUs/epicure_logo.png";
import appStore from "../../images/AboutUs/appStore.png";
import googlePlay from "../../images/AboutUs/googlePlay.png";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutUsContainer">
      <img src={epicure} alt="icon" className="logo"></img>
      <img src={appStore} alt="icon" className="icon"></img>
      <img src={googlePlay} alt="icon" className="icon"></img>
      <h2 className="title">ABOUT US:</h2>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
        justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
        blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta.
        Vivamus elit urna, dignissim a vestibulum.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
        justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
      </p>
      <p className="text"></p>
    </div>
  );
};

export default AboutUs;
