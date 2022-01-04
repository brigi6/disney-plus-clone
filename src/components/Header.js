import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="/images/logo.svg"
        alt="logo"
        style={{ width: "80px", objectFit: "contain" }}
      />
      <div className="header__navmenu">
        <a>
          <img src="/images/home-icon.svg" alt="homeicon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="homeicon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="homeicon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="homeicon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="homeicon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="homeicon" />
          <span>SERIES</span>
        </a>
      </div>
      <img src="/images/avatar.png" alt="" className="header__userimage" />
    </div>
  );
};

export default Header;
