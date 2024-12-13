function Events(props: {src:string}) {
    let src = props.src;
    return(
        <>
        <div className="relative justify-self-center justify-center m-12 pb-4 h-fit rounded-md place-items-center bg-sky-500 md:m-24 lg:grid lg:grid-cols-2 lg:size-7/12 lg:h-72 lg:m-20 xl:h-96">
            <div className="absolute -top-3 -right-3 z-10 size-6 bg-slate-300 rounded-full p-1">
                <img src="\cross.png"/>
            </div>
            <img className="max-lg:rounded-t-md h-auto md:h-96 lg:h-72 lg:rounded-l-md lg:place-self-start xl:h-96" src={src} alt="event"/>
            <div className="flex flex-col h-1/4 m-4 text-center md:h-1/6 md:w-64 lg:place-self-start lg:text-sm lg:w-fit xl:text-base">
                Here is the content.Here is the content.Here is the content.
                <button className='bg-gradient-to-r border m-6 from-sky-300 to-sky-500 text-white text-sm rounded-full'>
                    Join IEEE
                </button>
            </div>
        </div>
        </>
    );
}

export default Events;