import React from "react";
import productGallery from "./assets/Watch/product-gallery.png";
import cyan from "./assets/Watch/cyan.png";
import blue from "./assets/Watch/blue.png";
import black from "./assets/Watch/black.png";

const Carousel = ({activeItem}) => {
  

  return (
    <div>
      <div className="carousel lg:w-[630px] lg:h-[720px]">
        <div
          id="item1"
          className={`carousel-item w-full ${
            activeItem === "item1" ? "block" : "hidden"
          }`}
        >
          <img src={productGallery} className="w-full" />
        </div>
        <div
          id="item2"
          className={`carousel-item w-[630px] h-[720px] ${
            activeItem === "item2" ? "block" : "hidden"
          }`}
        >
          <img src={cyan} className="w-full" />
        </div>
        <div
          id="item3"
          className={`carousel-item w-[630px] h-[720px] ${
            activeItem === "item3" ? "block" : "hidden"
          }`}
        >
          <img src={blue} className="w-full" />
        </div>
        <div
          id="item4"
          className={`carousel-item w-[630px] h-[720px] ${
            activeItem === "item4" ? "block" : "hidden"
          }`}
        >
          <img src={black} className="w-full" />
        </div>
      </div>

    </div>
  );
};

export default Carousel;
