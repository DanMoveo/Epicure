// RestaurantPage.tsx

import React, { useState } from "react";
import * as image from "../../services/images";
import Card from "../../Components/Card/Card";
import "./RestaurantPage.scss";
import { useNavigate, useParams } from "react-router-dom";

const RestaurantPage: React.FC = () => {
  const tabs = ["Brakefast", "Lunch", "Dinner"];

  const navigate = useNavigate();
  const { type } = useParams();
  const initialActiveTab = type ? tabs.findIndex((tab) => tab === type) : 0;
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const { restaurantName } = useParams<{ restaurantName: string }>();


  const restaurants = [
    {
      id: "claro",
      chefName: "Ran Shmueli",
      image: image.claro,
      dishes: [
        {
          image: image.pad_ki_mao,
          name: "Pad Ki Mao",
          description: "Green, Papaya, Mango,Chukka",
          price: "88",
          category: "Brakefast",
        },
        {
          image: image.ta_ma_la_ko,
          name: "Ta Ma La Ko",
          description: "Green, Papaya, Mango,Chukka",
          price: "88",
          category: "Brakefast",
        },
        {
          image: image.pad_ki_mao,
          name: "Pad Ki Mao",
          description: "Green, Papaya, Mango,Chukka",
          price: "88",
          category: "Dinner",
        },
        {
          image: image.ta_ma_la_ko,
          name: "Ta Ma La Ko",
          description: "sss",
          price: "20",
          category: "Lunch",
        },
        {
          image: image.red_farm,
          name: "Red Farm",
          description: "sss",
          price: "20",
          category: "Lunch",
        },
      ],
    },
    {
      id: "kab-kem",
      chefName: "Yariv Malili",
      image: image.claro,
      dishes: [
        {
          image: image.pad_ki_mao,
          name: "Dish 1",
          description: "xxx",
          price: "10",
          category: "Lunch",
        },
        {
          image: image.ta_ma_la_ko,
          name: "Dish 2",
          description: "sss",
          price: "20",
          category: "Brakefast",
        },
      ],
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const selectedRestaurant = restaurants.find(
      (restaurant) => restaurant.id === restaurantName
    );
    if (selectedRestaurant) {
      const selectedTab = tabs[index];
      navigate(`/restaurant/${selectedRestaurant.id}/${selectedTab}`);
    }
  };

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantName
  );

  if (!selectedRestaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <img
        src={selectedRestaurant.image}
        alt="restaurantImage"
        className="restaurantImage"
      />
      <div className="textContainer">
        <h2 className="restaurantName">{selectedRestaurant.id}</h2>
        <h2 className="chefName">{selectedRestaurant.chefName}</h2>
        <div className="openContainer">
          <img src={image.clock} alt="clockIcon" className="clockIcon" />
          <h2 className="open">Open now</h2>
        </div>
      </div>

      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tabs[index]}
          </li>
        ))}
      </ul>

      <ul className="listContainer">
        {selectedRestaurant.dishes.map((dish, index) => (
          <li key={index}>
            {tabs[activeTab] === dish.category && (
              <Card
                image={dish.image}
                restaurantName={dish.name}
                chefName={dish.description}
                price={dish.price}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
