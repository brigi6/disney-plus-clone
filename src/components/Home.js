import React from "react";
import "./Home.css";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <div className="home">
      <ImgSlider />
      <Viewers />
      <Movies />
    </div>
  );
};

export default Home;
