import React from 'react'
import NavBar from '../components/NavBar/NavBar'

const About = () => {
  return (
    <div className='text-white'>
      <div className='fixed top-0 z-10'>
        <NavBar />
      </div>


      <div className='h-[90vh] w-full flex flex-col justify-center items-center text-center relative'>
        {/* <div className='bg-blue-500 about-bg  ml-44 mb-20 animate-blob'></div>
        <div className='bg-blue-500 about-bg  ml-64 mb-20 animate-blob delay-2000'></div>
        <div className='bg-yellow-500 about-bg mr-56 mt-20 animate-blob delay-3000'></div> */}
        <span className=' text-5xl  font-montserrat z-10 bg-gradient-to-tr from-[#5899E2] to-[#FFFFFF] bg-clip-text text-transparent '>Institue of Electronics and Electrical Engineering (IEEE)</span>
        <span className='primary-text text-3xl font-montserrat z-10 mt-2'>VIIT Student Branch</span>
      </div>

      <div className='h-[70vh] w-full'>
        <span className='flex justify-center items-center primary-text text-2xl'>Message from our Senior Members</span>
        <div className='flex justify-center items-center mt-20'>
          <img className='w-1/2 h-full'></img>
          <div className='w-1/2 h-full flex flex-col justify-center items-start'>
              <h1 className='text-center text-xl'>Dr Vivek S. Deshpande ( Director )</h1>
              <p className='ternary-text text-lg pr-20 mt-5 font-light'>Dr Vivek S. Deshpande, holds Bachelors and Masters of Engineering in Electronics & Telecommunications from Savitribai Phule Pune University (earlier known as University of Pune) and Doctorate from Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur, Maharashtra, India. He has got 31 years of experience comprising of both industry and academia. Dr Vivek S. Deshpande has worked at Vishwakarma Institute of Technology, Pune as Professor and Head of Computer Engineering Department. Dr Vivek S. Deshpande is working on many research projects related to more social and industrial problems. Dr Vivek S. Deshpande is Senior member of IEEE, Pune Section (R10, India). He chairs Education Society and Industry Relations for IEEE Pune Chapter. He is also a member of the conference committee of IEEE Pune Chapter.</p>
          </div>
        </div>
      </div>

      <div className='h-[70vh] w-full'>
        <div className='flex justify-center items-center mt-20'>
        <div className='w-2/3 h-full flex flex-col justify-center items-start'>
              <h1 className='text-center text-xl pl-20'>Head of Department( HOD )</h1>
              <p className='ternary-text text-lg pl-20 mt-5 font-light'>Dr. Shraddha Habbu, an accomplished academic and industry professional in electronics and telecommunications, holds a Ph.D. in Biomedical Signal Processing from Savitribai Phule Pune University. Her expertise in interpreting medical signals for enhanced healthcare applications is showcased through her academic journey and practical experience of 6 years in the industry, bridging theoretical knowledge with real-world applications. Currently, as the Head of Electronics and Telecommunication Department at VIIT, her esteemed role follows a notable 14-year tenure as Associate Dean Quality, emphasizing her dedication to maintaining academic standards. Additionally, she imparts her extensive knowledge as an Associate Teacher in pivotal subjects like Optical Fiber Communication, VLSI Design and Technology,VLSI Design, and Biomedical Signal Processing, reflecting her versatile capabilities. Dr. Habbu's contributions extend beyond academia, exemplified by her pioneering work in the "Non-Invasive Estimation of Blood Glucose by Optical Means and Soft Computing." Her patented innovations further underscore her problem-solving abilities, including "Non-invasive Blood Glucose Estimation by Photoplethysmography using Single Pulse Technique with Cepstral Coefficients" and "A System to Manage College Recruitment System.</p>
          </div>
          <img className='w-1/2 h-full'></img>
         
        </div>
      </div>

      <div className='h-[70vh] w-full'>
        <div className='flex justify-center items-center mt-20'>
          <img className='w-1/2 h-full'></img>
          <div className='w-1/2 h-full flex flex-col justify-center items-start'>
              <h1 className='text-center text-xl'>Branch Counsellor</h1>
              <p className='ternary-text text-lg pr-20 mt-5 font-light'>Mrs. Dipti Pandit is a highly accomplished professional with a diverse background. She holds a Diploma in Electronics and Telecommunication, a Bachelor's in Electronics, and a Master's in Engineering from Savitribai Phule Pune University. Currently pursuing a PhD, Mrs. Pandit is an Assistant Professor at Vishwakarma Institute of Information Technology, bringing her industry experience to students. Her expertise extends to cutting-edge technologies from her role as an Electronic Engineer at Dynalec controls. A dedicated researcher, she contributes to projects in Machine Learning and Deep Learning and serves as the Branch Counsellor of IEEE VIIT Student Branch, fostering innovation in the institution.</p>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default About