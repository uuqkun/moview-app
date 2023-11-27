import { MovieCard, Searchbar, Button } from ".";

const MovieList = () => {
  return (
    <section className="movies">
      <header className="movies__header">
        <h2 className="gray_50">Movie List</h2>
        <p className="gray_300">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          Explore what I have watched and also feel free to make a suggestion.😉
        </p>
        <Searchbar />
      </header>

      <main>
        <section className="movies__category">
          <ul className="movies__category-lists">
            <Button text="All" variant="btn_primary"/>
            <Button text="Movies"/>
            <Button text="TVShows"/>
          </ul>
        </section>

        <article className="movies__container">
          <h4>All (12)</h4>
          <ul>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </ul>
        </article>
      </main>
    </section>
  );
};

export default MovieList;
