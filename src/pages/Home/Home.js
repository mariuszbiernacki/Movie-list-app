import React from "react";
import bgImage from "../../assets/images/film-1673109_1920.jpg";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="hero-img"
    ></div>
  );
};

export default Home;
