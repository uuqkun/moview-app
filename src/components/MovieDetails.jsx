import React, { useEffect } from "react";
import { useMovieManager } from "../services/store";

const MovieDetails = () => {
  const { movies, imdbid } = useMovieManager();

  const selectedMovie = movies.filter((movie) => movie.imdbid === imdbid)[0];
  const isMovieAvailable =
    selectedMovie !== undefined || selectedMovie !== null;

  return (
    <>
      {isMovieAvailable ? (
        <main className="details">
          <div className="details__hero">
            <img src={selectedMovie.big_image} alt={selectedMovie.title} />
          </div>

          <figure className="details__body">
            <div className="details__top">
              <div className="details__title">
                <p>Moview / Movies</p>
                <h3>{selectedMovie.title}</h3>
              </div>
            </div>

            <div className="details__bottom">
              <img src={selectedMovie.image} alt={selectedMovie.title} />

              <figcaption>
                <h5>Part of the journey is the end.</h5>
                <p className="body-large gray_200">
                  {selectedMovie.description}
                </p>

                <p className="details__rating body-large">
                  <span>star</span>
                  {selectedMovie.rating}
                </p>

                <div className="details__attribute">
                  <h6>Release Date</h6>
                  <p className="body-large">{selectedMovie.year}</p>
                </div>
                <div className="details__attribute">
                  <h6>Run Time</h6>
                  <p className="body-large">130 Min</p>
                </div>
                <div className="details__attribute">
                  <h6>Genre(s)</h6>
                  {selectedMovie && selectedMovie.genre.map((genre, i) => {
                    return <p className="body-large" key={i}>{genre}</p>;
                  })}
                </div>
              </figcaption>
            </div>
          </figure>
        </main>
      ) : (
        <p>Movie not found</p>
      )}
    </>
  );
};

export default MovieDetails;
