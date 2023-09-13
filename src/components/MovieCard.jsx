import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const date = new Date(props.release_date);
  return (
    <div data-testid="movie-card" className="">
      <Link to={`movie/${props.id}`}>
        <div>
          <img
            data-testid="movie-poster"
            className="w-[15rem] h-[20rem] object-cover mt-5 ring-1 ring-primary-color rounded-md"
            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
            
          />
        </div>

        <div className="">
          <div className="text-sm w-max px-2 mt-1 rounded-lg bg-primary-color/40">Movie Series</div>
          <p data-testid="movie-title">{props.title}</p>
          <p data-testid="movie-release-date" className="text-sm">{date.toUTCString()}</p>
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;

// https://api.themoviedb.org/3/search/movie?query=
