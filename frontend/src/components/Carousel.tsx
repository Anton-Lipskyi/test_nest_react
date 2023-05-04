// @ts-ignore
import {useEffect, useState} from "react";

import "./styles/Carousel.css";
import { Image } from "../types";

// @ts-ignore
const Carousel = ({ images }: { images: Image[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(images[activeIndex]);

  useEffect(() => {
    setActiveImage(images[activeIndex]);
  }, [activeIndex])

  const handlePrevClick = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const setDimensions = (event: any) => {
    // Set width and height of failed image to match the good image
    console.log(event)
    event.target.width = 600;
    event.target.height = 600;
  };

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
            src={activeImage.url}
            alt={activeImage.title}
            className="images"
            onError={setDimensions}
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
