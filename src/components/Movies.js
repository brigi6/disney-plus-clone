import React, { useEffect, useState } from "react";
import "./Movies.css";
import db from "../firebase";

const Movies = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setmovies(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="movies">
      <h4>Recommended for You</h4>{" "}
      <div className="movies__container">
        {movies.map((movie) => (
          <>
            {" "}
            <img src={movie.cardImg} alt="" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Movies;
