import React from "react";
import "./TextButtons.scss";
import { NavLink, useLocation } from "react-router-dom";

const TextButtons: React.FC = () => {
  const location = useLocation();

  return (
    <div className="textButtonsContainer">
      <NavLink
        to="/restaurants/All"
        className={`textButton ${
          location.pathname.includes("/restaurants") ? "active" : ""
        }`}
      >
        Restaurants
      </NavLink>
      <NavLink
        to="/chefs"
        className={`textButton ${
          location.pathname.includes("/chefs") ? "active" : ""
        }`}
      >
        Chefs
      </NavLink>
    </div>
  );
};

export default TextButtons;
