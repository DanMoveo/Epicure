// Carousel.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Carousel.scss";
import arrow from "../../images/Arrow.png";

interface CarouselProps {
  title: string;
  slides: {
    id: number;
    dishImage: string;
    title: string;
    descriptionORchef?: string;
    price?: string;
    additionalImage?: string[];
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ title, slides }) => {
  return (
    <div className="container">
      <p className="label">{title}</p>
      <div className="carousel-container">
        <Swiper spaceBetween={180} slidesPerView={2}>
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="carousel-slide">
                <img src={slide.dishImage} alt={slide.title} />
                <div className="text">
                  <h2 className="title">{slide.title}</h2>
                  <p className="description">{slide.descriptionORchef}</p>
                  {slide.additionalImage && (
  <div className="additional-images">
    {slide.additionalImage.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
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
      <button className="button">
        <h2>All Restaurants</h2>
        <img src={arrow} alt={arrow} />
      </button>
    </div>
  );
};

export default Carousel;
