import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EventsCard from './EventsCard';
import hackathons from '../../public/hackathons.svg'
import workshops  from '../../public/workshops.svg'
import networking from '../../public/networking.svg'
import techEvents from '../../public/tech-events.jpg'
//Gradient text - #5899E2 to #FFFFFF
//#1e90ff to # 99BADD
//#4169e1 to #89CFF0

type eventInfo = {
  name:string,
  day:string,
  date:string,
  time:string,
  venue:string,
  description:string
}

type cards = {
  imageUrl:string,
  icon : string,
  name : string,
  content:string
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
  const eventData = useState<eventInfo>();
  const navigate = useNavigate()
  const src = props.src;
  return (
    <>
    <div className='main-bg min-h-screen text-white flex-col '>

        {//================================== Hero Section ===================================
        }
        <section className='flex justify-center items-center w-full h-screen'>
        <div className='flex-col ml-2 md:ml-10 md:w-1/2 justify-center md:justify-start items-center xl:w-ful'>
            <h1 className=' text-5xl md:text-8xl font-montserrat font-bold bg-gradient-to-tr from-[#5899E2] to-[#FFFFFF] bg-clip-text text-transparent text-nowrap'>IEEE VIIT</h1>
            <h2 className=' text-2xl md:text-6xl mt-1 font-light text-nowrap'>Student Branch</h2>
            <div className='flex mt-2'>
              <p className='font-montserrat px-1 cursor-default md:text-lg hover:border-b-2 ' onClick={()=>navigate('/about')}>About us</p>
              <img src='/right-arrow.png' height={25} width={40} className=' w-7 md:w-11 pl-2 hover:translate-x-1 ease-in duration-100' onClick={()=>navigate('/about')}></img>
            </div>
         </div>
         <div className='hidden  md:block w-3/4  h-full opacity-50 object-cover'>
            <img src='/electricalTempLogo.jpg' className='min-w-full h-full block gradient-mask-l-0'></img>
         </div>
        </section>


        <section className='mt-0 ml-5 min-h-[50vh] md:min-h-[60vh] w-full md:mt-14'>

          <h1 className='text-2xl md:text-7xl font-icona text-nowrap font-bold primary-text'> "Advancing Technology </h1>
          <div className='ml-4 max-w-28 bg-gradient-to-r from-[#2f4f9a] via-[#2f4f9a] to-[#0a0a0a] h-1 md:ml-9 md:mt-1 md:h-2 md:max-w-72 animate-animatedUnderline'></div>
          <h2 className=' text-2xl ml-3 md:ml-7 mt-1 md:mt-2  md:text-7xl font-icona font-bold primary-text'> For Humanity"</h2>
          <div className=' md:text-xl mt-10 md:mt-8 leading-2 ml-5 w-[52%] md:leading-7 font-montserrat secondary-text'>
          <p>At IEEE Student Branch, we harness the potential of technology to create a vibrant community focused on electronics, electrical, and computer engineering.</p>
          </div>
          
        </section>


        <section className='min-h-screen flex-col'>
          <div className='text-2xl w-full md:text-7xl flex justify-center items-center font-icona'>
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


        <section className='mt-20 h-screen w-full'>
            <div className='flex justify-end items-end mr-10 font-icona'>
            <h2 className='text-7xl font-nabla animate-animateText'>Mark</h2>
              <h1 className='text-7xl font-bold primary-text'>&nbsp; your Calendars</h1>
            </div>


            <div className='flex justify-between items-center mt-40 ml-32'>
              {/*All Static vlaues later to be added from state variable after fetching from backend (cache) */}

              {/*Left Side div */}
              <div className='flex'>

                <div className="flex-col">
                <h1 className='text-5xl font-poppins font-medium eventDateText'>Thursday</h1>
                  <span className='flex flex-col items-start mt-12'>
                    <h2 className='text-[170px] font-poppins font-bold eventDateText leading-none '>25</h2>
                    <h2 className='text-7xl font-medium font-poppins eventDateText leading-none -mt-5'>OCTOBER</h2>
                  </span>
                </div>

                <span className='bg-[#f1fffa] w-[0.1px] mx-10' />

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-5xl eventDateText font-poppins font-medium'>08:00 AM</h1>
                    <h1 className='text-5xl eventDateText font-poppins font-medium mt-2'>C001</h1>
                </div>

              </div>

              {/*Right side div */}
              <div className='flex flex-col items-start justify-start mx-20'>
                <img src={techEvents} className='h-96'></img>
                <div className='mt-5'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ut sapiente quod facilis libero voluptate animi, totam voluptates nulla ea odit reprehenderit quia dicta, tenetur doloremque repudiandae ipsum. Similique, ipsa.</div>
              </div>
            </div>
            
        </section>



    </div>
    </>
  )
}

export default Home