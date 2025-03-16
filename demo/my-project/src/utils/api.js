// utils/api.js

export const API_KEY = "9eaca748007e1684565c605a5582c903";
const BASE_URL = "https://api.themoviedb.org/3";

export const API_URL = `${BASE_URL}/movie/popular?language=tamil&page=`;
export const SEARCH_URL = `${BASE_URL}/search/movie?language=tamil&query=`;
export const GENRE_URL = `${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`;

export const fetchMovies = async (url) => {
  try {
    const response = await fetch(`${url}&api_key=${API_KEY}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(GENRE_URL);
    const data = await response.json();
    return data.genres || [];
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};
