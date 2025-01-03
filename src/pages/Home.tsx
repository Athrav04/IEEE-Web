import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EventsCard from '../components/Events/EventsCard';
import hackathons from '../../public/hackathons.svg'
import workshops  from '../../public/workshops.svg'
import networking from '../../public/networking.svg'
import { GoDot, GoDotFill } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
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
            <div className='flex mt-2 group'>
              <p className='font-montserrat px-1 cursor-default md:text-lg group-hover:border-b-2 text-center' onClick={()=>navigate('/about')}>About us</p>
              <img src='/right-arrow.png' height={25} width={40} className=' w-7 md:w-11 pl-2  ease-in duration-100 group-hover:translate-x-1' onClick={()=>navigate('/about')}></img>
            </div>
         </div>
         <div className='hidden  md:block w-3/4  h-full opacity-50 object-cover'>
            <img src='/electricalTempLogo.jpg' className='min-w-full h-full block gradient-mask-l-0'></img>
         </div>
        </section>


        <section className='mt-0 pl-5 min-h-[50vh] md:min-h-[60vh] w-full md:pt-14 bg-gradient-to-t from-[#08090a] to-[#141516]'>

          <h1 className='text-2xl md:text-7xl font-icona text-nowrap font-bold primary-text'> "Advancing Technology </h1>
          <div className='ml-4 max-w-28 bg-gradient-to-r from-[#2f4f9a] via-[#2f4f9a] to-[#0a0a0a] h-1 md:ml-9 md:mt-1 md:h-2 md:max-w-72 animate-animatedUnderline'></div>
          <h2 className=' text-2xl ml-3 md:ml-7 mt-1 md:mt-2  md:text-7xl font-roboto font-bold primary-text'> For Humanity"</h2>
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

        {/* TODO: rethink and redo this section */}
        {/* <section className='mt-20 h-screen w-full'>
            <div className='flex justify-start items-start ml-10 font-icona'>
              <h1 className='text-7xl primary-text ml-10'>EVENT NAME</h1>
            </div>


            <div className='flex justify-between items-center mt-32 ml-32'>



              <div className='flex'>

                <div className="flex-col">
                <h1 className='text-5xl  font-medium font-poppins eventDateText'>Thursday</h1>
                  <span className='flex flex-col items-start mt-12'>
                    <h2 className='text-[170px] font-poppins font-bold eventDateText leading-none '>25</h2>
                    <h2 className='text-7xl font-medium font-poppins eventDateText leading-none -mt-5'>OCTOBER</h2>
                  </span>
                </div>

                <span className='bg-[#f1fffa] w-[0.5px] mx-10' />

                <div className='flex flex-col flex-nowrap justify-center items-center '>
                    <h1 className='text-5xl eventDateText font-poppins font-medium text-nowrap'>08:00 AM</h1>
                    <h1 className='text-5xl eventDateText font-poppins font-medium mt-2'>C001</h1>
                </div>

              </div>


              <div className='flex flex-col justify-center items-center mx-20 w-full h-full'>
                  <div className='flex text-xl items-center font-oswald primary-text'>
                  <GoDotFill/><span className='ml-1 mr-5'>ROBOTICS</span>  <GoDotFill/><span className='ml-1 mr-5'>ARDUINO</span>  <GoDotFill/><span className='ml-1 mr-5'>IMAGE SENSORS</span>
                  </div>

                  <div className='text-left'>
                    <p className='mt-5 font-oswald ternary-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum tempore placeat asperiores. Sunt, perspiciatis, doloremque explicabo optio reiciendis laudantium esse doloribus harum soluta amet natus excepturi, modi laborum rem cumque.
                    Nulla molestiae soluta voluptas quasi eveniet nihil minus, quos doloribus harum porro perferendis unde assumenda dolor natus hic doloremque rem eius nisi? Distinctio cupiditate quo libero dignissimos neque ut et!
                    </p>
                    <div className='flex gap-6 mt-5 font-roboto text-lg '>
                      <button className=' text-center bg-[#E6E6E6] hover:bg-white rounded-lg text-black px-5 leading-8'>Register Now</button> 
                      <button className='text-center flex items-center bg-gradient-to-tr from-[#FFFFFF] to-[#141516] bg-clip-text text-transparent group'>Set Reminder </button>
                    </div>
                  </div>
                   
              </div>
            </div>
            
        </section> */}


        <section className='h-[105vh] w-full mt-8 gradient-mask-b-70'>
          <div className='ml-12'>
          <h1 className='text-6xl primary-text font-montserrat'>This Week's Highlight</h1>
              <p className='ternary-text text-xl font-roboto mt-5 w-2/3 font-light'>Checkout this week's articles from Students and <span className=' text-xl font-roboto inline-block primary-text underline hover:cursor-pointer' onClick={()=>redirect()}>IEEE Members</span> and gain insightful knowledge on topics ranging from electronics to Tech.</p>
          </div>


          <div className='w-full flex flex-col justify-start items-center mt-12 gap-12'>

            <div className='box-gradient w-2/3 h-72  rounded-2xl border-[0.5px] border-[rgba(255,255,255,0.06)] flex items-start gap-6'>
                <img src='/4276.avif' className='h-5/6 w-60 object-cover ml-5 mt-5 opacity-75 rounded-xl'></img>
                <div className='pl-2'>
                  <h1 className="primary-text text-3xl font-medium font-serif pt-5">Overview of GPT-o4 model by OpenAI</h1>
                  <h2 className='pt-1 secondary-text font-light'>November 27,2024</h2>
                  <p className='w-11/12 mt-5 font-montserrat ternary-text gradient-mask-b-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ratione! Molestias fugit natus nisi illo, in officia illum unde expedita cupiditate voluptas earum. Provident corrupti expedita facere optio labore perferendis?</p>
                  <span className='-mt-2 secondary-text underline '>Read More...</span>
                  <span className='absolute bottom-0 flex items-center  pb-4'><img src='https://api.dicebear.com/9.x/micah/svg?seed=Felix' className='rounded-full h-10 w-10 mt-5'></img> <div className='text-start mt-4'> <h1 className='ml-2 ternary-text text-center'>Atharva K</h1><h3 className='text-xs quaternary-text ml-2'>CSE(AIML)</h3></div></span>
                </div>
            </div>

            <div className='box-gradient w-2/3 h-72  rounded-2xl border-[0.5px] border-[rgba(255,255,255,0.06)] flex items-start gap-6'>
                <img src='/download.jpeg' className='h-5/6 w-60 object-cover ml-5 mt-5 opacity-75 rounded-xl'></img>
                <div className='pl-2'>
                  <h1 className="primary-text text-3xl font-medium font-serif pt-5">Ethereum Ruling the Crypto Market</h1>
                  <h2 className=' pt-1 secondary-text font-light'>November 27,2024</h2>
                  <p className='w-11/12 mt-5 font-montserrat ternary-text gradient-mask-b-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ratione! Molestias fugit natus nisi illo, in officia illum unde expedita cupiditate voluptas earum. Provident corrupti expedita facere optio labore perferendis?</p>
                  <span className='-mt-2 secondary-text underline '>Read More...</span>
                  <span className='absolute bottom-0 flex items-center  pb-4'><img src='https://api.dicebear.com/9.x/micah/svg?seed=Felix' className='rounded-full h-10 w-10 mt-5'></img> <div className='text-start mt-4'> <h1 className='ml-2 ternary-text text-center'>Atharva K</h1><h3 className='text-xs quaternary-text ml-2'>CSE(AIML)</h3></div></span>
                </div>
            </div>
             
          </div>
              
        </section>



    </div>
    </>
  )
}

export default Home