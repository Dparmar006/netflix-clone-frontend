import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import movieTrailer from "movie-trailer";

import "./Row.css";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const options = {
    height: "420",
    width: "100%",
  };

  console.log(trailerUrl);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie);
      movieTrailer(movie?.original_name || movie?.name || movie?.title || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div>
      <div className="row">
        <h2 className="row__title">{title} </h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              onClick={() => {
                handleClick(movie);
              }}
              className={`row__poster ${isLargeRow ? "row__largePoster" : ""}`}
              src={
                isLargeRow
                  ? `${base_url}${movie.poster_path}`
                  : `${base_url}${movie.backdrop_path}`
              }
              alt={movie.name}
              key={movie.id}
            />
          ))}
        </div>
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  );
};

export default Row;
