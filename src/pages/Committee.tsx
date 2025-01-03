import React, { useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar/NavBar'
import TeamCard from '../components/TeamCard'


export enum Team {Core,Event,Design,WebDev,Video,Tech,All}

type committee = {
  name:string,
  role:string,
  team:Team,
}

const team:committee[] = [
  {
    name:'Darshith Shetty',
    role:'Event Joint Head',
    team:Team.Event
  },
  {
    name:'Darshith Shetty',
    role:'Event Joint Head',
    team:Team.Event
  },
  {
    name:'Darshith Shetty',
    role:'Event Joint Head',
    team:Team.Core
  },
  {
    name:'Darshith Shetty',
    role:'Event Joint Head',
    team:Team.Core
  },
  {
    name:'Darshith Shetty',
    role:'Event Joint Head',
    team:Team.Tech
  },
  {
    name:'Darshith Shetty',
    role:'Event Joint Head',
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
    <div className='h-screen w-full'>
      <div className='fixed z-10 '><NavBar/></div> 
      <section className='h-screen w-full bg-gradient-to-t from-[#08090a] via-[#2C3339] to-[#08090a] relative inset-0'>
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