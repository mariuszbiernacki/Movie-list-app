import React from "react";
import bgImage from "../../assets/images/film-1673109_1920.jpg";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="hero-img">
      {/* <img className="movie__bg-photo" src={bgImage} /> */}
      {/* <h1 className="movie__h1">Movie list app</h1> */}
    </div>
  );
};

export default Home;
