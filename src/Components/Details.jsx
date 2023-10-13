import React from "react";
import { Link } from 'react-router-dom';
import App from "../App";

const Details = ({ movie }) => {
  return (
    <div className="details">
      {movie ? (
        <div className="details-main-div">
          <div>
            <img src={movie.Poster} alt="" />
          </div>
          <div>
            <h1>Title: {movie.Title}</h1>
            <p>Type: {movie.Type}</p>
            <p>Year: {movie.Year}</p>
            <p>
              IMDB Link: &nbsp;
              <a href={"https://www.imdb.com/title/" + movie.imdbID + "/"}>
                {"https://www.imdb.com/title/" + movie.imdbID + "/"}
              </a>
            </p>
          </div>
          <Link to={"/"}>Home</Link>
        </div>
      ) : (
        <div className="error">No DATA Found!!</div>
      )}
    </div>
  );
};

export default Details;
