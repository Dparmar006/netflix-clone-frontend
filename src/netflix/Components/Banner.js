import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrigianls);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + " ... " : str;
  }
  return (
    <header
      className="banner"
      style={{
        background: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      }}
    >
      <div className="banner__container">
        <h1 className="banner__title">
          {movie?.original_name || movie?.name || movie?.title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <div className="banner__description">
          {truncate(movie?.overview || "", 150)}
          <i>( click on poster to watch trailer )</i>
        </div>
      </div>
      <div className="banner__fadeeffect"></div>
    </header>
  );
};

export default Banner;
