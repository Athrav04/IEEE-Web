import React from 'react'

const Home = () => {
  return (
    <>
    <div className='relative'>
      <div className='absolute inset-0 place-self-center content-center'>
        <p className='font-montserrat font-black text-white text-7xl'>IEEE Student Branch</p>
        <div className='bg-sky-500'>
          <button className='absolute inset-0 top-40 place-self-center content-center bg-gradient-to-r from-sky-300 to-sky-500 text-white w-36 h-9 rounded-full '>GET STARTED</button>
        </div>
      </div>
      <img src='public\ieee-bg.jpeg' alt='ieee-bg' />
    </div>
    <div className='container mt-28 w-auto text-wrap flex justify-center'>
      <p className='text-4xl font-black text-sky-500'>Welcome to IEEE Student Branch</p>
    </div>
    <div className='container my-7 w-auto text-sm text-wrap flex justify-center'>
      Empowering students through technology and innovation
    </div>
    <div className='flex justify-evenly mb-16 h-1 mx-auto w-44 bg-sky-500'/>
    <div className='container my-7 w-auto text-sm text-wrap mx-56 flex justify-center'>
      At IEEE Student Branch, we harness the potential of technology to create a vibrant community focused on electronics, electrical, and computer engineering. Our dedicated team is passionate about fostering collaboration and innovation among students. We provide numerous opportunities for hands-on learning, networking, and professional development, ensuring that every member can explore their interests and talents in the tech field.
    </div>
    <div className='container my-4 w-auto text-sm text-wrap mx-56 flex justify-center'>      
      Whether youre looking to enhance your skill, participate in exciting projects, or connect withlike-minded peers, IEEE Student Branch is your gateway to a world of possibilities. Join us in shaping the future of technology and engineering.
    </div>
    <div className='flex justify-evenly mb-4 h-0.5 mx-auto w-96 bg-gradient-to-r from-white via-slate-500 to-white'/>
    <div className="container my-4 w-auto text-sm text-wrap mx-56 flex justify-center">
      Thank you for choosing Company LLC ("Company." "we""us,;" or "our'"). We are commited to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice with regard to your personal information, please contact us at privacy@company.com. The purpose of this privacy notice is to explain to you what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately. Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
    </div>
    
    </>
  )
}

export default Home