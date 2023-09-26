import React, { useState, useEffect } from "react";
import * as image from "../../Services/Images";
import restaurantImage from "../../Services/restaurants";
import Card from "../../Components/Card/Card";
import "./RestaurantPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import Tabs from "../../Components/Tabs/Tabs";
import axios from "axios";

// Define types
type Restaurant = {
  id: string;
  image: string;
  name: string;
  chefName: string;
  rate: number;
  dishes: Dish[];
};

type Dish = {
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  icons: string[];
};

const RestaurantPage: React.FC = () => {
  // State
  const [activeTab, setActiveTab] = useState<number>(0);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [dishes, setDishes] = useState<Dish[] | null>(null);

  // Router params
  const { restaurantId } = useParams<{
    restaurantId: string;
    restaurantName: string;
  }>();

  // Navigation
  const navigate = useNavigate();

  // Fetch restaurant data
  useEffect(() => {
    fetchData();
    fetchDishesByCategory("breakfast");
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get<Restaurant>(
        `http://localhost:5000/restaurants/${restaurantId}`
      );
      setRestaurant(response.data);
    } catch (error) {}
  }

  // Fetch dishes by category
  async function fetchDishesByCategory(category: string) {
    try {
      const response = await axios.get(
        `http://localhost:5000/dishes/${category.toLowerCase()}/${restaurantId}`
      );
      setDishes(response.data);
    } catch (error) {}
  }

  // Handle tab click
  const handleTabClick = (index: number) => {
    const tab = tabs[index];
    fetchDishesByCategory(tab);
    setActiveTab(index);
    if (restaurant) {
      navigate(
        `/restaurant/${restaurant.id}/${restaurant.name.toLowerCase()}/${tab}`
      );
    }
  };

  // Define tabs
  const tabs: string[] = ["Breakfast", "Lunch", "Dinner"];

  // Render
  return (
    <div className="container">

      <img
        src={restaurant ? restaurantImage[restaurant.image] : ""}
        alt="restaurantImage"
        className="restaurantImage"
      />
      <div className="textContainer">
        <h2 className="restaurantName">{restaurant?.name}</h2>
        <h2 className="chefName">{restaurant?.chefName}</h2>
        <div className="openContainer">
          <img src={image.clock} alt="clockIcon" className="clockIcon" />
          <h2 className="open">Open now</h2>
        </div>
      </div>
      <div className="restaurantTab">
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className="listContainer">
        {dishes &&
          dishes.map((dish, index) => (
            <Card
              key={index}
              image={dish.image}
              restaurantName={dish.name}
              description={dish.description}
              price={dish.price}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
