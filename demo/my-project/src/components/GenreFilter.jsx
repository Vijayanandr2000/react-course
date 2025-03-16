// components/GenreFilter.jsx
import React from "react";

const GenreFilter = ({ genreList, selectedGenre, setSelectedGenre }) => {
  return (
    <select
      className="p-2 mb-4 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white border border-gray-700 rounded"
      onChange={(e) => setSelectedGenre(e.target.value)}
      value={selectedGenre}
    >
      <option value="">All Genres</option>
      {genreList.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
