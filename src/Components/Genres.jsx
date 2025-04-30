import React, { useEffect, useState } from "react";

const Genres = () => {
  const authorizationKey = import.meta.env.VITE_MOVIEDB_AUTH_KEY;
  const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authorizationKey}`,
    },
  };
  const [genreData, setGenreData] = useState([]);

  const fetchGenres = async () => {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    setGenreData(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 m-4 justify-center items-center font-bold">
      {genreData.map((i) => (
        <div key={i.id}>
          <h3>{i.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Genres;
