import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { API_URL, SEARCH_URL, API_KEY } from "../utils/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = search
      ? `${SEARCH_URL}${search}&api_key=${API_KEY}`
      : `${API_URL}${page}&api_key=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, [search, page]);

  return (
    <div className="p-4 pt-16">
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 w-3/4 md:w-1/2 rounded border border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="p-2 bg-gray-700 text-white rounded"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-white">Page {page}</span>
        <button
          className="p-2 bg-gray-700 text-white rounded"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
