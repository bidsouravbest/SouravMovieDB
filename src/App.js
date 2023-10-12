import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";

const API_LINK = "https://www.omdbapi.com?apikey=f6b2650f";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const searchMovies = async (searchWord) => {
    try {
      const response = await fetch(`${API_LINK}&s=${searchWord}`);
      const data = await response.json();

      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovies("SpiderMan");
  }, []);

  // console.log(searchWord)

  return (
    <div className="App">
      <>
        <Header heading={"Sourav Movie HUB"} />

        <div className="search">
          <input
            type="text"
            placeholder="Search your movie"
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
        </div>
      </>
      <div className="flx">
        {movies ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <>NO MOVIES FOUND! Try searching again please!</>
        )}
      </div>
    </div>
  );
}

export default App;
