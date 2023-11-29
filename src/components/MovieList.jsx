import { useEffect, useState } from "react";

import { MovieCard, Searchbar, Button } from ".";
import { fetchMovies } from "../services/fetch";
import { useMovieManager } from "../services/store";
import { extractGenres } from "../services/categories";
import { HashTable } from "../services/sort";

const MovieList = () => {
  const [limit, setLimit] = useState(8);
  const [localMovies, setLocalMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [genres, setGenres] = useState();

  const { movies, updateMovies } = useMovieManager();

  useEffect(() => {
    fetchMovies().then((data) => {
      updateMovies(data);
      setLocalMovies(data);
      setGenres(extractGenres(data));
    });
  }, []);

  const handleSearchByTitle = (e) => {
    const { value } = e.target;

    if (value.length > 4) {
      let iterableMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      });

      setLocalMovies(iterableMovies);
    } else {
      setLocalMovies(movies);
    }
  };

  const handleCategoryChange = (e) => {
    const filteredMovies = movies.filter((movie) => {
      return movie.genre.includes(e.target.value);
    });

    const hashTable = new HashTable(100);

    movies.map((movie) => {
      movie.genre.forEach((item) => {
        hashTable.set(item, movie);
      });
    });

    const values = hashTable.getAllValuesByHashKey(hashTable, e.target.value);
    console.log(values);

    setLocalMovies(filteredMovies);
    setSelectedCategory(e.target.value);
    setLimit(filteredMovies.length);
  };

  return (
    <section className="movies">
      <header className="movies__header">
        <h2 className="gray_50">Movie List</h2>
        <p className="gray_300">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          Explore what I have watched and also feel free to make a suggestion.😉
        </p>

        <div className="filters">
          <Searchbar onChange={handleSearchByTitle} />
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {genres &&
              genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
          </select>
        </div>
      </header>

      <main>
        <section className="movies__category">
          <ul className="movies__category-lists"></ul>
        </section>

        <article className="movies__container">
          <h4>
            {selectedCategory} ({limit})
          </h4>
          <ul>
            {localMovies !== null ? (
              localMovies
                .slice(0, limit)
                .map((movie) => <MovieCard key={movie.id} data={movie} />)
            ) : (
              <h5>Not available...</h5>
            )}
          </ul>
          {limit <= 8 ? (
            <p>End</p>
          ) : (
            <Button
              text="Load More"
              variant="btn-secondary-b"
              clicked={() => setLimit(limit + 8)}
            />
          )}
        </article>
      </main>
    </section>
  );
};

export default MovieList;
