import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MovieList, TvShows, Navbar, MovieDetails } from "./components";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route index path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TvShows />} />"
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
