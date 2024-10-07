import React from 'react'
import { UserForm } from './config'

const Login = () => {

  return (
    <section className='grid grid-cols-4 '>
      <div className=' absolute '><img src='./ieee_logo.png' alt='ieee_logo' className='object-cover top-0 left-0' height={200} width={200} /></div>
      <div className='h-screen flex flex-col justify-center items-center col-span-2'>
        <div className='flex flex-col items-start'>
          <h1 className='mb-4 text-4xl font-bold'>Welcome Back!</h1>
          <UserForm />
        </div>

      </div>
      <div className='h-screen col-span-2'>
          <img src='./atmosphere.jpg'alt='login-bg-image' className='h-screen w-full object-cover rounded-l-3xl'/>
      </div>

    </section>
  )
}

export default Login