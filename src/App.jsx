import React, { use } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlists from "./components/Watchlists";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  let [watchlist, setwatchList] = React.useState([]);


  let handleAddToWatchList = (movieObj) => {

    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setwatchList(newWatchList);       
    console.log(watchlist);
  };


  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setwatchList(filteredWatchList);
  };

 React.useEffect(() => {
   let moviesFromLocalStorage = localStorage.getItem("moviesApp");
   if (!moviesFromLocalStorage) {
     return;
   }
   setwatchList(JSON.parse(moviesFromLocalStorage));
 }, []); // Add dependency array


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies 
                  handleAddToWatchList={handleAddToWatchList} 
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlists watchlist={watchlist} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
