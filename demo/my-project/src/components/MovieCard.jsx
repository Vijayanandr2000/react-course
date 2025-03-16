import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWatchlist } from "../context/WatchlistContext";

const MovieCard = ({ movie }) => {
  const { watchlist, toggleWatchlist } = useWatchlist();
  const inWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-contain rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.release_date}</p>
      <button
        className="absolute top-2 right-2 text-red-500 text-2xl"
        onClick={() => toggleWatchlist(movie)}
      >
        {inWatchlist ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default MovieCard;
