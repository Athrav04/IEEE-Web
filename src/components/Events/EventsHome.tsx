import  { useState , useEffect } from 'react'

import ImageSwiper from './ImageSwiper'
import GraphBg from '../GraphBg'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { LuLoaderCircle } from 'react-icons/lu'
import { MdOutlineCelebration } from 'react-icons/md'


enum Events {Gallery='Gallery',Upcoming='Upcoming',Past='Past'}

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL ;

interface SubscriberData  {
    email:string;
}

type buttonState = "normal"|"loading"|"subscribed";


const EventsHome = () => {

    const [galleryImages,setGalleryImages] = useState<string[]>([]);
    const [subscribed,setSubscribed] = useState<buttonState>('normal');
    const [active,setActive] = useState<Events>(Events.Gallery)
    const {register,handleSubmit,formState:{errors}} = useForm<SubscriberData>();

    const onSubmit:SubmitHandler<SubscriberData> = (data)=>{
        setSubscribed('loading')
        console.log('Submitted');
        axios.post(`${baseUrl}/eventData/SubscribeEvents`,{
            email:data.email
        }).then((res)=>{if(res.status === 200){console.log('Subscribed')} else console.log('Error while subscribing');setSubscribed('subscribed')}).catch((err)=>{console.log('Error while subscribing',err)});
    }

    useEffect(()=>{
        const getImgages = async()=>{
             axios.get(`${baseUrl}/eventData/galleryImages`).then((res)=>{if(res.status === 200) setGalleryImages(res.data)}).catch((err)=>{console.log("Error while fetching data form server ",err)})
        }
        getImgages();
    },[])

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
            <button className={`lg:w-1/3 px-5 py-2  rounded-xl primary-text text-lg font-SpaceGrotesk  hover:gradient-button ${active === Events.Gallery ? 'gradient-button border-none':'border border-[#484849]'}`} onClick={()=>{setActive(Events.Gallery);window.location.hash = '#Gallery'}}>
                Event Gallery
            </button>

            <button className={`lg:w-1/3 px-5 py-2 rounded-xl primary-text text-lg font-SpaceGrotesk  hover:gradient-button transition-all duration-300 ease-in ${active === Events.Upcoming ? 'gradient-button':'border border-[#484849]'}`} onClick={()=>{setActive(Events.Upcoming); window.location.hash = '#Upcoming'}}>
                Upcoming
            </button>

            <button className={`lg:w-1/3 px-5 py-2  rounded-xl primary-text text-lg font-SpaceGrotesk  hover:gradient-button ${active === Events.Past ? 'gradient-button':'border border-[#484849]'}`}onClick={()=>{setActive(Events.Past); window.location.hash = '#Past'}}>
                Past Events
            </button>

        </div>

        <div className='w-full h-screen mt-10 md:mt-20'>
            {active === Events.Gallery && 
            <div id='Gallery' className='columns-2  md:columns-3 gap-5 w-full md:px-12 space-y-3'>
                {
                    galleryImages.map((img)=>{
                        return <img src={img} key={img} className='rounded-xl'></img>
                    })
                }

            </div>
        }

        {active === Events.Upcoming &&
            <div id='Upcoming' className='flex justify-center items-center '>
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
                 <div className="flex items-center gap-4 ml-10 z-10 mt-5"><input  className={` h-10 w-48 md:h-12 md:w-72 primary-text border-[0.5px] bg-[#232326] rounded-md placeholder:ternary-text p-2  focus:outline-none md:placeholder:text-lg placeholder:font-thin ${errors.email ? 'border-red-400':'border-[#484849]'}`} placeholder="Enter your email " {...register('email',{required:true})} type='email'></input>
                     <button className={`md:text-lg font-roboto rounded-md bg-white/95 text-black py-2 px-3 opacity-95  transform ease-in duration-100 md:h-12 md:w-36  ${subscribed === 'loading' ? 'opacity-55 hover:opacity-55 cursor-not-allowed':'opacity-95 hover:opacity-100'}`} type='submit'>
                        {subscribed === 'loading' ? <LuLoaderCircle className='animate-spin font-thin w-full flex justify-center items-center text-lg'/> :
                         subscribed === 'subscribed' ? <div className='flex gap-1 items-center justify-center text-center'>Subscribed <MdOutlineCelebration className='text-black font-thin'/></div> : 'Subscribe'}
                     </button>
                 </div>
                 </form>

                
                 </div>
             </div>

    </div>
  )
}

export default EventsHome

