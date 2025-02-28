import React from "react";

function Banner() {
    return (  
        <div className="h-[20vh] md:h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('https://wp.scoopwhoop.com/wp-content/uploads/2021/09/a40afd10-d8c3-4c39-9749-ecaa9d5c5265.jpg')"}} >
           <div className="text-white text-xl text-center bg-blue-900/60 w-full">Squid Game</div>
        </div>
    );
}

export default Banner;