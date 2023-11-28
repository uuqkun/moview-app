import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useMovieManager } from "../services/store";

const MovieCard = ({ data }) => {
  const { imdbid, updateImdbid } = useMovieManager();

  const handleClick = () => {
    updateImdbid(data.imdbid);
  };

  return (
    <Link to={`/movies/${data.imdbid}`} onClick={handleClick}>
      <article className="moviecard">
        <img src={data.image} alt={data.title} className="moviecard__img" />
        <div className="moviecard__texts">
          <h5 className="gray_200">{data.title}</h5>
        </div>
        <span className="moviecard__rating">
          <p>{data.rating}</p>
        </span>
      </article>
    </Link>
  );
};

export default MovieCard;
