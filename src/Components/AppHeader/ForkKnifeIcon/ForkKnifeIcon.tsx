// ForkKnifeIcon.tsx

import React from "react";
import "./ForkKnifeIcon.scss";
import * as images from "../../../services/images";

const ForkKnifeIcon: React.FC = () => {
  return (
    <button className="icon">
      <img src={images.forkKnifeIcon} alt="Stripes" />
    </button>
  );
};

export default ForkKnifeIcon;
