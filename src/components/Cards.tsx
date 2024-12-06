import React from "react";

const Cards = () => {
    return(
        <div className="flex justify-center">
            <div className="relative">
            <div className="absolute rounded-xl bottom-0 w-full text-center text-white bg-gradient-to-b from-transparent to-black to-65%">
                <p>Chetan G Kotangale</p>
                Web Dev Joint Head 
            </div>
            <img className="object-contain h-72 rounded-xl" src="/man.jpg" alt="/man.jpg"/>
            </div>
        </div>
    )
}

export default Cards