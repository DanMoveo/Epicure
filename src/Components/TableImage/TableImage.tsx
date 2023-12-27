import React, { useEffect, useState, useRef } from "react";
import "./TableImage.scss";
import * as Images from "../../Services/Images";
import { text } from "../../Services/textConstants";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useClickOutsideHandler } from "../../Hooks/useClickOutsideHandler";

type Restaurant = {
  id: string;
  image: string;
  name: string;
  chefName: string;
  rate: number;
};

type Dish = {
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  icons: string[];
};

const TableImage: React.FC = () => {
  const [restaurantNames, setRestaurantNames] = useState<Restaurant[]>([]);
  const [dishNames, setDishNames] = useState<Dish[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const listContainerRef = useRef<HTMLUListElement>(null); // Ref for the list container

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    try {
      const response = await axios.get<Restaurant[]>(
        "http://localhost:5000/restaurants/"
      );
      const response2 = await axios.get<Dish[]>(
        "http://localhost:5000/dishes/"
      );
      const data = response.data;
      if (data.length > 0) {
        setRestaurantNames(data);
      }
      const data1 = response2.data;
      if (data.length > 0) {
        setDishNames(data1);
      }
    } catch (error) {}
  }

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value.toLowerCase();
    setSearchInput(inputValue);
  }

  useClickOutsideHandler(listContainerRef, () => {
    setSearchInput("");
  });

  function filterRestaurants() {
    if (searchInput.trim() === "") {
      return [];
    }
    return restaurantNames.filter((restaurant) =>
      restaurant.name.toLowerCase().startsWith(searchInput)
    );
  }

  function filterDishes() {
    if (searchInput.trim() === "") {
      return [];
    }
    return dishNames.filter((dish) =>
      dish.name.toLowerCase().startsWith(searchInput)
    );
  }

  return (
    <div className="img-container">
      <img src={Images.table} alt="table" className="hero-img" />
      <div className="hero_window">
        <div className="textContainer">
          <h2 className="text">{text.heroText} </h2>
          <div className="input-container">
            <img src={Images.search} alt="search" className="search" />
            <input
              type="text"
              name="search-input"
              id="search-input"
              className="search-input"
              placeholder="Search for restaurant, cuisine and chef"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
          {searchInput.trim() !== "" && (
            <>
              <ul ref={listContainerRef} className="listOfRestaurants">
                <span className="titleSearchBox">Restaurns:</span>
                {filterRestaurants().map((restaurant, index) => (
                  <li className="restaurantsNames" key={index}>
                    <NavLink
                      to={`/restaurant/${restaurant.id}/${encodeURIComponent(
                        restaurant.name
                      )}/Brakefast`}
                      className="customNavLink"
                    >
                      {restaurant.name}
                    </NavLink>
                  </li>
                ))}
                <span className="titleSearchBox">Dishes:</span>
                {filterDishes().map((dish, index) => (
                  <li className="restaurantsNames" key={index}>
                    {dish.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableImage;
