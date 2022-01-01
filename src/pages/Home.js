import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/movie_poster.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Move 'em Movies </h1>
        <p> FIND WHAT'S HOT ON THE IDIOT BOX</p>
        {/* <Link to="/menu">
          <button> ORDER NOW </button>
        </Link> */}
      </div>
    </div>
  );
}

export default Home;
