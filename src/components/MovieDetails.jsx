import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { FaPlayCircle } from "react-icons/fa";
const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the ID
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=510760336eb82bff9988bbeb9ff9022d`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch();
  }, [id]);
  // const date = new Date(movieDetails.release_date).toUTCString;
  return (
    <div>
      <aside className="max-md:hidden">
        <SideBar />
      </aside>

      <section className="grid place-items-center h-full md:absolute md:left-[15%] m-auto max-md:left-[35%]">
        {movieDetails ? (
          <div>
            <section className="grid place-items-center">
              <div className="w-[60rem] h-[28rem] max-md:w-[35rem] m-auto max-md:h-[15rem]max-sm:w-[10rem] ">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                  alt={`${movieDetails.title} backdrop`}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div
                className="absolute top-[30%] max-sm:left-[36%]  flex flex-col
                items-center left-[45%] font-bold w-26 hover:scale-110 "
              >
                <FaPlayCircle size={50} className=" " />
                <span>Watch Trailer</span>
              </div>

              <section className="mt-5  p- ring ml-10 ">
                <p data-testid="movie-title"> Title : {movieDetails.title}</p>
                <p data-testid="movie-runtime">
                  {" "}
                  Release Date : {movieDetails.release_date}
                </p>
                <p data-tesid="movie-release-date">
                  Duration : {movieDetails.runtime} minutes
                </p>
                <p data-testid="movie-overview">
                  {" "}
                  Overview : {movieDetails.overview}
                </p>
                <p> Language : {movieDetails.original_language}glish</p>
              </section>
            </section>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
};

export default MovieDetails;
