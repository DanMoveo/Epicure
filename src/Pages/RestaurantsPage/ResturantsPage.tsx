// ResturantsPage.tsx

import React, { useState } from "react";
import "./ResturantsPage.scss";
import * as image from "../../Services/Images";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useNavigate, useParams } from "react-router-dom";

const ResturantsPage: React.FC = () => {
  const tabs = [
    {
      label: "All",
      restaurants: [
        {
          image: image.claro,
          resturantName: "Claro",
          chefName: "Ran Shmueli",
        },
        {
          image: image.kab_kem,
          resturantName: "Kab Kem",
          chefName: "Yariv Malili",
        },
        {
          image: image.messa,
          resturantName: "Messa",
          chefName: "Aviv Moshe",
        },
        {
          image: image.nithan_thai,
          resturantName: "Nitan Thai",

          chefName: "Shahaf Shabta",
        },
      ],
    },

    {
      label: "New",
      restaurants: [
        {
          image: image.nithan_thai,
          resturantName: "New Restaurant 1",
          chefName: "Chef 4",
        },
        {
          image: image.nithan_thai,
          resturantName: "New Restaurant 2",
          chefName: "Chef 5",
        },
      ],
    },
    {
      label: "Most Popular",
      restaurants: [
        {
          image: image.nithan_thai,
          resturantName: "Popular Restaurant 1",
          chefName: "Chef 7",
        },
        {
          image: image.nithan_thai,
          resturantName: "Popular Restaurant 2",
          chefName: "Chef 8",
        },
        {
          image: image.nithan_thai,
          resturantName: "Popular Restaurant 3",
          chefName: "Chef 9",
        },
      ],
    },
    {
      label: "Open Now",
      restaurants: [
        {
          image: image.nithan_thai,
          resturantName: "Open Restaurant 1",
          chefName: "Chef 10",
        },
        {
          image: image.nithan_thai,
          resturantName: "Open Restaurant 2",
          chefName: "Chef 11",
        },
        {
          image: image.nithan_thai,
          resturantName: "Open Restaurant 3",
          chefName: "Chef 12",
        },
      ],
    },
  ];
  const { type } = useParams();
  const initialActiveTab = type
    ? tabs.findIndex((tab) => tab.label === type)
    : 0;
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const navigate = useNavigate();

  function formatChefName(chefName: string): string {
    const formattedName = chefName.replace(/ /g, "-");
    const lowercaseName = formattedName.toLowerCase();
    return lowercaseName;
  }

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    navigate(`/restaurants/${formatChefName(tabs[index].label)}`);
  };

  return (
    <div className="container">
      <h2 className="title">RESTAURANTS</h2>
      <div className="tabContainer">
        <ul className="tab-list">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tab-item ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="listContainer">
          {tabs[activeTab]?.restaurants?.map((restaurant, index) => (
            <NavLink
              key={index}
              to={`/restaurant/${formatChefName(
                restaurant.resturantName
              )}/Brakefast`}
              style={{ textDecoration: "none" }}
            >
              <Card
                image={restaurant.image}
                restaurantName={restaurant.resturantName}
                chefName={restaurant.chefName}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantsPage;
