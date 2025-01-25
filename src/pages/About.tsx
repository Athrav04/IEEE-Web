import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import NavBarMob from '../components/NavBar/NavBarMob';
import Footer from '../components/Footer';
import axios from 'axios';

type imgUrl = {
  Teacher1:string,
  Teacher2:string,
  Director:string
}

const About = () => {
  const [imgUrl,setImgUrl] = useState<imgUrl>();

  useEffect(()=>{
    const fetchData = async ()=>{
    try{
      const responses = await Promise.all([
        axios.get('http://localhost:3001/teamData/getImage?img=Teacher1.jpg'),
        axios.get('http://localhost:3001/teamData/getImage?img=Teacher2.jpg'),
        axios.get('http://localhost:3001/teamData/getImage?img=Director.jpg')
      ])
      const urls = {
        Teacher1:responses[0].data,
        Teacher2:responses[1].data,
        Director:responses[2].data
      }
      setImgUrl(urls);
    }catch(err){
      console.log("Error fetching images",err);
    }
  }
  fetchData();
  },[])

  return (
    <div className='text-white relative overflow-x-hidden'>
  


      <div className='h-[90vh] w-full flex flex-col justify-center items-center text-center relative'>
        <div className='bg-blue-500 about-bg  ml-44 mb-20 animate-blob'></div>
        <div className='bg-blue-500 about-bg  ml-64 mb-20 animate-blob delay-2000'></div>
        <div className='bg-yellow-500 about-bg mr-56 mt-20 animate-blob delay-3000'></div>
        <span className='text-3xl md:text-5xl  font-montserrat  bg-gradient-to-tr from-[#5899E2] to-[#FFFFFF] bg-clip-text text-transparent z-10'>Institue of Electronics and Electrical Engineering (IEEE)</span>
        <span className='primary-text text-xl md:text-3xl font-montserrat  mt-2 z-10'>VIIT Student Branch</span>
      </div>

      <div className='md:h-[70vh] w-full'>
        <span className='flex justify-center items-center primary-text text-lg md:text-2xl'>Message from our Senior Members</span>
        <div className='flex justify-center items-center mt-10 md:mt-20'>
          <div className='w-1/2 h-full flex justify-center items-center'>
          <img className='w-full h-full md:h-2/3 md:w-2/3 rounded-full px-5' src={imgUrl?.Director} ></img>
          </div>
         
          <div className='w-1/2 h-full flex flex-col justify-center items-start'>
              <h1 className='text-start md:text-center text-sm md:text-xl text-nowrap'>Dr Vivek S. Deshpande (Director)</h1>
              <p className='ternary-text text-xs md:text-lg pr-2 md:pr-20 mt-5 font-light'>Dr Vivek S. Deshpande, holds Bachelors and Masters of Engineering in Electronics & Telecommunications from Savitribai Phule Pune University (earlier known as University of Pune) and Doctorate from Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur, Maharashtra, India. He has got 31 years of experience comprising of both industry and academia. Dr Vivek S. Deshpande has worked at Vishwakarma Institute of Technology, Pune as Professor and Head of Computer Engineering Department.</p>
          </div>
        </div>
      </div>

      <div className='md:h-[70vh] w-full'>
        <div className='flex justify-center items-center mt-20'>
        <div className='w-2/3 h-full flex flex-col justify-center items-start'>
              <h1 className='text-left text-sm md:text-xl pl-4 md:pl-20 text-nowrap'>Head of Department (HOD)</h1>
              <p className='ternary-text text-xs md:text-lg pl-4 md:pl-20 mt-5 font-light'>Dr. Shraddha Habbu, an accomplished academic and industry professional in electronics and telecommunications, holds a Ph.D. in Biomedical Signal Processing from Savitribai Phule Pune University. Her expertise in interpreting medical signals for enhanced healthcare applications is showcased through her academic journey and practical experience of 6 years in the industry, bridging theoretical knowledge with real-world applications. Currently, as the Head of Electronics and Telecommunication Department at VIIT, her esteemed role follows a notable 14-year tenure as Associate Dean Quality, emphasizing her dedication to maintaining academic standards. </p>
          </div>
         <div className='w-1/2 h-full flex justify-center items-center'>
         <img className='w-full h-full md:h-2/3 md:w-2/3 rounded-full px-5' src={imgUrl?.Teacher2}></img>
         </div>
         
        </div>
      </div>

      <div className='md:h-[70vh] w-full mb-20'>
        <div className='flex justify-center items-center mt-20'>
        <div className='w-1/2 h-full flex justify-center items-center'>
         <img className='w-full h-full md:h-2/3 md:w-2/3 rounded-full px-5' src={imgUrl?.Teacher1}></img>
         </div>
          <div className='w-1/2 h-full flex flex-col justify-center items-start'>
              <h1 className='text-start text-sm md:text-xl'>Branch Counsellor</h1>
              <p className='ternary-text text-xs md:text-lg pr-4 md:pr-20 mt-5 font-light'>Mrs. Dipti Pandit is a highly accomplished professional with a diverse background. She holds a Diploma in Electronics and Telecommunication, a Bachelor's in Electronics, and a Master's in Engineering from Savitribai Phule Pune University. Mrs. Pandit is an Assistant Professor at Vishwakarma Institute of Information Technology,  A dedicated researcher, she contributes to projects in Machine Learning and Deep Learning and serves as the Branch Counsellor of IEEE VIIT Student Branch, fostering innovation in the institution.</p>
          </div>
        </div>
      </div>

      <Footer fb="https://www.facebook.com/viitieee/" ig="https://www.instagram.com/ieeeviit/" x="https://twitter.com/viit_ieee" linkedIn="https://www.linkedin.com/company/ieee-viit-student-branch/"/>

    </div>
    
  )
}

export default About