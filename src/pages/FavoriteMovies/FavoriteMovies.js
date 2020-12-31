import React from "react";
import FavoriteMoviesList from "../../components/FavoriteMoviesList/FavoriteMoviesList";

const FavoriteMovies = () => {
  return (
    <div className="container">
      <h1 className="movie__h1">Favorite Movies</h1>
      <FavoriteMoviesList />
    </div>
  );
};

export default FavoriteMovies;
