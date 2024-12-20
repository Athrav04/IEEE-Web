interface EventCardProps {
  imageUrl:string,
  type:string,
  icon:string,
  content:string
}


const EventsCard = ({imageUrl,type,icon,content}:EventCardProps) => {
  return (
    <>
        <section className='h-[390px] w-60 mb-5 lg:min-h-[410px] lg:w-72 xl:h-[500px] xl:w-96 rounded-3xl bg-[#141516] transition ease-in duration-150 hover:scale-110'>
          <div className='h-2/3 rounded-3xl'>
            <img src={imageUrl} alt='events' className='h-full w-full object-cover rounded-t-3xl gradient-mask-b-0'></img>
          </div>

          <div className='flex-col px-3'>

            <div className='flex justify-between lg:mt-3'>
              <h1 className='font-montserrat lg:text-xl primary-text font-medium lg:pl-3'>{type}</h1>
              <img src={icon} alt='workshops image' className='h-7 w-7'></img>
            </div>

              <p className='lg:pl-3 ternary-text text-xs md:text-sm pt-2 w-2/3'>{content}</p>
                
          </div>

         
          
          <a className=' pl-3 lg:pl-6 mt-4 lg:mt-9 inline-block text-xs lg:text-sm primary-text font-thin hover:underline hover:cursor-pointer'>Learn More &rarr;</a>
            
        </section>
    </>
  )
}
export default EventsCard