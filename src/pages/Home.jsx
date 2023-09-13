import { heroimg } from "../assets/images";
import { imdb, apple, play } from "../assets/icons";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Callback function to receive the movies data from Navbar
  const handleMoviesFetched = (data) => {
    setMovies(data.slice(0, 10));
  };

  const handleSearch = (searchResults) => {
    setMovies(searchResults);
  };
  console.log(movies);

  return (
    <>
      <div className="relative">
        <div className="h-[70vh] w-screen">
          <img src={heroimg} alt="" className="h-full w-full object-cover" />
        </div>

        <nav className="absolute top-0">
          <Navbar
            onMoviesFetched={handleMoviesFetched}
            onSearch={handleSearch}
          />
        </nav>

        <div className="w-2/5 max-sm:w-11/12 max-sm:left-2  max-sm:center absolute top-0 md:top-[25%] lg:top-[20%] left-8 max-sm:top-[40%] text-white dark ">
          <h1 className="text-6xl max-lg:text-4xl max-sm:text-3xl p-4">
            John Wick 3 : Parabellum
          </h1>
          <div className="flex items-center ">
            <div className="px-4 flex">
              <img src={imdb} alt="" />
              <span className="text-sm ml-2">860 / 100</span>
            </div>
            <div className="flex items-center">
              <img src={apple} alt="" />
              <span className="text-sm ml-2">97%</span>
            </div>
          </div>

          <p className="px-4 text-md max-lg:px-2 my-2">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="bg-primary-color px-3 py-1 flex rounded-lg items-center gap-1 m-3">
            <img src={play} alt="" />
            Watch Trailer
          </button>
        </div>
      </div>
      <section className="ring-primary-color mt-5">
        <div className="w-11/12 m-auto flex justify-between my-2">
          <h2 className="text-2xl">Featured Movies</h2>
          <p>See more ' </p>
        </div>
        {loading && <p>Loaging</p>}
        {movies.length === 0 ? (
          <p className="text-center text-3xl text-primary-color">
            No Movies Found
          </p>
        ) : (
          <div className=" grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 w-11/12 m-auto  ">
            {movies.map((movie) => (
              <div className="relative group overflow-hidden hover:scale-105 transition-transform">
                <MovieCard key={movie.id} {...movie} />
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
