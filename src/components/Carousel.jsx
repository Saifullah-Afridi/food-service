import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../assets/hero.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, // Passing custom arrow
    prevArrow: <SamplePrevArrow />, // Passing custom arrow
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
  };
  return (
    <div className="carousel-container w-[90%] mx-auto ">
      <Slider {...settings}>
        <div>
          <img
            src={hero}
            alt="Azadi Ki Asal Celebration"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={hero}
            alt="Azadi Ki Asal Celebration"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

// Custom Arrows
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default Carousel;
