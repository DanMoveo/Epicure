// ResturantsPage.tsx

import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import "./ResturantsPage.scss";
import * as image from "../../Services/Images";

import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import "rc-slider/assets/index.css";
import RangeSlider from "../../Components/RangeSlider/RangeSlider";
import Tabs from "../../Components/Tabs/Tabs";
import { useClickOutsideHandler } from "../../Hooks/useClickOutsideHandler";
import axios from "axios";


type Restaurant = {
  id: string;
  image: string;
  name: string;
  chefName: string;
  rate: number;
};
const ResturantsPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetchData(); 
  }, []);

  async function fetchMostPopularRestaurants() {
    try {
      const response = await axios.get<Restaurant[]>(
        "http://localhost:5000/restaurants/mostPopular"
      );
      const data = response.data;
      setRestaurants(data);
    } catch (error) {
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get<Restaurant[]>(
        "http://localhost:5000/restaurants/"
      );
      const data = response.data;
      setRestaurants(data);
    } catch (error) {}
  }

  const tabs: string[] = ["All", "New", "Most Popular", "Open Now"];

  const { type } = useParams<{ type?: string }>();
  const initialActiveTab = type ? tabs.indexOf(type) : 0;
  const [activeTab, setActiveTab] = useState<number>(initialActiveTab);
  const navigate = useNavigate();
  const [mapViewActive, setMapViewActive] = useState(false);
  const [priceSlide, setPriceSlide] = useState(false);
  const [distanceSlide, setDistanceSlide] = useState(false);
  const [rateWindow, setRateWindow] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedRange, setSelectedRange] = useState<[number, number]>([
    0, 100,
  ]);

  const priceSlideRef = useRef<HTMLDivElement | null>(null);
  useClickOutsideHandler(priceSlideRef, () => {
    setPriceSlide(false);
  });
  const distanceSlideRef = useRef<HTMLDivElement | null>(null);
  useClickOutsideHandler(distanceSlideRef, () => {
    setDistanceSlide(false);
  });
  const rateWindowRef = useRef<HTMLDivElement | null>(null);
  useClickOutsideHandler(rateWindowRef, () => {
    setRateWindow(false);
  });
  const handleRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSelectedRange(selectedRange);
    }
  };

  const priceSlideOpen = () => {
    setPriceSlide(true);
  };

  const rateWindowOpen = () => {
    setRateWindow(true);
  };

  const distanceSlideOpen = () => {
    setDistanceSlide(true);
  };

  function formatChefName(chefName: string): string {
    const formattedName = chefName.replace(/ /g, "-");
    const lowercaseName = formattedName.toLowerCase();
    return lowercaseName;
  }

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (index === 2) {
      fetchMostPopularRestaurants();
    } else {
      fetchData();
    }
    navigate(`/restaurants/${formatChefName(tabs[index])}`);
    setMapViewActive(false);
  };

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    rowIndex: number
  ) => {
    if (event.target.checked) {
      setSelectedRatings((prevSelectedRatings) => [
        ...prevSelectedRatings,
        rowIndex,
      ]);
    } else {
      setSelectedRatings((prevSelectedRatings) =>
        prevSelectedRatings.filter((rating) => rating !== rowIndex)
      );
    }
  };

  const filterRestaurants = () => {
    return restaurants.filter((restaurant) => {
      const hasSelectedRating =
        selectedRatings.length === 0 ||
        selectedRatings.includes(restaurant.rate);
      return hasSelectedRating;
    });
  };

  const handleMapViewClick = () => {
    setMapViewActive(true);
    setActiveTab(-1);
    navigate(`/restaurants/mapView`);
  };
  const filteredRestaurants = filterRestaurants();

  return (
    <div className="restaurantsContainer">
      <h2 className="title">RESTAURANTS</h2>
      <div className="tabsContainer">
        {/* Tabs */}
        <ul className="tabList">
          <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
          <span
            className={`tabItemDesktop ${mapViewActive ? "active" : ""}`}
            onClick={handleMapViewClick}
          >
            Map View
          </span>
        </ul>

        {/* Filters */}
        <div className="filtersContainer">
          <button className="filter" onClick={priceSlideOpen}>
            <span className="filterText">Price Range</span>
            <img src={image.arrowDown} alt="arrow down" />
          </button>
          <button className="filter">
            <span className="filterText" onClick={distanceSlideOpen}>
              Distance
            </span>
            <img src={image.arrowDown} alt="arrow down" />
          </button>
          <button className="filter" onClick={rateWindowOpen}>
            <span className="filterText">Rating</span>
            <img src={image.arrowDown} alt="arrow down" />
          </button>
        </div>

        {/* Price Range Filter */}
        {priceSlide && (
          <div className="slideContainer" ref={priceSlideRef}>
            <span className="slideTitle">Price Range Selected</span>
            <span className="slideRange">₪12 - ₪357</span>
            <RangeSlider min={0} max={100} onChange={handleRangeChange} />
          </div>
        )}

        {/* Distance Filter */}
        {distanceSlide && (
          <div className="slideContainer distanceSlide" ref={distanceSlideRef}>
            <span className="slideTitle">Distance</span>
            <RangeSlider min={0} max={100} onChange={handleRangeChange} />
          </div>
        )}

        {/* Rating Filter */}
        {rateWindow && (
          <div className="slideContainer rateWindow" ref={rateWindowRef}>
            <span className="slideTitle">Rating</span>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <div key={rowIndex} className="rateWindowRow">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(event) =>
                    handleCheckboxChange(event, rowIndex + 1)
                  }
                />
                {Array.from({ length: 5 }).map((_, colIndex) => (
                  <img
                    key={colIndex}
                    src={
                      colIndex < rowIndex + 1 ? image.starFull : image.starEmpty
                    }
                    alt={`Star ${colIndex < rowIndex + 1 ? "Full" : "Empty"}`}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Map View */}
        {mapViewActive && (
          <div className="mapImageContainer">
            <img src={image.mapView} alt="Map View" />
          </div>
        )}

        {/* Restaurant List */}
        {!mapViewActive && (
          <div className="restaurantListContainer">
            {filteredRestaurants.map((restaurant, index) => (
              <NavLink
                key={index}
                to={`/restaurant/${restaurant.id}/${formatChefName(restaurant.name)}/Brakefast`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  image={restaurant.image}
                  restaurantName={restaurant.name}
                  chefName={restaurant.chefName}
                  rating={restaurant.rate}
                />
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResturantsPage;
