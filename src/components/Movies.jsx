import { useEffect,useState } from "react";
import React, { use } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 21;

  useEffect(() => {
    const options = {
      headers: {
        "x-rapidapi-key": "0d97ec198amsh1cf1c497d032f3ep113019jsn8a228cc109dd",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };

    axios
      .get("https://imdb236.p.rapidapi.com/imdb/most-popular-movies", options)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Calculate indexes for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <div className="p-5">
      <div className="text-3xl font-bold text-center mt-5">
        Show trending movies
      </div>

      <div className="flex flex-row flex-wrap justify-around gap-1 mt-5">
        {currentMovies.map((movieObj) => (
          <MovieCard
            primaryImage={movieObj.primaryImage}
            name={movieObj.originalTitle}
            key={movieObj.id}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-5 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Movies;


// https://api.themoviedb.org/3/movie/popular?api_key=2c73b9a5d113d61ca9bc4999b1efe0db&language=en-US&page=1

//
