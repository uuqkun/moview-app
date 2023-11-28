
import React, { useContext, createContext, useState } from 'react';

// Create a new context
export const StoreContext = createContext();

export const useMovieManager = () => {
  const { movies, updateMovies, imdbid, updateImdbid } = useContext(StoreContext);
  
  return { movies, updateMovies, imdbid, updateImdbid };
}


// Create a provider component to wrap your app
export const StoreProvider = ({ children }) => {
  // Define your state variables
  const [movies, setMovies] = useState([]);
  const [imdbid, setImdbid] = useState(1);

  // Define any functions to update the state
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  const updateImdbid = (newImdbid) => {
    setImdbid(newImdbid);
  };

  // Create the context value object
  const store = {
    movies,
    updateMovies,
    imdbid,
    updateImdbid,
  };

  // Provide the context value to the children components
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};
