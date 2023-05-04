import React from "react";
// import PropTypes from 'prop-types';
import "./styles/FullGallery.css";
import { Image } from "../types";

const FullGallery = ({ images }: { images: Image[] }) => {
  return (
    <div className="full-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.url} alt={image.title} />
          <p className="title">{image.title}</p>
        </div>
      ))}
    </div>
  );
};

// FullGallery.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             url: PropTypes.string.isRequired,
//             alt: PropTypes.string.isRequired,
//             title: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default FullGallery;
