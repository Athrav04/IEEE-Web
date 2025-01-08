import React, { useState } from 'react'
import { UserForm } from '../components/config'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
const [showForm,setShowForm] = useState(false);

const toggleForm = ()=>{
  console.log('clicked')
  setShowForm(!showForm);
}

  return (
    <section className='login-bg h-screen w-full flex items-center justify-center'>
      {showForm ? <div className='w-[330px]'><UserForm/></div> : 
       <div className='flex flex-col justify-start items-center'>
       <h1 className='text-4xl font-montserrat font-bold primary-text'>Log In</h1>
       <button className='px-8 py-1 text-lg text-center bg-white/90 text-black rounded-md hover:bg-white mt-5 h-[48px] w-[336px] transition duration-200 ease-in-out' onClick={()=>toggleForm()}>Continue with Email</button>
       <button className={`px-8 py-1 text-lg text-center bg-transparent secondary-text hover:primary-text rounded-md border-[0.5px] border-[#484849] hover:border-white/35 mt-5 h-[48px] w-[336px] flex justify-center items-center gap-2 transition duration-200 ease-in-out`}>
         <FcGoogle className=''/>
         Continue with Google</button>
     </div>}
     
    </section>
  )
}

export default Login