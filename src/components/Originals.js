import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";
import "./Originals.css";

const Originals = (props) => {
  const movies = useSelector(selectOriginal);

  return (
    <div className="originals">
      <h4>Originals</h4>
      <div className="originals__movies">
        {movies &&
          movies.map((movie, key) => (
            <div className="originals__movie" key={key}>
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
export default Originals;
