import React from "react";
import "./ImgSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="slider">
      <div>
        <img src="/images/slider-badging.jpg" alt="" />
      </div>
      <div>
        <img src="/images/slider-badag.jpg" alt="" />
      </div>
    </Slider>
  );
};

export default ImgSlider;
