import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router";

function Navbar() {
    return ( 
        <div className="flex items-center p-5 border space-x-8">
            <img src={Logo} alt="" className="w-[50px]"/>
            <Link to="/" className="font-3xl font-bold">Movies</Link>
            <Link to="/watchlist">Watchlist</Link>           
        </div>
     );
}

export default Navbar;