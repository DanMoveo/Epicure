// ForkKnifeIcon.tsx

import React from "react";
import "./ForkKnifeIcon.scss";
import * as Images from "../../../Services/Images";
import { NavLink } from "react-router-dom";

const ForkKnifeIcon: React.FC = () => {
  return (
    <NavLink to="/">
      <img src={Images.forkKnifeIcon} alt="Stripes" className="iconFork" />
    </NavLink>
  );
};

export default ForkKnifeIcon;
