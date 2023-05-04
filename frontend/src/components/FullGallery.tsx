import React from "react";
import "./styles/FullGallery.css";
import { Image } from "../types";

const FullGallery = ({ images }: { images: Image[] }) => {
  const setDimensions = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLImageElement;

    // Set width and height of failed image to match the good image
    target.width = 400;
    target.height = 400;
  };

  return (
    <div className="full-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.url} alt={image.title} onError={setDimensions} />
          <p className="title">{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FullGallery;
