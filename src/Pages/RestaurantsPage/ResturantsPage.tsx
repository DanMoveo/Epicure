// ResturantsPage.tsx

import React, { useState } from "react";
import "./ResturantsPage.scss";
import * as image from "../../Services/Images";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useNavigate, useParams } from "react-router-dom";

const ResturantsPage: React.FC = () => {
  const tabs = ["All", "New", "Most Popular", "Open Now"];

  const restaurants = [
    {
      image: image.claro,
      resturantName: "Claro",
      chefName: "Ran Shmueli",
      isNew: false,
      isMostPopular: false,
      isOpenNow: true,
      rate: 2,
    },
    {
      image: image.kab_kem,
      resturantName: "Kab Kem",
      chefName: "Yariv Malili",
      isNew: false,
      isMostPopular: true,
      isOpenNow: false,
      rate: 3,
    },
    {
      image: image.messa,
      resturantName: "Messa",
      chefName: "Aviv Moshe",
      isNew: false,
      isMostPopular: true,
      isOpenNow: true,
      rate: 4,
    },
    {
      image: image.nithan_thai,
      resturantName: "Nitan Thai",
      chefName: "Shahaf Shabta",
      isNew: true,
      isMostPopular: false,
      isOpenNow: false,
      rate: 3,
    },
    {
      image: image.nithan_thai,
      resturantName: "Nitan Thai",
      chefName: "Shahaf Shabta",
      isNew: true,
      isMostPopular: false,
      isOpenNow: false,
      rate: 2,
    },
    {
      image: image.nithan_thai,
      resturantName: "Nitan Thai",
      chefName: "Shahaf Shabta",
      isNew: true,
      isMostPopular: false,
      isOpenNow: false,
      rate: 5,
    },
  ];

  const { type } = useParams();
  const initialActiveTab = type ? tabs.indexOf(type) : 0;
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const navigate = useNavigate();
  const [mapViewActive, setMapViewActive] = useState(false);

  function formatChefName(chefName: string): string {
    const formattedName = chefName.replace(/ /g, "-");
    const lowercaseName = formattedName.toLowerCase();
    return lowercaseName;
  }

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    navigate(`/restaurants/${formatChefName(tabs[index])}`);
    setMapViewActive(false);
  };

  const filterRestaurants = () => {
    const activeTabLabel = tabs[activeTab];

    if (activeTabLabel === "All") {
      return restaurants;
    }

    return restaurants.filter((restaurant) => {
      if (activeTabLabel === "New") {
        return restaurant.isNew;
      } else if (activeTabLabel === "Most Popular") {
        return restaurant.isMostPopular;
      } else if (activeTabLabel === "Open Now") {
        return restaurant.isOpenNow;
      }
      return false;
    });
  };

  const handleMapViewClick = () => {
    setMapViewActive(true);
    setActiveTab(-1);
    navigate(`/restaurants/mapView`);
  };
  const filteredRestaurants = filterRestaurants();

  return (
    <div className="container">
      <h2 className="title">RESTAURANTS</h2>
      <div className="tabsContainer">
        
        <ul className="tabList">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tabItem ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
          <span className={`tabItemDesktop ${mapViewActive ? "active" : ""}`} onClick={handleMapViewClick}>
            Map View
          </span>
        </ul>

        <div className="filtersContainer">
          <div className="filter">
            <span className="filterText">Price Range</span>
            <img src={image.arrowDown} alt="arrow down" />
          </div>
          <div className="filter">
            <span className="filterText">Distance</span>
            <img src={image.arrowDown} alt="arrow down" />
          </div>
          <div className="filter">
            <span className="filterText">Rating</span>
            <img src={image.arrowDown} alt="arrow down" />
          </div>
        </div>

        {mapViewActive && (
          <div className="mapImageContainer">
            <img src={image.mapView} alt="Map View" />
          </div>
        )}

        <div className="listContainer">
          {filteredRestaurants.map((restaurant, index) => (
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
                rating={restaurant.rate}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantsPage;
