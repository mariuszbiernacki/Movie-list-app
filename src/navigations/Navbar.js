import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <ul className="navbar__list">
      <li className="navbar__item" key="homeLink">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar__item" key="topRatedLink">
        <Link className="navbar__link" to="/TopRatedMovies">
          Top Rated Movies
        </Link>
      </li>
      <li className="navbar__item" key="favoriteMoviesLink">
        <Link className="navbar__link" to="/FavoriteMovies">
          Favorite Movies
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
