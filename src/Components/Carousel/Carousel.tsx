// Carousel.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Carousel.scss";
import Card from "../Card/Card";


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
    <div className="CarouselContainer">
      <p className="label">{title}</p>
      <div className="carousel">
        <Swiper spaceBetween={180} slidesPerView={2}>
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="carousel-slide">
                <img src={slide.dishImage} alt={slide.title} />
                <div className="text">
                  <h2 className="title">{slide.title}</h2>
                  <p className="description">{slide.descriptionORchef}</p>
                  {slide.additionalImage && (
                    <div className="additional-Images">
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

      <div className="cardContainer">
        {slides.map((restaurant, index) => (
          <Card
          key={index} 
            image={slides[index].dishImage}
            restaurantName={slides[index].title}
            chefName={slides[index].descriptionORchef}
            price={slides[index].price}
            additionalImage={slides[index].additionalImage}
            />
            ))}
      </div>
    </div>
  );
};

export default Carousel;
