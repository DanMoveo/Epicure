// OurIcons.tsx

import React from "react";
import "./OurIcons.scss";
import * as image from "../../Services/Images"

const OurIcons: React.FC = () => {

  return (
    <>
      <div className="iconsContainer">
        <h2 className="title">THE MEANING OF OUR ICONS:</h2>
        <div className="ourIconContainer">
          <div className="ourIcon">
            <img src={image.spicyBig} alt="spicy" className="iconSpicy" />
            <img src={image.spicyBig} alt="spicyBig" className="iconBig" />
            <h1 className="label">Spicy</h1>
          </div>

          <div className="ourIcon">
            <img src={image.vegetarianBig} alt="vegitarian" className="iconVegitarian" />
            <img src={image.vegetarianBig} alt="vegetarianBig" className="iconVegitarianBig" />

            <h1 className="label">Vegetarian</h1>
          </div>

          <div className="ourIcon">
            <img src={image.veganBig} alt="vegan" className="icon" />
            <img src={image.veganBig} alt="veganBig" className="iconBig" />
            <h1 className="label">Vegan</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurIcons;
