

const LoadingTeamCard = () => {
  return (
    <div className=' h-36 w-40 md:h-64 md:w-64 mt-36 md:mt-5  rounded-md'>
    <div className='animate-pulse'>
    <div className='rounded-lg object-cover h-56 md:h-56 w-full opacity-85 p-2 bg-white/20'></div>
      <h1 className='text-white font-icona mt-2 md:text-lg bg-white/20 h-5 w-32 rounded-md'></h1>
      <h2 className='secondary-text font-light font-roboto leading-none bg-white/20 h-5 w-28 rounded-md mt-2'></h2>
      <div className='flex gap-2 ternary-text text-sm mt-1 leading-none bg-white-30'></div>
    </div>
</div>
  )
}

export default LoadingTeamCard