import React, { createContext, useContext, useEffect, useState } from "react";

const API_KEY = "9eaca748007e1684565c605a5582c903";
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`;

const WatchlistContext = createContext();
export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    fetch(GENRE_URL)
      .then((res) => res.json())
      .then((data) => setGenreList(data.genres || []));
  }, []);

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, toggleWatchlist, genreList }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
