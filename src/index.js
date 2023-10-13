import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Components/Details";

const API_LINK = "https://www.omdbapi.com?apikey=f6b2650f";

const searchMoviesRoute = async (searchWord) => {
  try {
    const response = await fetch(`${API_LINK}&s=${searchWord}`);
    const data = await response.json();

    return data.Search;
  } catch (error) {
    console.log(error);
  }
};

const movies = await searchMoviesRoute("Avengers");
let resultArr = [];

if (movies) {
  movies.map((movie) => {
    resultArr.push({ path: "/" + movie.Title, element: <Details movie={movie} /> });
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App movies={movies} />,
  },
  ...resultArr,
]);

console.log(resultArr);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
