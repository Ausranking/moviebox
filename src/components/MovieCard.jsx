import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { apple, imdb } from "../assets/icons";

const MovieCard = (props) => {
  const [like, setLike] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const year = new Date(props.first_air_date).getFullYear();

  const handleLike = () => {
    setLike(!like);

    //show a message after likeing movie
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); //displaying for 2 seconds
  };

  return (
    <div data-testid="movie-card">
      <div className="relative">
        {/* required homepage movie details.. */}
        <Link to={`movies/${props.id}`}>
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

      <div>
        <div className=" absolute top-10 left-5 text-sm tracking-tighter font-sans font-semi-bold w-max px-2 mt-1 rounded-lg bg-primary-color/50">
          Tv Series
        </div>
        <p>
          {props.origin_country} / {year}
        </p>
        <p data-testid="movie-title">{props.name}</p>
        <p data-testid="movie-release-date" className="text-sm">
          {props.first_air_date}
        </p>

        {/* added movie details */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={imdb} alt="" />
            <p className="text-sm">{props.vote_average * 10}.0 / 100</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={apple} alt="" />
            <p className="text-sm">{props.vote_average * 10}%</p>
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="absolute top-[50%] w-full flex items-center justify-center bg-gray-900 bg-opacity-80">
          {like ? (
            <p className="text-primary-color tracking-tighter">
              Added to favourites
            </p>
          ) : (
            <p className="text-primary-color tracking-tighter">
              Removed from Favourites
            </p>
          )}
        </div>
      )}
    </div>
  );
};
export default MovieCard;

