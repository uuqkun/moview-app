import { useEffect, useState } from "react";
import { MovieCard, Searchbar, Button } from ".";
import { fetchMovies } from "../services/fetch";
import { useMovieManager } from "../services/store";

const MovieList = () => {
  const [limit, setLimit] = useState(8);
  const [localMovies, setLocalMovies] = useState([]);

  const { movies, updateMovies } = useMovieManager();

  useEffect(() => {
    fetchMovies().then((data) => {
      updateMovies(data);
      setLocalMovies(data);
    });
  }, []);

  const handleChangeTab = (e) => {
    
  }

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
  }

  return (
    <section className="movies">
      <header className="movies__header">
        <h2 className="gray_50">Movie List</h2>
        <p className="gray_300">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          Explore what I have watched and also feel free to make a suggestion.😉
        </p>
        <Searchbar onChange={handleSearchByTitle} />
      </header>

      <main>
        <section className="movies__category">
          <ul className="movies__category-lists">
            <Button position="" text="All" variant="btn_primary" clicked={handleChangeTab}/>
            <Button position="" text="Movies" clicked={handleChangeTab}/>
            <Button position="" text="TVShows" clicked={handleChangeTab}/>
          </ul>
        </section>

        <article className="movies__container">
          <h4>All ({limit})</h4>
          <ul>
            {localMovies !== null ? (
              localMovies
                .slice(0, limit)
                .map((movie) => <MovieCard key={movie.id} data={movie} />)
            ) : (
              <h5>Not available...</h5>
            )}
          </ul>
          <Button
            text="Load More"
            variant="btn-secondary-b"
            clicked={() => setLimit(limit + 8)}
          />
        </article>
      </main>
    </section>
  );
};

export default MovieList;
