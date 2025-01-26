import { useEffect, useState } from 'react'

const CountDown = () => {
  //@ts-ignore
    const [countdownStarted,setCountdownStarted] = useState(true);
    //@ts-ignore
    const [eventDate,seteventDate] = useState<Date>(new Date(2025,0,12,14,30));
    const [timeRemaining,setTimeRemaining] = useState(0);
    //@ts-ignore
    const [countDownComplete,setCountDownComplete] = useState(false);

    useEffect(() => {
        const updateRemainingTime = () => {
          const currentTime = new Date().getTime();
          const eventTime = new Date(eventDate).getTime();
          let remainingTime = eventTime - currentTime;
      
          setTimeRemaining(remainingTime);
        };
      
        if (!countDownComplete && eventDate ) {
          updateRemainingTime(); // Calculate immediately on mount
          const countdownInterval = setInterval(updateRemainingTime, 1000);
      
          return () => clearInterval(countdownInterval);
        }
      }, [countdownStarted, eventDate]);
      

      //remaning time is in ms 
      function FormatTime(){
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60); 
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        return (
            // Layering fonts on the text
            <div className='flex gap-4  w-full h-full font-montserrat'>
                <div className='flex flex-col text-8xl'>
                  <span className='text-center'>{days.toString().padStart(2,'0')} </span>
                  <div className='secondary-text text-base text-center'> Days</div>
                </div>

                <span className='text-8xl'>:</span>

                <div className='flex flex-col text-8xl'>
                  <span>  {hours.toString().padStart(2,'0')}</span>
                  <div className='secondary-text text-base text-center'> Hours</div>
                </div>

                <span className='text-8xl'>:</span>

                <div className='flex flex-col text-8xl'>
                  <span>  {minutes.toString().padStart(2,'0')} </span>
                  <div className='secondary-text text-base text-center'> Minutes</div>
                </div>

                <span className='text-8xl'>:</span>

                <div className='flex flex-col text-8xl'>
                  <span>  {seconds.toString().padStart(2,'0')} </span>
                  <div className='secondary-text text-base text-center'> Seconds</div>
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