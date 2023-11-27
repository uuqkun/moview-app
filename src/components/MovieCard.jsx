import React from "react";

const MovieCard = ({ data }) => {
  return (
    <article className="moviecard">
      <img src={data.image} alt={data.title} className="moviecard__img" />
      <div className="moviecard__texts">
        <h5 className="gray_200">{data.title}</h5>
      </div>
      <span className="moviecard__rating">
        <p>
          {data.rating}
        </p>
      </span>
    </article>
  );
};

export default MovieCard;
