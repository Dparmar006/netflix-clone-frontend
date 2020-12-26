import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title} </h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
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
  );
};

export default Row;
