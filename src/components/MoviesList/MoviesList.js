import React, { useContext } from "react";
import MovieContext from "../../contexts/MovieContext";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const value = useContext(MovieContext);
  const {
    movies,
    getFavorites,
    getDetails,
    orderMovieList,
    increasePageNumber,
    decreasePageNumber,
    movieListPage,
  } = value;
  return (
    <div className="container">
      <button
        className="movie__btn"
        disabled={movieListPage === 1 ? true : false}
        onClick={decreasePageNumber}
      >
        previous
      </button>
      <button className="movie__btn" onClick={increasePageNumber}>
        next
      </button>
      <button className="movie__btn" onClick={orderMovieList}>
        order movie list by vote
      </button>

      <ul className="movies">
        {movies.map((movie) => {
          const { id, title, poster_path } = movie;
          return (
            <li key={id} className="movie">
              <h2 className="movie__h2">{title}</h2>

              <Link to={`/SingleMovieDetails/${title}`}>
                <div onClick={() => getDetails(title)}>
                  <img
                    className="movie__img"
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt={`picture: ${title}`}
                  />
                </div>
              </Link>

              <button
                className="movie__btn"
                onClick={() => getFavorites(title)}
              >
                add to favorite
              </button>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
};

export default MoviesList;
