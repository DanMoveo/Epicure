// ForkKnifeIcon.tsx

import React from "react";
import "./ForkKnifeIcon.scss";
import * as Images from "../../../Services/Images";
import { NavLink } from "react-router-dom";

const ForkKnifeIcon: React.FC = () => {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <div className="epicureLogoContainer">
      <img src={Images.forkKnifeIcon} alt="iconFork" className="iconFork" />
        <h2 className="epicureLogo">EPICURE</h2>
        </div>
    </NavLink>
  );
};

export default ForkKnifeIcon;
