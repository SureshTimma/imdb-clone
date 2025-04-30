import { useEffect } from "react";
import "./App.css";

function App() {
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
    console.log(movieData);
  };

  useEffect(() => {
    fetchMovieDate();
  });

  return (
    <>
      <h1 className="text-3xl">hello</h1>hello
    </>
  );
}

export default App;
