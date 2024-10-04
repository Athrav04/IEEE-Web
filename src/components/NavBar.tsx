function NavBar(){

    return(
        <>
            <div className='w-96 md:w-screen bg-black text-white flex'>
                <img className='object-contain h-8 p-2 md:h-14 lg:h-20 lg:p-4' src='public\IEEE_white_logo.webp' alt='ieee-logo' />
                <div className="md:{ w-screen flex items-center justify-end list-none space-x-4 mx-3 text-xs } lg:text-base flex lg:space-x-6">
                    <li><a href="/">Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Committee</a></li>
                    <li><a>Events</a></li>
                    <li><a>Acheivements</a></li>
                    <li><a>Chapter</a></li>
                    <li><a>CONTACT</a></li>
                    <button className='bg-gradient-to-r from-sky-300 to-sky-500 text-white text-xs md:text-base w-24 md:h-9 h-6 rounded-full '>Join IEEE</button>
                </div>
            </div>
        </>
    )
}


export default NavBar;