import React from "react";

const Movie = (props) => {
  let { movie } = props;
  //   console.log(movie);
  let {
    original_title,
    release_date,
    poster_path,
    vote_average,
    backdrop_path,
    overview,
  } = movie;

  return (
    <div className="w-64 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        className="w-full h-94 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-yellow-400 font-bold text-lg">
            ⭐ {vote_average}
          </span>
          <span className="text-gray-400 text-sm">{release_date}</span>
        </div>
        <h2 className="text-lg font-bold mb-2">{original_title}</h2>
        <div className="flex flex-col gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded">
            Watch options
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-1 px-4 rounded">
            Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
