import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link,} from "react-router-dom";
import { search } from "../assets/icons";
import { logo } from "../assets/icons";

const Navbar = ({ onMoviesFetched, onSearch }) => {

  //top rated movies from the api
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=510760336eb82bff9988bbeb9ff9022d";

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=510760336eb82bff9988bbeb9ff9022d&query=";

  const [term, setTerm] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new console.error("Network Error");
        }
        return res.json();
      })
      .then((data) => {
        //pass the fetched movies data into the parent component
        onMoviesFetched(data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <nav className="flex items-center justify-between mt-4 w-screen px-10 ">
      <div className="max-sm:hidden">
        <Logo />
      </div>
      <form onSubmit={handleSearch}>
        <div className="relative  max-sm:hidden ">
          <input
            placeholder="what do you want to watch"
            className="w-[30rem] max-lg:w-[25rem] text-white p-2 bg-transparent ring-white/50 ring-1 rounded-lg outline-primary-color"
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

      <div className="max-sm:hidden ">
        <Link to="/dashboard">
          <button className="underline text-white underline-offset-5 hover:scale-90">
            Sign in
          </button>
        </Link>
      </div>

      {/* mobile menu */}
      <div className="sm:hidden flex items-center w-screen justify-between space-x-4">
        <Link to="/">
          <div>
            <img src={logo} alt="mob-logo" width={40} />
          </div>
        </Link>

        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              placeholder="what do you want to watch"
              className="w-[20rem] text-white p-2 bg-transparent ring-white ring-1 rounded-lg outline-none"
              type="text"
              onChange={(e) => setTerm(e.target.value)}
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              {loading ? (
                "Loading... please wait..."
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
      </div>
    </nav>
  );
};

export default Navbar;
