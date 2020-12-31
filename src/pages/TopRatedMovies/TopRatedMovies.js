import React from "react";
import MoviesList from "../../components/MoviesList/MoviesList";

const TopRatedMovies = () => {
  return (
    <div className="container">
      <h1 className="movie__h1">Top Rated Movies</h1>
      <MoviesList />
    </div>
  );
};

export default TopRatedMovies;
