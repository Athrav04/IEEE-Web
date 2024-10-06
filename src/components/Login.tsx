import React from 'react'
import { UserForm } from './config'

const Login = () => {

  return (
    <div className='h-screen grid grid-cols-4'>
     <div className='flex justify-center items-center  col-span-4 md:col-span-2 md:flex md:justify-center md:items-center'>
        <UserForm />
     </div>
    <img
    src='/atmosphere.jpg'
    alt='loing-bg-image'
    className='h-screen w-full object-cover col-span-2'>
    </img>

    </div>
  )
}

export default Login