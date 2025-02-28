import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlists from "./components/Watchlists";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <Banner />
            <Movies />
            </>
            } />
          <Route path="/watchlist" element={<Watchlists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
