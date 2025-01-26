

const Upcoming = ({date,time}:{date:string,time:string}) => {
  return (
    <div className='flex  h-32 w-2/4 p-2 translucent-card rounded-xl  '>
        <div className='h-24 w-28 rounded-xl bg-transparent flex flex-col items-center justify-center'>
            <h1 className='font-montserrat font-medium text-lg eventDateText'>{date.toUpperCase()}</h1>
            <h2 className='font-poppins text-3xl eventDateText'>{time}</h2>
        </div>
        <div className='ml-5 flex flex-col justify-center items-start w-4/5'>
            <h1 className='primary-text text-xl'>Event Name</h1>
            <p className='ternary-text text-left'>Join Blockchain Summit 2024 to explore decentralized tech with innovators and hands-on workshops</p>
        </div>
    </div>
  )
}

export default Upcoming