import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import FullGallery from "./components/FullGallery";
import Header from "./components/Header";
// import { images } from "./images";
import "./App.css";

const App = () => {
  const [layout, setLayout] = useState("carousel");
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/images");
      const data = await response.json();
      setImages(data);
    }
    fetchData();
  }, []);

  const handleToggleClick = () => {
    setLayout(layout === "carousel" ? "full-gallery" : "carousel");
  };
  return (
    <div className="app">
      <Header />
      <div className="toggle-container">
        <button onClick={handleToggleClick}>Toggle Layout</button>
      </div>
      {images.length !== 0 && (
        <>
          {layout === "carousel" ? (
            // @ts-ignore
            <Carousel images={images} />
          ) : (
            // @ts-ignore
            <FullGallery images={images} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
