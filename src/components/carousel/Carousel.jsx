import { useState } from "react";
import "./Carousel.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = ({ slides = [] }) => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const nextSlide = () => {
    setcurrentSlide(currentSlide === (slides.length - 1) ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel">
      <FaAngleLeft size={25} className="arrow arrow-left" onClick={prevSlide} />
      {slides.map((item, idx) => {
        return (
          <img
            className={currentSlide === idx ? "slide" : "slide slide-hidden"}
            src={item.src}
            alt={item.alt}
            key={idx}
          />
        );
      })}
      <FaAngleRight size={25} className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setcurrentSlide(idx)}
              className={
                currentSlide === idx
                  ? "indicator"
                  : "indicator indicator-inactive"
              }
            />
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
