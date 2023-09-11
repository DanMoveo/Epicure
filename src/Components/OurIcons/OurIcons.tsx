// OurIcons.tsx

import React from "react";
import "./OurIcons.scss";
import vegan from "../../images/Icons/vegan.png";
import spicy from "../../images/Icons/spicy.png";
import vegetarian from "../../images/Icons/vegetarian.png";


const OurIcons: React.FC = () => {
  return (
    <>
      <div className="iconsContainer">
        <h2 className="title">THE MEANING OF OUR ICONS:</h2>
        <div className="ourIconContainer">
          <div className="ourIcon">
            <img src={spicy} alt="spicy" className="icon" />
            <h1 className="label">Spicy</h1>
          </div>

          <div className="ourIcon">
            <img src={vegetarian} alt="vegitarian" className="icon" />
            <h1 className="label">Vegitarian</h1>
          </div>

          <div className="ourIcon">
            <img src={vegan} alt="vegan" className="icon" />
            <h1 className="label">Vegan</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurIcons;
