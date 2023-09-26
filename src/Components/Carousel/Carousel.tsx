// Carousel.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Carousel.scss";
import Card from "../Card/Card";
import restaurantImage from "../../Services/restaurants"

interface CarouselProps {
  title: string;
  slides: {
    id?: number;
    image: string;
    name: string;
    chefName?: string;
    description?: string;
    price?: number;
    icons?: string[];
    rate?: number;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ title, slides }) => {
  return (
    <div className="CarouselContainer">
      <p className="label">{title}</p>
      <div className="carousel">
        <Swiper spaceBetween={180} slidesPerView={2}>
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="carousel-slide">
                <img src={restaurantImage[slide.image]} alt={slide.name} className="carouselImage" />
                <div className="text">
                  <h2 className="title">{slide.name}</h2>
                  <p className="chefName">{slide.chefName}</p>
                  <p className="description">{slide.description}</p>
                  {slide.icons && (
                    <div className="additional-Images">
                      {slide.icons.map((imageUrl, index) => (
                        <img
                          key={index}
                          src={restaurantImage[imageUrl]}
                          alt={`Additional ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {slide.price && <p className="price">₪{slide.price}</p>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="cardContainer">
        {slides.map((restaurant, index) => (
          <Card
            key={index}
            image={slides[index].image}
            restaurantName={slides[index].name}
            chefName={slides[index].chefName}
            description={slides[index].description}
            price={slides[index].price}
            icons={slides[index].icons}
            rating={slides[index].rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
