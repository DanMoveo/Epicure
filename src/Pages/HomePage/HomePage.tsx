// HomePage.tsx

import React, { useEffect, useState } from "react";
import TableImage from "../../Components/TableImage/TableImage";
import Carousel from "../../Components/Carousel/Carousel";
import "./HomePage.scss";
import OurIcons from "../../Components/OurIcons/OurIcons";
import ChefOfTheWeek from "../../Components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../Components/AboutUs/AboutUs";
import { text } from "../../Services/textConstants";
import AllRestaurnsButton from "../../Components/AllRestaurnsButton/AllRestaurnsButton";
import AboutUsDesktop from "../../Components/AboutUsDesktop/AboutUsDesktop";
import axios from "axios";
import useIsMobile from "../../Hooks/useIsMobile";

type Restaurant = {
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

const HomePage: React.FC = () => {
  const [popularRestaurantSlides, setPopularRestaurantSlides] = useState<
    Restaurant[]
  >([]);
  const [chefOfTheWeekRestaurants, setChefOfTheWeekRestaurants] = useState<
    Restaurant[]
  >([]);
  const [randomDishes, setRandomDishes] = useState<Dish[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetchMostPopularRestaurants();
    fetchChefOfTheWeekRestaurants();
    fetchRandomDishes();
  }, []);

  async function fetchMostPopularRestaurants() {
    try {
      const response = await axios.get<Restaurant[]>(
        `http://localhost:5000/restaurants?sortBy=mostPopular`
      );
      const data = response.data;
      setPopularRestaurantSlides(data.slice(0, 3));
    } catch (error) {}
  }

  async function fetchChefOfTheWeekRestaurants() {
    try {
      const response = await axios.get<Restaurant[]>(
        `http://localhost:5000/restaurants/`
      );
      const data = response.data.map((restaurant) => ({
        ...restaurant,
        chefName: "",
      }));
      setChefOfTheWeekRestaurants(data.slice(0, 3));
    } catch (error) {}
  }

  async function fetchRandomDishes() {
    try {
      const response = await axios.get<Dish[]>("http://localhost:5000/dishes/");
      const data = response.data;
      setRandomDishes(data.slice(0, 3));
    } catch (error) {}
  }

  return (
    <>
      <TableImage />
      <div className="carouselContainer">
        <Carousel
          title={text.popularRestaurantTitle}
          slides={popularRestaurantSlides}
        />
        <AllRestaurnsButton />
        <Carousel title={text.signatureDishTitle} slides={randomDishes} />
        {isMobile && <AllRestaurnsButton />}
      </div>
      <OurIcons></OurIcons>
      <ChefOfTheWeek chefOfTheWeekRestaurants={chefOfTheWeekRestaurants} />
      {isMobile && (
        <Carousel
          title={text.yossiRestaurantTitle}
          slides={chefOfTheWeekRestaurants}
        />
      )}
      {isMobile && <AllRestaurnsButton />}
      <AboutUs />
      <AboutUsDesktop />
    </>
  );
};

export default HomePage;
