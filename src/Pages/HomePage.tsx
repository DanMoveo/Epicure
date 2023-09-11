// HomePage.tsx

import React from "react";
import AppHeader from "../Components/AppHeader/AppHeader";
import TableImage from "../Components/TableImage/TableImage";
import Carousel from "../Components/Carousel/Carousel";
import "./HomePage.scss";
import resturant from "../images/ResturantImages/claro.png";
import vegan from "../images/Icons/vegan.png";
import spicy from "../images/Icons/spicy.png";
import vegetarian from "../images/Icons/vegetarian.png";
import OurIcons from "../Components/OurIcons/OurIcons";
import ChefOfTheWeek from "../Components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../Components/AboutUs/AboutUs";
import AppFooter from "../Components/AppFooter/AppFooter";

const popularRestaurantSlides = [
  {
    id: 1,
    title: "Claro",
    descriptionORchef: "Ran Shamir",
    dishImage: resturant,
  },
  {
    id: 2,
    title: "City Skyline",
    descriptionORchef: "Ran Shamir",
    dishImage: resturant,
  },
  {
    id: 3,
    title: "Beach Sunset",
    descriptionORchef: "Ran Shamir",
    dishImage: resturant,
  },
];

const signatureDish = [
  {
    id: 1,
    title: "Claro",
    descriptionORchef:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: resturant,
    price: "88",
    additionalImage: [vegan, spicy],
  },
  {
    id: 2,
    title: "City Skyline",
    descriptionORchef:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: resturant,
    price: "88",
    additionalImage: [vegetarian],
  },
  {
    id: 3,
    title: "Beach Sunset",
    descriptionORchef:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: resturant,
    price: "88",
    additionalImage: [spicy],
  },
];

const yossiRestaurantSlides = [
  {
    id: 1,
    title: "Claro",
    dishImage: resturant,
  },
  {
    id: 2,
    title: "City Skyline",
    dishImage: resturant,
  },
  {
    id: 3,
    title: "Beach Sunset",
    dishImage: resturant,
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <AppHeader />
      <TableImage />
      <Carousel
        title="POPULAR RESTURANT IN EPICURE:"
        slides={popularRestaurantSlides}
      />
      <Carousel title="SIGNATURE DISH OF:" slides={signatureDish} />
      <OurIcons></OurIcons>
      <ChefOfTheWeek />
      <Carousel title="YOSSI'S RESTURANTS:" slides={yossiRestaurantSlides} />
      <AboutUs />
      <AppFooter />
    </>
  );
};

export default HomePage;
