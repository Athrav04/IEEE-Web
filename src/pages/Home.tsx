import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EventsCard from '../components/Events/EventsCard';
import hackathons from '/hackathons.svg';
import workshops  from '/workshops.svg';
import networking from '/networking.svg';


import axios from 'axios';
import { motion } from 'motion/react';
//Gradient text - #5899E2 to #FFFFFF
//#1e90ff to # 99BADD
//#4169e1 to #89CFF0



type cards = {
  imageUrl:string,
  icon : string,
  name : string,
  content:string
}

const redirect = ()=>{
  window.open(`${window.location.origin}/join`,'_blank')
}

const eventCards:cards[] = [
  {
    imageUrl:'/hackthons.jpg',
    icon: hackathons,
    name: 'Hackathons',
    content: "Showcase your skills and solve real world challenges"
  },
  {
    imageUrl:'/network-events.jpg',
    icon: workshops,
    name: 'Workshops',
    content: "Get your hands dirty and gain valuable skills "
  },
  {
    imageUrl:'/atmosphere.jpg',
    icon: networking,
    name: 'Networking',
    content: "Connect with like minded peers and industry experts"
  }
]

 
const Home = (props: { src: string }) => {

  const [imgUrl,setImgUrl] = useState<string>();

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL ;

  useEffect(()=>{
   const fetchImage =  ()=>{
   axios.get(`${baseUrl}/teamData/HeroImage`).then((res)=>{if(res.status === 200){ setImgUrl(res.data);} else return null}).catch((err)=>{console.log("error while fething image",err)});
   } 
   fetchImage();
  },[])

  const navigate = useNavigate()

  return (
    <>
    <div className='main-bg min-h-screen text-white flex-col '>

        {//================================== Hero Section ===================================
        }
        <section className='flex justify-center items-center w-full h-screen'>
        <div className='flex-col ml-2 md:ml-10 md:w-1/2 justify-center md:justify-start items-center z-10'>
            <motion.h1 className=' overflow-hidden text-5xl md:text-8xl font-montserrat font-bold bg-gradient-to-tr from-[#5899E2] to-[#FFFFFF] bg-clip-text text-transparent text-nowrap'
             initial={{x:"-100%",opacity:0}} 
             animate={{x:'0',opacity:1}} 
             transition={{ease:"easeInOut",duration:1}}>IEEE VIIT</motion.h1>
            <motion.h2 className=' text-2xl md:text-6xl mt-1 font-light text-nowrap'
             initial={{x:"-150%",opacity:0}} 
             animate={{x:'0',opacity:1}} 
             transition={{ease:"easeInOut",duration:1,delay:0.2}}>Student Branch</motion.h2>
            <motion.div className='flex  group items-center w-40'
             initial={{x:"-150%",opacity:0}} 
             animate={{x:'0',opacity:1}} 
             transition={{ease:"easeInOut",duration:1,delay:0.2}}>
              <p className='font-montserrat px-1 cursor-default md:text-lg  group-hover:border-b-2 text-center transition duration-200 ease-in' onClick={()=>navigate('/about')}>About us</p>
              <img src='/right-arrow.png' height={25} width={40} className=' w-7 md:w-11 pl-2  group-hover:translate-x-1 transition-transform duration-300 ease-in-out' onClick={()=>navigate('/about')}></img>
            </motion.div>
         </div>
         <div className='hidden  md:block w-11/12  h-full opacity-50 object-cover '>
            <img src={imgUrl} className='min-w-full h-full block gradient-mask-l-50'></img>
         </div>
        </section>


        <section className='mt-0 pl-5 min-h-[50vh] md:min-h-[60vh] w-full md:pt-14 bg-gradient-to-t from-[#08090a] to-[#141516] relative overflow-hidden z-0 '>
           {/* <div className='bg-gradient-to-tr from-[#1a73e8] to-[#00d4ff] about-bg  ml-44 mb-20 animate-blob -top-16 -left-60 z-10'></div> */}
           {/* <div className='bg-gradient-t-tr from-[#3a86ff] to-[#8338ec] about-bg  ml-64 mb-20 animate-blob delay-2000'></div> */}
          <div className='z-30'>
          <h1 className='text-2xl md:text-7xl font-icona text-nowrap font-bold primary-text'> "Advancing Technology </h1>
          <div className='ml-4 max-w-28 bg-gradient-to-r from-[#2f4f9a] via-[#2f4f9a] to-[#0a0a0a] h-1 md:ml-9 md:mt-1 md:h-2 md:max-w-72 animate-animatedUnderline'></div>
          <h2 className=' text-2xl ml-3 md:ml-7 mt-1 md:mt-2  md:text-7xl font-roboto font-bold primary-text'> For Humanity"</h2>
          </div>
          <div className=' md:text-xl mt-10 md:mt-8 leading-2 ml-5 w-[52%] md:leading-7 font-montserrat secondary-text'>
          <p>At IEEE Student Branch, we harness the potential of technology to create a vibrant community focused on electronics, electrical, and computer engineering.</p>
          </div>
          
        </section>


        <section className='min-h-screen flex-col bg-gradient-to-t from-[#08090a] via-[#141516] to-[#08090a]'>
          <div className='text-2xl w-full md:text-7xl flex justify-center items-center font-roboto'>
            <h1 className='mr-3 font-bold primary-text'>Learn.</h1><h1 className='mr-3 font-bold primary-text'>Innovate.</h1><h1 className='mr-3 font-bold primary-text'>Create.</h1>
          </div>
          <div className='flex-col mt-12 text-center justify-center items-center px-3'>
              <p className='font-montserrat  md:text-xl secondary-text'>Join a vibrant community where innovation meets collaboration.</p>
              <p className='font-montserrat md:text-xl secondary-text text-center justify-center'>
                Learn, create, and connect with like-minded tech enthusiasts through 
                  <span className='primary-text font-medium block md:inline-block'> &nbsp;hackathons</span>
                  <span className='primary-text font-medium block md:inline-block'>&nbsp; workshops &nbsp;</span> 
                  and exciting 
                   <span className='primary-text font-medium block md:inline-block'> &nbsp;Projects</span>
               </p>
          
          </div>
          <div className='flex flex-col mt-10 justify-center items-center md:flex-row md:justify-evenly md:mt-20'>

            {
              eventCards.map((card,index)=>{
                return <EventsCard imageUrl={card.imageUrl} icon={card.icon} type={card.name}content={card.content} key={index}/>
              })
            }
           
          </div>
        </section>

      
        {/* <section className='h-[105vh] w-full mt-8 gradient-mask-b-70'>
          <div className='ml-12'>
          <h1 className='text-6xl primary-text font-montserrat font-medium'>This Week's Highlight</h1>
              <p className='ternary-text text-xl font-roboto mt-5 w-2/3 font-light'>Checkout this week's articles from Students and <span className=' text-xl font-roboto inline-block primary-text underline hover:cursor-pointer' onClick={()=>redirect()}>IEEE Members</span> and gain insightful knowledge on topics ranging from electronics to Tech.</p>
          </div>


          {/* <div className='w-full flex flex-col justify-start items-center mt-20 gap-12'>
            <Highlights/>
             
          </div> */}
        {/* </section> */}

    </div>
    </>
  )
}

export default Home