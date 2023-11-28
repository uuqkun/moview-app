import React, { useEffect } from "react";
import { useMovieManager } from "../services/store";

const MovieDetails = () => {
  const { movies, imdbid } = useMovieManager();

  const selectedMovie = movies.filter((movie) => movie.imdbid === imdbid)[0];
  return (
    <div>
      <h1 className="gray_50">{selectedMovie.title}</h1>
    </div>
  );
};

export default MovieDetails;
