import { heroimg } from "../assets/images";
import { imdb, apple, play } from "../assets/icons";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [heroImages, setHeroImages] = useState([]);

  // Callback function to receive the movies data from Navbar
  const handleMoviesFetched = (data) => {
    //top 10 rated movies from the API
    setMovies(data.slice(0, 10));
  };
  const handleGoBack = () => {
    navigate("/");
    window.location.reload();
  };

  const handleSearch = (searchResults) => {
    setMovies(searchResults);
  };

  return (
    <>
      <div className="relative w-screen ">
        <div className="max-sm:h-screen w-screen h-[90]">
          <img src={heroimg} alt="" className=" h-full w-full object-cover" />
        </div>

        <nav className="absolute top-0">
          <Navbar
            onMoviesFetched={handleMoviesFetched}
            onSearch={handleSearch}
          />
        </nav>

        <div
          className=" absolute max-sm:w-11/12 w-1/2
         max-sm:top-72 md:top-[30%] lg:top-24 xl:top-48 md:left-12 text-gray-300 "
        >
          <h1 className="text-7xl max-lg:text-4xl max-sm:text-4xl p-4">
            John Wick 3 : Parabellum
          </h1>
          <div className="flex items-center ">
            <div className="px-4 flex">
              <img src={imdb} alt="" />
              <span className="text-sm ml-2">86.0 / 100</span>
            </div>
            <div className="flex items-center">
              <img src={apple} alt="" />
              <span className="text-sm ml-2">97%</span>
            </div>
          </div>

          <p className="px-4 text-lg max-lg:px-3 py-2 my-1">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="bg-primary-color px-3 py-2 flex rounded-lg items-center gap-1 m-3 hover:scale-105">
            <img src={play} alt="" />
            Watch Trailer
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-between w-11/12 m-auto my-5">
        <h2 className="text-3xl underline underline-offset-8">
          Featured Movies
        </h2>
        <p className="hover:underline  hover:scale-105 underline-re">
          See more
        </p>
      </div>

      <section className="mt-5">
        {loading && <p>Loaging...</p>}
        {movies.length === 0 ? (
          <div className="grid place-items-center">
            <p className="text-center text-3xl text-primary-color">
              No Movies Found
            </p>

            <button
              onClick={handleGoBack}
              className="mt-2 ring-white/50 ring-1 w-28 p-3 rounded-lg"
            >
              Go Back
            </button>
          </div>
        ) : (
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 w-11/12 m-auto  ">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="relative group overflow-hidden hover:scale-105 transition-transform"
              >
                <MovieCard {...movie} key={movie.id} />
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Home;
