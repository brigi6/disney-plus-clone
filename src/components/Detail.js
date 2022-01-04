import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="background">
        <img
          src="https://www.awn.com/sites/default/files/styles/original/public/image/featured/1048902-delve-making-pixars-bao-new-featurette.jpg"
          alt="film"
        />
      </div>
      <div className="image__title">
        <img src="/images/baologo.png" alt="" />
      </div>
      <div className="detail__controls">
        <button className="details__playbutton">
          <img
            src="/images/play-icon-black.png"
            alt=""
            style={{ width: "35px", objectFit: "contain" }}
          />
          <span>PLAY</span>
        </button>
        <button className="details__trailerbutton">
          <img
            src="/images/play-icon-white.png"
            alt=""
            style={{ width: "35px", objectFit: "contain" }}
          />
          <span>Trailer</span>
        </button>
        <button className="details__addbutton">
          <span>+</span>
        </button>
        <button className="details__groupwatchbutton">
          <img src="/images/group-icon.png" alt="" />
        </button>
      </div>
      <div className="details__subtitle">2018 . 7m . Family</div>
      <div className="details__description">fkdgslkfghfslgfsl</div>
    </div>
  );
};

export default Detail;
