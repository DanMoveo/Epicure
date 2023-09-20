// HomePage.tsx

import React from "react";
import TableImage from "../../Components/TableImage/TableImage";
import Carousel from "../../Components/Carousel/Carousel";
import "./HomePage.scss";
import * as image from "../../Services/Images";
import OurIcons from "../../Components/OurIcons/OurIcons";
import ChefOfTheWeek from "../../Components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../Components/AboutUs/AboutUs";
import { text } from "../../Services/textConstants";
import AllRestaurnsButton from "../../Components/AllRestaurnsButton/AllRestaurnsButton";
import AboutUsDesktop from "../../Components/AboutUsDesktop/AboutUsDesktop";

const popularRestaurantSlides = [
  {
    id: 1,
    title: "Claro",
    chefName: "Ran Shamir",
    dishImage: image.claro,
    rating: 3,
  },
  {
    id: 2,
    title: "Lumia",
    chefName: "Meir Adonie",
    dishImage: image.claro,
    rating: 2,
  },
  {
    id: 3,
    title: "Claro",
    chefName: "Ran Shamir",
    dishImage: image.claro,
    rating: 1,
  },
];

const signatureDish = [
  {
    id: 1,
    title: "Pad Ki Mao",
    description:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: image.claro,
    price: "88",
    additionalImage: [image.vegan, image.spicy],
  },
  {
    id: 2,
    title: "Garbar",
    description:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: image.claro,
    price: "78",
    additionalImage: [image.vegetarian],
  },
  {
    id: 3,
    title: "Beach Sunset",
    description:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishImage: image.claro,
    price: "88",
    additionalImage: [image.spicy],
  },
];

const yossiRestaurantSlides = [
  {
    id: 1,
    title: "Onza",
    dishImage: image.claro,
  },
  {
    id: 2,
    title: "Kitchen",
    dishImage: image.claro,
  },
  {
    id: 3,
    title: "Beach Sunset",
    dishImage: image.claro,
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <TableImage />
      <Carousel
        title={text.popularRestaurantTitle}
        slides={popularRestaurantSlides}
      />
      <AllRestaurnsButton />
      <Carousel title={text.signatureDishTitle} slides={signatureDish} />
      <div className="hiddingFromDesktop">
        <AllRestaurnsButton />
      </div>
      <OurIcons></OurIcons>
      <ChefOfTheWeek />
      <div className="hiddingFromDesktop">
        <Carousel
          title={text.yossiRestaurantTitle}
          slides={yossiRestaurantSlides}
        />
      </div>
      <AboutUs />
      <AboutUsDesktop />
    </>
  );
};

export default HomePage;
