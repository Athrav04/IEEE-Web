import  { useEffect, useState } from 'react'

import TeamCard from '../components/Committee/TeamCard'
import GraphBg from '../components/GraphBg'
import axios from 'axios'

import LoadingTeamCard from '../components/Committee/LoadingTeamCard'


export enum Team {Core='Core',Event='Event',Design='Design',WebDev='WebDev',Video='Video',Tech='Tech',Publicity='Publicity',Documentation='Documentation',Active='Active Member',All='All'}

type committee = {
  _id:string,
  name:string,
  domain:string,
  position:Team,
  imgUrl:string
}



//@ts-ignore
const Committee = (props: { src: string}) => {
  const [members,setMembers] = useState<[committee]>();
  const [loading , setLoading] = useState(true);
  const [filter,setFilter] = useState<Team>(Team.All);

  const loadingArray:number[] = new Array(9).fill(0)
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL ;

  useEffect(()=>{
    async function fetchData(){
      setLoading(true);
      const response = await axios.get(`${baseUrl}/teamData/getUsers`);
      if(response.status === 200){
        setMembers(response.data);
        setLoading(false);
      }
      else console.log("Error fetching data",response);
    }
    fetchData();
  },[])
  

  function handleClick(filter:Team){
     setFilter(filter);
  }

  return (
    <div className='h-screen w-full realtive overflow-x-hidden'>
        

      <section className='h-screen w-full relative inset-0'>
      <GraphBg/>
      <div className="absolute flex items-center justify-center md:h-full md:w-full radial-bg-gradient "/>
          <div className='primary-text font-montserrat font-medium absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-8xl'> Our <span className='gradient-text-2 text-transparent animate-gradient'>Committee</span></h1>
            <h2 className='text-center text-3xl md:text-7xl'>For 2024-25</h2>
          </div>
        <div className='absolute w-full flex justify-center items-center gap-4  md:gap-6 pb-10 bottom-0 primary-text hover:cursor-pointer text-xs md:text-lg font-poppins font-light text-nowrap overflow-y-scroll px-5 '>
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2  ${filter == Team.All ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.All)}>All</div>
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Core ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Core)}>Core</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Event ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Event)}>Event</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Design ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Design)}>Design</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.WebDev ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.WebDev)}>Web Dev</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Video ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Video)}>Video</div> 
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Tech ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Tech)}>Tech</div>
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Publicity ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Publicity)}>Publicity</div>
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Documentation ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Documentation)}>Documentation</div>
          <div className={`rounded-lg hover:bg-[#28282C] transition ease-in-out duration-200 p-2 ${filter == Team.Active ? 'bg-[#28282C]':''}`}onClick={()=>handleClick(Team.Active)}>Active Member</div>
        </div>
      </section>
      
      <section className='w-full min-h-screen mt-10'>

        <div className='w-full h-full flex justify-center items-center'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 pl-5 md:gap-12 w-full md:w-2/3 h-full mr-10 md:ml-20'>
            {
              members && members.length> 0 && !loading ? (
                members!.map((member)=>{
                  return filter === Team.All ?  (<TeamCard name={member.name} role={member.position} team={member.domain} image={member.imgUrl} key={member._id}/> )
                  :  member.domain === filter ? <TeamCard name={member.name} role={member.position} team={member.domain} image={member.imgUrl} key={member._id}/>  
                  : null
                })
              ) : (loadingArray.map(()=>{
                return <LoadingTeamCard/>
              }))
              }
          </div>
        </div>


      </section>
     
    </div>
  )
}

export default Committee