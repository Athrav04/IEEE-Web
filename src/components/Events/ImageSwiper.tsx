import React, { useEffect, useState } from 'react'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-cards';
import axios from 'axios';


const ImageSwiper = () => {
  const [imageUrls,setImageUrls] = useState([]);

  useEffect(()=>{
    const getImageUrl = async()=>{
      await axios.get("http://localhost:3001/eventData/getHeroImages").then((res)=>{setImageUrls(res.data)});
    }
    getImageUrl();
  },[])

  return (
        <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        initialSlide={2}
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='w-[240px] h-2/5 md:w-[320px] md:h-2/3 flex justify-center items-center rounded-md'
        >
           <SwiperSlide className='bg-white rounded-xl text-black flex justify-center items-center h-full w-full'>
            <img src={imageUrls[0]} className='h-full w-full rounded-xl object-cover'></img>
           </SwiperSlide>
           <SwiperSlide className='bg-white rounded-xl text-black flex justify-center items-center h-full w-full'>
            <img src={imageUrls[1]} className='h-full w-full rounded-xl object-cover'/>
           </SwiperSlide>
           <SwiperSlide className='bg-white rounded-xl text-black flex justify-center items-center h-full w-full'>
           <img src={imageUrls[2]} className='h-full w-full rounded-xl object-cover'/>
           </SwiperSlide>
           <SwiperSlide className='bg-white rounded-xl text-black flex justify-center items-center h-full w-full'>
           <img src={imageUrls[3]} className='h-full w-full rounded-xl object-cover'/>
           </SwiperSlide>
           <SwiperSlide className='bg-white rounded-xl text-black flex justify-center items-center h-full w-full'>
           <img src={imageUrls[4]} className='h-full w-full rounded-xl object-cover'/>
           </SwiperSlide>
           <SwiperSlide className='bg-white rounded-xl text-black flex justify-center items-center h-full w-full'>
           <img src={imageUrls[5]} className='h-full w-full rounded-xl object-cover'/>
           </SwiperSlide>

        </Swiper>
  )
}

export default ImageSwiper