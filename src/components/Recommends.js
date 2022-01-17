import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectRecommend } from "../features/movie/movieSlice";

import "./Recommends.css";

const Recommends = (props) => {
  const movies = useSelector(selectRecommend);
  return (
    <div className="recommends">
      <h4>Recommended for You</h4>
      <div className="recommends__movies">
        {movies &&
          movies.map((movie, key) => (
            <div className="recommends__movie" key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recommends;
