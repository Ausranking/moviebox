import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { FaPlayCircle } from "react-icons/fa";
import { list, showtime } from "../assets/icons";
const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the ID
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=510760336eb82bff9988bbeb9ff9022d`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movie details");
        }
        return res.json();
      })
      .then((data) => {
        // Targeting date and converting to UTC
        const releaseDate = new Date(data.release_date);
        const utcDate = releaseDate.toUTCString();
        setMovieDetails({
          ...data,
          release_date: utcDate,
        });
      })
      .catch((err) => {
        setError(err.message); // Set error state if there's an error
      });
  }, [id]);

  // console.log(movieDetails);
  return (
    <div className="relative">
      <aside className="max-md:hidden">
        <SideBar />
      </aside>
      {error ? (
        <div className="text-primary-color text-center grid place-items-center">
          <p>
            Failed to fetch movie details. Please check your internet
            connection.
          </p>
        </div>
      ) : (
        <div className="">
          <section className=" ">
            {movieDetails ? (
              <div>
                <section className="grid md:relative left-[18%] min-w-[80%]">
                  <div className=" h-[40rem] lg:w-[68rem] lg:h-[28rem]">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                      alt={`${movieDetails.title} poster`}
                      className="rounded-xl object-cover w-full h-full block"
                    />
                  </div>
                  <div
                    className="absolute top-[25%] max-sm:top-[20%] max-sm:left-[42%]  flex flex-col
                items-center left-[35%] font-bold w-26 hover:scale-110 "
                  >
                    <FaPlayCircle size={50} />
                    <span>Watch Trailer</span>
                  </div>

                  {/* movie details required... */}
                  <div className="w-screen md:flex items-center flex-wrap">
                    <section className="mt-5 p-2  m-auto flex-1  ">
                      <p data-testid="movie-title" className="text-xl py-2">
                        {movieDetails.title}
                      </p>

                      <p data-testid="movie-release-date" className="text-lg">
                        {movieDetails.release_date}
                      </p>

                      <p data-tesid="movie-runtime" className="py-2">
                        {movieDetails.runtime} minutes
                      </p>

                      <p data-testid="movie-overview" className=" text-xl">
                        {movieDetails.overview}
                      </p>
                    </section>
                    <section className="flex-1 mt-5 ml-10">
                      <button className="bg-primary-color w-[22rem] rounded-lg p-2 flex gap-2 items-center justify-center hover:scale-105">
                        <img src={showtime} alt="" />
                        See Showtimes
                      </button>

                      <button className="bg-transparent  ring-primary-color flex items-center gap-2  ring-1 rounded-lg p-2 w-[22rem] my-2 justify-center hover:scale-105  ">
                        <img src={list} alt="icon" className="dark:bg-white" />
                        More Watch options
                      </button>
                    </section>
                  </div>
                </section>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
