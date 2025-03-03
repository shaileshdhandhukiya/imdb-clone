import React from "react";

function MovieCard({
  movieObj,
  primaryImage,
  name,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="movie-card flex flex-col justify-between h-[40vh] w-[200px] bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 bg-cover items-end"
      style={{ backgroundImage: `url(${primaryImage})` }}
      lazy="true"
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center items-center h-8 w-8 rounded-lg"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 flex justify-center items-center h-8 w-8 rounded-lg"
        >
          &#128525;
        </div>
      )}
      <div className="bg-black bg-opacity-50 text-white text-center p-2 rounded-b-xl w-full">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
