import React from "react";
import "./FormulaCarousel.css";
import { Carousel } from "react-bootstrap";

export const FormulaCarousel = ({ images }) => {
  return (
    <section>
      <Carousel controls={false} indicators={false} fade={true}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
