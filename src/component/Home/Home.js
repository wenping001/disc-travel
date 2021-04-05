import React from "react";
import "./Home.css";
import bannerImage from "./img.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
