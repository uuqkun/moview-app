console.log(test)
// Assuming you have an array of movies
const movies = [
    { name: "The Shawshank Redemption", genre: "Drama" },
    { name: "The Godfather", genre: "Crime" },
    { name: "Pulp Fiction", genre: "Crime" },
    { name: "The Dark Knight", genre: "Action" },
    { name: "Fight Club", genre: "Drama" },
];

// Function to filter movies by name
function filterMoviesByName(name) {
    return movies.filter(movie => movie.name.toLowerCase().includes(name.toLowerCase()));
}

// Example usagefff
const filteredMovies = filterMoviesByName("dark");
console.log(filteredMovies);
