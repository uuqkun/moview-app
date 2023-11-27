import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MovieList, TvShows, Navbar } from "./components";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<MovieList />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
