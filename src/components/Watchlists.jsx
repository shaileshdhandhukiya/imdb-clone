import React from "react";

function Watchlists() {

    
    return ( 
        <>

            <div className="flex justify-center flex-wrap items-center m-4 gap-1">
                <div className=" flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-blue-400 text-white font-bold">Action</div>
                
                <div className=" flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-gray-400/50 text-white font-bold">Action</div>

                <div className=" flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-gray-400/50 text-white font-bold">Action</div>
            </div>

            <div className="flex justify-center ">
                <input 
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
                        <tr className="border-b-2">
                            <td className="flex items-center px-6 py-6">
                                <img className="h-[6rem] w-[10rem]" src="https://th.bing.com/th/id/OIP.-nJn8sx4rEPXSMkkBNWzmAHaHa?rs=1&pid=ImgDetMain" alt="img" />
                                <div className="mx-10">
                                    movie 1
                                </div>
                            </td>
                            <td>8</td>
                            <td>9</td>
                            <td>Action</td>
                            <td className="text-red-500">Delete</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
     );
}

export default Watchlists;