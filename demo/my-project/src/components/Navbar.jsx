import React from "react";
import { Link } from "react-router-dom";
import { useWatchlist } from "../context/WatchlistContext";

const Navbar = () => {
  const { watchlist } = useWatchlist();

  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between fixed top-0 w-full z-10">
      <Link to="/" className="text-xl font-bold">
        Movie App
      </Link>
      <Link to="/watchlist" className="text-xl">
        Watchlist ({watchlist.length})
      </Link>
    </nav>
  );
};

export default Navbar;
