import React from "react";
import "./Home.css";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <div className="home">
      <ImgSlider />
      <Viewers />
    </div>
  );
};

export default Home;
