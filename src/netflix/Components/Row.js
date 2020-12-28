import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";

import "./Row.css";
import RowLoading from "./RowLoading";
const Row = ({ RowTitle, fetchUrl, isLargeRow }) => {
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
    height: "400",
    width: "100%",
  };
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + " ... " : str;
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  };
  console.log(movies);
  return (
    <div>
      <div className="row">
        <h2 className="row__title">{RowTitle} </h2>

        {movies.length == 0 ? (
          <RowLoading />
        ) : (
          <div className="row__posters">
            {movies.map((movie) => (
              <div className="row__poster">
                <img
                  onClick={() => {
                    handleClick(movie);
                  }}
                  className={`row__img ${isLargeRow ? "row__largePoster" : ""}`}
                  src={
                    isLargeRow
                      ? `${base_url}${movie.poster_path}`
                      : `${base_url}${movie.backdrop_path}`
                  }
                  alt={movie.name}
                  key={movie.id}
                />
                <p>
                  {" "}
                  <div className="poster__info">
                    <h3 className="poster__info-title">
                      {movie?.original_name ||
                        movie?.name ||
                        movie?.title ||
                        ""}{" "}
                    </h3>
                    <p className="poster__info-rating">
                      {movie.vote_average} <span>/ 10</span>
                    </p>
                    <p className="poster__info-overview">
                      {truncate(movie.overview, 150)}
                    </p>
                  </div>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="row__trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
      </div>
    </div>
  );
};

export default Row;
