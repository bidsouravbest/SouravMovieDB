import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";
import Details from "./Components/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const API_LINK = "https://www.omdbapi.com?apikey=f6b2650f";

function App({ movies }) {
  const heading = "Sourav Movie HUB";
  // const defSearch = "Avengers";

  // const link = "https://www.imdb.com/title/<imdbID>/";

  // const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  // const searchMovies = async (searchWord) => {
  //   try {
  //     const response = await fetch(`${API_LINK}&s=${searchWord}`);
  //     const data = await response.json();

  //     setMovies(data.Search);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   searchMovies(defSearch);
  // }, []);


  return (
    <div className="App">
      {/* Header */}
      <Header heading={heading} />

      {/* Search */}
      {/* <div className="search">
        <input
          type="text"
          placeholder="Search your movie here"
          value={searchWord}
          onChange={(elem) => {
            setSearchWord(elem.target.value);
          }}
        />
        <img
          src={
            "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-zik280t3.png"
          }
          alt="search"
          onClick={() => searchMovies(searchWord)}
        />
      </div> */}

      {/* Content (Movies) */}
      <div className="flx">
        {movies ? (
          movies.map((movie) =>
            <Link className="anc" to={"/" + movie.Title}>
              <MovieCard movie={movie} />
            </Link>)
        ) : (
          <div className="error-div">NO MOVIES FOUND! Try searching again please!</div>
        )}
      </div>

      {/* Routing */}
      {/* <Routes>
        {movies ? (
          movies.map((movie) =>
            <Route path={movie.title} element={<Details movie={movie} />}></Route>)
        ) : (
          <div></div>
        )}
      </Routes> */}
    </div>
  );
}

export default App;
