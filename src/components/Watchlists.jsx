import React from "react";

function Watchlists({ watchlist, handleRemoveFromWatchList }) {

  const [search, setSearch] = React.useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap items-center m-4 gap-1">
        <div className=" flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-blue-400 text-white font-bold">
          Action
        </div>

        <div className=" flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-gray-400/50 text-white font-bold">
          Action
        </div>

        <div className=" flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-gray-400/50 text-white font-bold">
          Action
        </div>
      </div>

      <div className="flex justify-center ">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="h-[3rem] w-[18rem] bg-gray-200/60 outline-none px-4 mt-1"
          placeholder="Search Movies"
        />
      </div>

      <div className="border border-color-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              return movieObj.originalTitle.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj) => {
              return (
                <tr className="border-b-2">
                  <td className="flex items-center px-6 py-6">
                    <img
                      className="h-[6rem] w-auto"
                      src={movieObj.primaryImage}
                      alt="img"
                    />
                    <div className="mx-10">{movieObj.originalTitle}</div>
                  </td>
                  <td>{movieObj.averageRating}</td>
                  <td>9</td>
                  <td>{movieObj.genres}</td>
                  <td className="text-red-500" onClick={() => handleRemoveFromWatchList(movieObj)}>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlists;
