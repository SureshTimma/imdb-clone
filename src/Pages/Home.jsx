import React, { useState } from "react";
import { useEffect } from "react";
import Movie from "../Components/Movie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Genres from "../Components/Genres";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authorizationKey = import.meta.env.VITE_MOVIEDB_AUTH_KEY;
  const apiUrl = "https://api.themoviedb.org/3/discover/movie";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authorizationKey}`,
    },
  };

  const fetchMovieDate = async () => {
    let response = await fetch(apiUrl, options);
    let movieData = await response.json();
    // console.log(movieData.results);
    setMovies(movieData.results);
  };

  useEffect(() => {
    fetchMovieDate();
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Genres />
          <div className="flex flex-wrap gap-4 m-4 items-center justify-center">
            {movies.map((i) => (
              <Movie key={i.id} movie={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
