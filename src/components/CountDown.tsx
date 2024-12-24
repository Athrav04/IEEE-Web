import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [countdownStarted,setCountdownStarted] = useState(true);
    const [eventDate,seteventDate] = useState<Date>(new Date(2025,0,12,14,30));
    const [timeRemaining,setTimeRemaining] = useState(0);


    useEffect(() => {
        if (countdownStarted && eventDate) {
          const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const eventTime = new Date(eventDate).getTime();
            let remainingTime = eventTime - currentTime;
    
            if (remainingTime <= 0) {
              remainingTime = 0;
              clearInterval(countdownInterval);
              alert("Countdown complete!");
            }
    
            setTimeRemaining(remainingTime);
          }, 1000);
    
          return () => clearInterval(countdownInterval);
        }

      }, [countdownStarted, eventDate, timeRemaining]);

      //remaning time is in ms 
      function FormatTime(){
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60); 
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        return (
            <div className='flex gap-4 text-center w-full'>
                <div className='relative font-Barber text-[#E10E0F]'>
                    <span className='absolute font-Barber2 text-white'>{days.toString().padStart(2,'0')} :</span>
                    <span className='absolute font-Barber3 text-[#FFD242]'>{days.toString().padStart(2,'0')} :</span>
                    <span className='absolute font-Barber4 text-[#E89E08]'>{days.toString().padStart(2,'0')} :</span>
                    {days.toString().padStart(2,'0')} : 
                </div>

                <div className='relative font-Barber text-[#E10E0F]'>
                    <span className='absolute font-Barber2 text-white'>{hours.toString().padStart(2,'0')} :</span>
                    <span className='absolute font-Barber3 text-[#FFD242]'>{hours.toString().padStart(2,'0')} :</span>
                    <span className='absolute font-Barber4 text-[#E89E08]'>{hours.toString().padStart(2,'0')} :</span>
                    {hours.toString().padStart(2,'0')} : 
                </div>

                <div className='relative font-Barber text-[#E10E0F]'>
                    <span className='absolute font-Barber2 text-white'>{minutes.toString().padStart(2,'0')} :</span>
                    <span className='absolute font-Barber3 text-[#FFD242]'> {minutes.toString().padStart(2,'0')} :</span>
                    <span className='absolute font-Barber4 text-[#E89E08]'>{minutes.toString().padStart(2,'0')} :</span>
                    {minutes.toString().padStart(2,'0')}  : 
                </div>

                <div className='relative font-Barber text-[#E10E0F]'>
                    <span className='absolute font-Barber2 text-white'>{seconds.toString().padStart(2,'0')}  </span>
                    <span className='absolute font-Barber3 text-[#FFD242]'> {seconds.toString().padStart(2,'0')} </span>
                    <span className='absolute font-Barber4 text-[#E89E08]'> {seconds.toString().padStart(2,'0')} </span>
                    {seconds.toString().padStart(2,'0')} 
                </div>


            </div>
        )
    }
    
  return (
    <div className='flex justify-center items-center text-white'>
        <FormatTime/>
    </div>
  )
}

export default CountDown