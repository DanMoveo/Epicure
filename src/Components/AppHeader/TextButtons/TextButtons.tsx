// TextButtons.tsx

import React from "react";
import "./TextButtons.scss";
import { NavLink } from "react-router-dom";

const TextButtons: React.FC = () => {
  return (
    <div className="textButtonsContainer">
      <NavLink to="/restaurants/All">
        <button className="textButton">Restaurants</button>
      </NavLink>
      <button className="textButton">Chefs</button>
    </div>
  );
};

export default TextButtons;
