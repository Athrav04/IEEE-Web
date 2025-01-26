
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'



type TeamCardProps = {
  name:string,
  team:string,
  role:string,
  image:string,
  instagram?:string,
}

const TeamCard = (props:TeamCardProps) => {
  return (
    <div className=' h-36 w-40 md:h-64 md:w-64 mt-36 md:mt-5'>
        <img src={props.image} className='rounded-lg object-cover h-56 md:h-56 w-full opacity-85'></img>
          <h1 className='text-white font-icona mt-2 md:text-lg'>{props.name}</h1>
          <h2 className='secondary-text font-light font-roboto leading-none'>{props.role}</h2>
          <div className='flex gap-2 ternary-text text-sm mt-1 leading-none'><FaInstagram className='hover:text-white'/><FaLinkedin className='hover:text-white'/><MdMailOutline className='hover:text-white'/></div>
    </div>
  
  )
} 

export default TeamCard