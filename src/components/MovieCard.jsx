import React from "react";

function MovieCard({primaryImage, name}) {
    // console.log(posterPath);
    return ( 
        <div className="movie-card flex flex-col justify-between item-center h-[40vh] w-[200px] bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 bg-cover"  style={{backgroundImage: `url(${primaryImage})` }} lazy="true">
            <div className="bg-black bg-opacity-50 text-white text-center p-2 rounded-b-xl">{name}</div>
        </div>
     );
}

export default MovieCard;