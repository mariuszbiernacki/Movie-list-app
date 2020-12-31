import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import FavoriteMovies from "../pages/FavoriteMovies/FavoriteMovies";
import TopRatedMovies from "../pages/TopRatedMovies/TopRatedMovies";
import SingleMovieDetails from "../pages/SingleMovieDetails/SingleMovieDetails";
import Template from "../templates/Template";
import MovieContext from "../contexts/MovieContext";
import "./Root.css";
import "../styles/globalStyles.scss";

const Root = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [details, setDetails] = useState([]);
  const [duplicates, setDuplicates] = useState([]);
  const [movieListPage, setMovieListPage] = useState(1);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${movieListPage}`
      )
      .then((response) => {
        console.log(response);
        setMovies([...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const increasePageNumber = () => {
    setMovieListPage(movieListPage + 1);
  };

  const decreasePageNumber = () => {
    if (movieListPage > 1) {
      setMovieListPage(movieListPage - 1);
    }
  };

  useEffect(() => {
    getMovies();
  }, [movieListPage]);

  const getFavorites = (favoriteMovieTitle) => {
    const filteredMovie = movies.filter((movie) => {
      return movie.title === favoriteMovieTitle;
    });
    setDuplicates([...duplicates, favoriteMovieTitle]);

    if (duplicates.includes(favoriteMovieTitle)) {
      return alert("this movie already added");
    } else {
      setFavorites([...favorites, ...filteredMovie]);
    }
  };

  const removeFavorites = (favoriteMovieTitle) => {
    const filteredMovies = favorites.filter((movie) => {
      return movie.title !== favoriteMovieTitle;
    });
    setFavorites([...filteredMovies]);
    setDuplicates([...filteredMovies]);
  };

  const getDetails = (movieDetailsTitle) => {
    const filteredMovie = movies.filter((movie) => {
      return movie.title === movieDetailsTitle;
    });
    setDetails([...filteredMovie]);
  };

  const orderMovieList = () => {
    const orderedMovies = movies.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average;
    });
    return setMovies([...orderedMovies]);
  };

  return (
    <BrowserRouter>
      <MovieContext.Provider
        value={{
          movies,
          getMovies,
          favorites,
          getFavorites,
          removeFavorites,
          details,
          getDetails,
          orderMovieList,
          increasePageNumber,
          decreasePageNumber,
          movieListPage,
        }}
      >
        <Template>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/FavoriteMovies" component={FavoriteMovies} />
            <Route exact path="/TopRatedMovies" component={TopRatedMovies} />
            <Route
              exact
              path="/SingleMovieDetails/:title"
              component={SingleMovieDetails}
            />
          </Switch>
        </Template>
      </MovieContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
