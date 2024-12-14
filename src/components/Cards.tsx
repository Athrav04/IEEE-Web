import React from "react";

const Cards = (props: {profile:string}) => {
    let profile = props.profile;
    return(
        <div className="flex justify-center m-7 rounded-xl">
            <div className="relative">
            <div className="absolute rounded-xl bottom-0 w-full text-center text-white bg-gradient-to-b from-transparent to-black to-65% text-base md:max-lg:text-xs">
                <p>Chetan G Kotangale</p>
                Web Dev Joint Head 
            </div>
            <img className="object-contain rounded-xl" src={profile} alt="/man.jpg"/>
            </div>
        </div>
    )
}

export default Cards