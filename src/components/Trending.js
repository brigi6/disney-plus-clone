import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
import "./Trending.css";

const Trending = (props) => {
  const movies = useSelector(selectTrending);

  return (
    <div className="trending">
      <h4>Trending</h4>
      <div className="trending__movies">
        {movies &&
          movies.map((movie, key) => (
            <div className="trending__movie" key={key}>
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
export default Trending;
