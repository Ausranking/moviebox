import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";

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
      });
  }, [id]);
  // Function to extract the YouTube trailer key from the movie data
  // const getTrailerKey = () => {
  //   if (
  //     movieDetails &&
  //     movieDetails.videos &&
  //     movieDetails.videos.results.length > 0
  //   ) {
  //     const trailer = movieDetails.videos.results.find(
  //       (video) => video.site === "YouTube" && video.type === "Trailer"
  //     );
  //     if (trailer) {
  //       return trailer.key;
  //     }
  //   }
  //   return null;
  // };

  // // Construct the YouTube embed URL
  // const trailerKey = getTrailerKey();
  // const youtubeEmbedURL = trailerKey
  //   ? `https://www.youtube.com/embed/${trailerKey}`
  //   : null;

  console.log(movieDetails);
  // const date = new Date(movieDetails.release_date);
  return (
    <>
      <div>
        <SideBar />
        <section className="absolute left-[20%] max-md:left-[35%]">
          {movieDetails ? (
            <div>
              <div className="relative">
                <div className="w-[60rem] h-[28rem] ">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                    alt={`${movieDetails.title} backdrop`}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>

                <div className="absolute top-[50%] left-[40%] font-bold v ">
                  Watch Trailer
                </div>
              </div>

              <p data-testid="movie-title">{movieDetails.title}</p>
              <p data-testid="movie-runtime">{movieDetails.release_date}</p>
              <p data-tesid="movie-release-date">{movieDetails.runtime}</p>
              <p data-testid="movie-overview">{movieDetails.overview}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    </>
  );
};

export default MovieDetails;
