// ForkKnifeIcon.tsx

import React from "react";
import "./ForkKnifeIcon.scss";
import * as images from "../../../services/images";
import { NavLink } from "react-router-dom";

const ForkKnifeIcon: React.FC = () => {
  return (
    <NavLink to="/">
      <img src={images.forkKnifeIcon} alt="Stripes" className="icon" />
    </NavLink>
  );
};

export default ForkKnifeIcon;
