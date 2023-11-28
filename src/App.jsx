import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MovieList, TvShows, Navbar, MovieDetails, Footer } from "./components";
import { StoreProvider } from "./services/store";

function App() {
  return (
    <StoreProvider>
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
          <Footer />
        </Router>
      </main>
    </StoreProvider>
  );
}

export default App;
