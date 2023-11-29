export const extractYears = (movies) => {
    return ['All Years',...new Set(movies.map((movie) => movie.year))];
}

export const extractGenres = (movies) => {
    return ['All Genres', ...new Set(movies.flatMap((movie) => movie.genre)),];
}