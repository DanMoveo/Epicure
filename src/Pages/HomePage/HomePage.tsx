// HomePage.tsx

import React from "react";
import TableImage from "../../Components/TableImage/TableImage";
import Carousel from "../../Components/Carousel/Carousel";
import "./HomePage.scss";
import resturant from "../../images/ResturantImages/claro.png";
import vegan from "../../images/OurIcons/vegan.png";
import spicy from "../../images/OurIcons/spicy.png";
import vegetarian from "../../images/OurIcons/vegetarian.png";
import OurIcons from "../../Components/OurIcons/OurIcons";
import ChefOfTheWeek from "../../Components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../Components/AboutUs/AboutUs";

const popularRestaurantSlides = [
  {
    id: 1,
    title: "Claro",
    descriptionORchef: "Ran Shamir",
    dishImage: resturant,
  },
  {
    id: 2,
    title: "Lumia",
    descriptionORchef: "Meir Adonie",
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
    title: "Pad Ki Mao",
    descriptionORchef:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: resturant,
    price: "88",
    additionalImage: [vegan, spicy],
  },
  {
    id: 2,
    title: "Garbar",
    descriptionORchef:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: resturant,
    price: "78",
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
    title: "Onza",
    dishImage: resturant,
  },
  {
    id: 2,
    title: "Kitchen",
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
    </>
  );
};

export default HomePage;
