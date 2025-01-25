import React, { useState } from 'react'

import ImageSwiper from './ImageSwiper'
import GraphBg from '../GraphBg'
import { useForm } from 'react-hook-form'

enum Events {Gallery='Gallery',Upcoming='Upcoming',Past='Past'}

const onSubmit = ()=>{}

const EventsHome = () => {
    const [active,setActive] = useState<Events>(Events.Gallery)
    const {register,handleSubmit,formState} = useForm();

  return (
    <div className='w-full h-full overflow-hidden md:px-20 mt-20 px-10'>
        <div className='w-full h-screen md:flex  md:justify-between md:items-center md:h-[75vh] md:mb-14'>
            <div className=' '>
                <h2 className='text-xl mt-10 md:text-2xl font-montserrat primary-text text-nowrap leading-4'>
                    Events
                </h2>
                <h1 className='text-6xl md:text-9xl font-SpaceGrotesk primary-text text-nowrap my-7'>
                    JOIN US IRL
                </h1>
                <p className='text-xl md:text-2xl font-montserrat secondary-text md:max-w-[90%]'>
                A space to learn, build, and grow. Join us for hands-on tech workshops, networking, and fun meetups designed to fuel your innovation!
                </p>
            </div>

            <div className='mt-32 h-full flex md:justify-center md:items-center md:mt-20'>
                <ImageSwiper/>
            </div>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-evenly gap-5'>
            <button className={`lg:w-1/3 px-5 py-2  rounded-xl primary-text text-lg font-SpaceGrotesk  hover:gradient-button ${active === Events.Gallery ? 'gradient-button border-none':'border border-[#484849]'}`} onClick={()=>setActive(Events.Gallery)}>
                Event Gallery
            </button>

            <button className={`lg:w-1/3 px-5 py-2 rounded-xl primary-text text-lg font-SpaceGrotesk  hover:gradient-button transition-all duration-300 ease-in ${active === Events.Upcoming ? 'gradient-button':'border border-[#484849]'}`} onClick={()=>setActive(Events.Upcoming)}>
                Upcoming
            </button>

            <button className={`lg:w-1/3 px-5 py-2  rounded-xl primary-text text-lg font-SpaceGrotesk  hover:gradient-button ${active === Events.Past ? 'gradient-button':'border border-[#484849]'}`}onClick={()=>setActive(Events.Past)}>
                Past Events
            </button>

        </div>

        <div className='w-full h-screen mt-10'>
            {active === Events.Gallery && 
            <div id='Gallery' className='columns-3 gap-5 w-full px-12 space-y-3'>


            </div>
        }

        {active === Events.Upcoming &&
            <div id='Upcoming' className='flex justify-center items-center'>
                <h1 className='primary-text text-2xl md:text-6xl text-nowrap mt-20'>Event Calendar Coming Soon...</h1>
            </div>
}

        {active === Events.Past &&
            <div id='Past'>
                Past-Events
            </div>
}

        </div>

        <div className=" relative h-[100vh] w-full  flex flex-col items-center justify-center mt-28">
                 <GraphBg/>

                <div className="flex flex-col items-center justify-center text-center">
                 <h1 className="primary-text text-2xl md:text-5xl font-montserrat flex flex-col font-semibold items-start z-10 place-self-center">Get Notified about </h1>
                 <span className="primary-text text-2xl md:text-5xl font-montserrat flex flex-col font-semibold items-start z-10 place-self-center">Our upcoming events</span> 

                 <form onSubmit={handleSubmit(onSubmit)}>

                 </form>

                 <div className="flex items-center gap-4 ml-10 z-10 mt-5"><input className=" h-10 w-48 md:h-12 md:w-72 primary-text border-[#484849] border-[0.5px] bg-[#232326] rounded-md placeholder:ternary-text p-2  focus:outline-none md:placeholder:text-lg placeholder:font-thin" placeholder="Enter your email " {...register('email',{required:true})}></input>
                     <button className="md:text-lg font-roboto rounded-md bg-white/95 text-black py-2 px-3 opacity-95 hover:opacity-100 transform ease-in duration-100">Subscribe</button>
                 </div>
                 </div>
             </div>

    </div>
  )
}

export default EventsHome