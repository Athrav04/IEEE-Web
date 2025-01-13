import React, { useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar/NavBar'
import TeamCard from '../components/TeamCard'
import GraphBg from '../components/GraphBg'


export enum Team {Core,Event,Design,WebDev,Video,Tech,All}

type committee = {
  name:string,
  role:string,
  team:Team,
}

const team:committee[] = [
  {
    name:'Pragati Patil',
    role:'Chairperson',
    team:Team.Core
  },
  {
    name:'Sakshi Girase',
    role:'Vice Chairperson',
    team:Team.Core
  },
  {
    name:'Pratik Yadav',
    role:'Secretary',
    team:Team.Core
  },
  {
    name:'Darshith Shetty',
    role:'Joint Secretary',
    team:Team.Core
  },
  {
    name:'Atharva Joshi',
    role:'Treasurer',
    team:Team.Core
  },
  {
    name:'Mayuresh Marade',
    role:'Joint Treasurer',
    team:Team.Core
  },
  {
    name:'Apratim Phadke',
    role:'General Manager',
    team:Team.Core
  },
  {
    name:'Anushka Gargelwar',
    role:'Event Head',
    team:Team.Event
  },
  {
    name:'Shrey Jamadagni',
    role:'Event Joint Head',
    team:Team.Event
  },
  {
    name:'Ayush Kale',
    role:'Event Associate',
    team:Team.Event
  },
  {
    name:'Rushikesh Pagere',
    role:'Event Associate',
    team:Team.Event
  },
  {
    name:'Shravani Kurkute',
    role:'Design Head',
    team:Team.Design
  },
  {
    name:'Anish Desai',
    role:'Design Joint Head',
    team:Team.Design
  },
  {
    name:'Anushree Joshi',
    role:'Design Associate',
    team:Team.Design
  },
  {
    name:'Anushree Bhosale',
    role:'Design Associate',
    team:Team.Design
  },
  {
    name:'Abhishek Mallav',
    role:'Technical Head',
    team:Team.Tech
  },
  {
    name:'Chinmay Chavan',
    role:'Joint Technical Head',
    team:Team.Tech
  },
  {
    name:'Daksh Tiwary',
    role:'Technical Associate',
    team:Team.Tech
  },
  {
    name:'Rushikesh Ade',
    role:'Technical Associate',
    team:Team.Tech
  },
  {
    name:'Divya Rewade',
    role:'Video Editing Head',
    team:Team.Video
  },
  {
    name:'Rohit Shinde',
    role:'Video Eiditin Joing Head',
    team:Team.Video
  },
  {
    name:'Atharva Khandagale',
    role:'Web Dev Head',
    team:Team.WebDev
  },
  {
    name:'Chetan Kotangle',
    role:'Web Dev Joint Head',
    team:Team.WebDev
  },
  {
    name:'Pranita Bhor',
    role:'Web Dev Assocaite',
    team:Team.WebDev
  },
  {
    name:'Shatavali Bahadure',
    role:'Web Dev Assocaite',
    team:Team.WebDev
  }
]



const Committee = (props: { src: string}) => {
  const [active,setActive] = useState()
  const [filter,setFilter] = useState<Team>(Team.All);

  function handleClick(filter:Team){
     setFilter(filter);
  }

  const src = props.src;
  return (
    <div className='h-screen w-full realtive'>
      <GraphBg/>
            <div className="absolute flex justify-center items-center h-full w-full radial-bg-gradient"/>
      <div className='fixed z-10 '><NavBar/></div> 
      <section className='h-screen w-full relative inset-0'>
          <div className='primary-text font-montserrat font-medium absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className='text-8xl'> Our <span className='gradient-text-2 text-transparent animate-gradient'>Committee</span></h1>
            <h2 className='text-center text-7xl'>For 2024-25</h2>
          </div>
        <div className='absolute w-full flex justify-center items-center gap-6 pb-10 bottom-0 primary-text hover:cursor-pointer text-lg font-poppins font-light'>
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2  ${filter == Team.All ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.All)}>All</div>
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Core ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Core)}>Core</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Event ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Event)}>Event</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Design ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Design)}>Design</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.WebDev ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.WebDev)}>Web Dev</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Video ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Video)}>Video</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Tech ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Tech)}>Tech</div>
        </div>
      </section>
      
      <section className='w-full min-h-screen mt-10'>
        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-3 gap-12 w-2/3 h-full ml-20'>
            {
                team.map((member,index)=>{
                  return filter === Team.All ?  (<TeamCard name={member.name} role={member.role} team={member.team} image='/main.jpg'/> )
                  :  member.team === filter ? <TeamCard name={member.name} role={member.role} team={member.team} image='/main.jpg'/>  
                  : null
                })
              }
          </div>

        </div>
      </section>
     
    </div>
  )
}

export default Committee