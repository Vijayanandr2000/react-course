// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WatchlistProvider } from "./context/WatchlistContext";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";

const App = () => {
  return (
    <WatchlistProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </div>
        </div>
      </Router>
    </WatchlistProvider>
  );
};

export default App;
