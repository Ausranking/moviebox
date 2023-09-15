import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const MovieCard = (props) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div data-testid="movie-card">
      <div className="relative">
        <Link to={`movie/${props.id}`}>
          <img
            data-testid="movie-poster"
            className="w-[15rem] h-[20rem] object-cover mt-5 ring-1 ring-primary-color rounded-md"
            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          />
        </Link>
        <div onClick={handleLike} className="absolute top-5 right-5">
          {like ? (
            <AiFillHeart size={25} className="text-primary-color" />
          ) : (
            <AiOutlineHeart size={25} className="text-white" />
          )}
        </div>
      </div>

      <div className="">
        <div className="text-sm w-max px-2 mt-1 rounded-lg bg-primary-color/40">
          Movie Series
        </div>
        <p data-testid="movie-title">{props.title}</p>
        <p data-testid="movie-release-date" className="text-sm">
          {props.release_date}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;

// https://api.themoviedb.org/3/search/movie?query=
