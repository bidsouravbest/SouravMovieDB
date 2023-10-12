const MovieCard = ({ movie }) => {
  const blankImg =
    "https://svgsilh.com/svg/1058406.svg"
  return (
    <div className="movie-card">
      {movie ? (
        <>
          {movie.Poster !== "N/A" ? (
            <img src={movie.Poster} alt="" />
          ) : (
            <img src={blankImg} alt="" />
          )}
          <h1>
            {movie.Title} ({movie.Year})
          </h1>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MovieCard;
