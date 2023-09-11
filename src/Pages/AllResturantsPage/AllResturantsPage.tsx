// AllResturantsPage.tsx

import React, { useState } from "react";
import "./AllResturantsPage.scss";
import AppHeader from "../../Components/AppHeader/AppHeader";
import AppFooter from "../../Components/AppFooter/AppFooter";
import claro from "../../images/ResturantImages/claro.png";

const AllResturantsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "All",
      restaurants: [
        {
          image: claro,
          resturantName: "Restaurant 1",
          chefName: "Chef 1",
        },
        {
          image: claro,
          resturantName: "Restaurant 2",
          chefName: "Chef 2",
        },
        {
          image: claro,
          resturantName: "Restaurant 3",
          chefName: "Chef 3",
        },
      ],
    },
    {
      label: "New",
      restaurants: [
        {
          image: claro,
          resturantName: "New Restaurant 1",
          chefName: "Chef 4",
        },
        {
          image: claro,
          resturantName: "New Restaurant 2",
          chefName: "Chef 5",
        },
      ],
    },
    {
      label: "Most Popular",
      restaurants: [
        {
          image: claro,
          resturantName: "Popular Restaurant 1",
          chefName: "Chef 7",
        },
        {
          image: claro,
          resturantName: "Popular Restaurant 2",
          chefName: "Chef 8",
        },
        {
          image: claro,
          resturantName: "Popular Restaurant 3",
          chefName: "Chef 9",
        },
      ],
    },
    {
      label: "Open Now",
      restaurants: [
        {
          image: claro,
          resturantName: "Open Restaurant 1",
          chefName: "Chef 10",
        },
        {
          image: claro,
          resturantName: "Open Restaurant 2",
          chefName: "Chef 11",
        },
        {
          image: claro,
          resturantName: "Open Restaurant 3",
          chefName: "Chef 12",
        },
      ],
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <AppHeader />
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

          <ul className="listContainer">
            {tabs[activeTab].restaurants.map((restaurant, index) => (
              <ul key={index} className="ul">
                <div className="restaurantCard">
                  <img
                    src={restaurant.image}
                    alt={restaurant.resturantName}
                    className="restaurant-image"
                  />
                  <span className="restaurant-name">
                    {restaurant.resturantName}
                  </span>
                  <span className="chef-name">{restaurant.chefName}</span>
                </div>
              </ul>
            ))}
          </ul>
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default AllResturantsPage;
