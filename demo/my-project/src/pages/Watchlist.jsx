import React, { useState } from "react";
import { useWatchlist } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";
import GenreFilter from "../components/GenreFilter"; // ✅ Import GenreFilter

const Watchlist = () => {
  const { watchlist, genreList } = useWatchlist();
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = watchlist
    .filter(
      (movie) =>
        !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="p-4 pt-16">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search watchlist..."
        className="p-2 w-3/4 md:w-1/2 rounded border border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Genre Filter Component */}
      <div className="mt-20 flex justify-center">
        <GenreFilter
          genreList={genreList}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredMovies.length === 0 ? (
          <p className="text-gray-400">No movies in watchlist</p>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Watchlist;
