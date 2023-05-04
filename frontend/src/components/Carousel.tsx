// @ts-ignore
import { useState, useEffect } from "react";

import "./styles/Carousel.css";
import { Image } from "../types";

// @ts-ignore
const Carousel = ({ images }: { images: Image[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setActiveIndex((activeIndex + 1) % images.length);
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, [activeIndex, images.length]);

  const handleBulbClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="carousel">
        <div className="image-container">
          <div className="bulbs">
            {images.map((_, index) => (
              <div
                key={index}
                className={`bulb ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleBulbClick(index)}
              />
            ))}
          </div>
          <img
            src={images[activeIndex].url}
            alt="carousel item"
            className="images"
          />
          <div className="controls">
            <button onClick={handlePrevClick}>&lt;</button>
            <button onClick={handleNextClick}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
