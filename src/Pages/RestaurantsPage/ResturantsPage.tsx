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
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { Restaurant } from "../../models/Restaurant.interfaces";
import { objectToSearchParams } from "../../Services/utils.service";

interface IGetRestaurantsQueryParams {
  page: number;
  limit: number;
  ratings?: number[];
  sortBy?: string;
}

const ResturantsPage: React.FC = () => {
  const limit = 9;
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  const initalPageNumber = 1;
  const [pageNumber, setPageNumber] = useState<number>(initalPageNumber);
  const [isBottomReached, setIsBottomReached] = useState(false);

  const queryString = selectedRatings
    .map((rate) => `rates[]=${rate}`)
    .join("&");

  useEffect(() => {
    // On component mount
    window.addEventListener("scroll", handleScroll);
    return () => {
      // On component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // On rating changed
    setRestaurants([]);
    if (pageNumber === initalPageNumber) {
      fetchRestaurantsByFilters(pageNumber);
      return;
    }
    setPageNumber(initalPageNumber);
  }, [selectedRatings]);

  useEffect(() => {
    if (isBottomReached) setPageNumber(pageNumber + 1);
  }, [isBottomReached]);

  useEffect(() => {
    fetchRestaurantsByFilters(pageNumber);
  }, [pageNumber]);

  const handleScroll = () => {
    (async () => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;

      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      const isViewInTheBottomOfThePage =
        scrollTop + clientHeight > scrollHeight - 10;
      if (isViewInTheBottomOfThePage) {
        setIsBottomReached(true);
        return;
      }
      setIsBottomReached(false);
    })();
  };

  async function fetchMostPopularRestaurants() {
    try {
      const response = await axios.get<Restaurant[]>(
        "http://localhost:5000/restaurants?sortBy=mostPopular"
      );
      const data = response.data;
      setRestaurants(data);
    } catch (error) {}
  }

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
    console.log(restaurants);
    setActiveTab(index);
    if (index === 2) {
      fetchMostPopularRestaurants();
    } else {
      console.log("Should not reach here !!!!");

      // fetchAllRestaurants(1);
    }
    navigate(`/restaurants/${formatChefName(tabs[index])}`);
    setMapViewActive(false);
  };

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    rowIndex: number
  ) => {
    if (event.target.checked) {
      setSelectedRatings((prevSelectedRatings) => {
        const newSelectedRatings = [...prevSelectedRatings, rowIndex];
        return newSelectedRatings;
      });
    } else {
      setSelectedRatings((prevSelectedRatings) => {
        const newSelectedRatings = prevSelectedRatings.filter(
          (rating) => rating !== rowIndex
        );
        return newSelectedRatings;
      });
    }
  };
  
  async function fetchRestaurantsByFilters(page: number) {
    setIsLoading(true);
    try {
      const queryParams: IGetRestaurantsQueryParams = {
        page: pageNumber,
        limit,
        ratings: selectedRatings,
      };
      const response = await axios.get<Restaurant[]>(
        `http://localhost:5000/restaurants?${objectToSearchParams(
          queryParams as Record<string, any>
        )}`
      );
      const newlyFetchedRestaurants = response.data;
      setRestaurants([...restaurants, ...newlyFetchedRestaurants]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  const handleMapViewClick = () => {
    setMapViewActive(true);
    setActiveTab(-1);
    navigate(`/restaurants/mapView`);
  };

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
          <div className="filterFather">
            <button className="filter" onClick={priceSlideOpen}>
              <span className="filterText">Price Range</span>
              <img src={image.arrowDown} alt="arrow down" />
            </button>
            {/* Price Range Filter */}
            {priceSlide && (
              <div className="slideContainer" ref={priceSlideRef}>
                <span className="slideTitle">Price Range Selected</span>
                <span className="slideRange">₪12 - ₪357</span>
                <RangeSlider min={12} max={357} onChange={handleRangeChange} />
              </div>
            )}
          </div>

          <div className="filterFather">
            <button className="filter" onClick={distanceSlideOpen}>
              <span className="filterText">Distance</span>
              <img src={image.arrowDown} alt="arrow down" />
            </button>
            {/* Distance Filter */}
            {distanceSlide && (
              <div
                className="slideContainer distanceSlide"
                ref={distanceSlideRef}
              >
                <span className="slideTitle">Distance</span>
                <RangeSlider min={0} max={100} onChange={handleRangeChange} />
              </div>
            )}
          </div>

          <div className="filterFather">
            <button className="filter" onClick={rateWindowOpen}>
              <span className="filterText">Rating</span>
              <img src={image.arrowDown} alt="arrow down" />
              {selectedRatings.length
                ? `(${selectedRatings.toString()})`
                : null}
            </button>
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
                      checked={selectedRatings.includes(rowIndex + 1)}
                    />
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                      <img
                        key={colIndex}
                        src={
                          colIndex < rowIndex + 1
                            ? image.starFull
                            : image.starEmpty
                        }
                        alt={`Star ${
                          colIndex < rowIndex + 1 ? "Full" : "Empty"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Map View */}
        {mapViewActive && (
          <div className="mapImageContainer">
            <img src={image.mapView} alt="Map View" />
          </div>
        )}

        {/* Restaurant List */}
        {!mapViewActive && (
          <div className="restaurantListContainer">
            {restaurants.map((restaurant: Restaurant, index: number) => (
              <NavLink
                key={index}
                to={`/restaurant/${restaurant.id}/${formatChefName(
                  restaurant.name
                )}/Brakefast`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  image={restaurant.image}
                  restaurantName={restaurant.name}
                  chefName={restaurant.chefId.name}
                  rating={restaurant.rate}
                />
              </NavLink>
            ))}
          </div>
        )}

        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default ResturantsPage;
