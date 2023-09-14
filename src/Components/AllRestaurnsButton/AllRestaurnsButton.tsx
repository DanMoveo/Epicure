// AllRestaurnsButton.tsx

import React from "react";
import "./AllRestaurnsButton.scss";
import arrow from "../../Images/Arrow.png";
import { NavLink } from "react-router-dom";



const AllRestaurnsButton: React.FC= () => {
  return (
        <NavLink to="/restaurants/All" style={{ textDecoration: "none" }}>
          <button className="button">
            <h2>All Restaurants</h2>
            <img src={arrow} alt={arrow} />
          </button>
        </NavLink>
  );
};

export default AllRestaurnsButton;
