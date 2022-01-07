import React from "react";
import "./Viewers.css";

const Viewers = () => {
  return (
    <div className="viewers">
      <div className="image__container">
        {" "}
        <img src="/images/viewers-disney.png" alt="disney" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="image__container">
        {" "}
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="image__container">
        {" "}
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="image__container">
        {" "}
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="image__container">
        {" "}
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay loop playsInline>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
