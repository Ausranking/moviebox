import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { search } from "../assets/icons";
import Movies from "../pages/Movies";

const Navbar = ({ onMoviesFetched, onSearch }) => {
  const URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=510760336eb82bff9988bbeb9ff9022d";

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=510760336eb82bff9988bbeb9ff9022d&query=";

  const [term, setTerm] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (term) {
      setLoading(true);
      fetch(API_SEARCH + term)
        .then((res) => res.json())
        // .then((data) => setMovies(data.results))
        .then((data) => {
          onSearch(data.results);
        })
        .finally(() => {
          setLoading(false);
          setTerm("");
        });
    } else {
      onSearch([]);
    }
  };
  // setLoading(false)

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // setMovies(data.results);
        //pass the fetched movies data into the parent component
        onMoviesFetched(data.results);
      });
  }, []);

  return (
    <nav className="flex items-center justify-between mt-4 w-screen px-10">
      <div>
        <Logo />
      </div>
      <form onSubmit={handleSearch}>
        <div className="relative  max-sm:hidden ">
          <input
            placeholder="what do you want to watch"
            className="w-[30rem] p-2 bg-transparent ring-primary-color ring-1"
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              "Loading..."
            ) : (
              <img
                className="absolute right-1 top-3 "
                src={search}
                alt="searchbtn"
                width={20}
              />
            )}
          </button>
        </div>
      </form>

      <div className="max-sm:hidden">
        <Link to="/dashboard">
          <button>Sign in</button>
        </Link>
      </div>

      {/* //hamburger/ */}
      <div onClick={handleNav} className="sm:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* mobile menu */}

      <div
        onClick={handleNav}
        className="sm:hidden absolute top-10 flex w-screen justify-between "
      >
        <div className="bg-slate-800 h-max z-10 ">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="bg-transparent ring-1 w-[15rem]"
              placeholder="what do you want to watch"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <img
                src={search}
                alt="searchbtn"
                width={20}
                className="absolute top-1 right-[35%]  "
              />
            </button>
          </form>
        </div>
        <div>
          <Link to="/movie">
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
