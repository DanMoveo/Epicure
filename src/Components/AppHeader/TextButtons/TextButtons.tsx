import React, { useState } from "react";
import "./TextButtons.scss";
import { NavLink } from "react-router-dom";

const TextButtons: React.FC = () => {
  const [activeTab, setActiveTab] = useState("restaurants");

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="textButtonsContainer">
      <NavLink
        to="/restaurants/All"
        className={activeTab === "restaurants" ? "textButton active" : "textButton"}
        onClick={() => handleTabChange("restaurants")}
      >
        Restaurants
      </NavLink>
      <NavLink
        to="/chefs"
        className={activeTab === "chefs" ? "textButton active" : "textButton"}
        onClick={() => handleTabChange("chefs")}
      >
        Chefs
      </NavLink>
    </div>
  );
};

export default TextButtons;
