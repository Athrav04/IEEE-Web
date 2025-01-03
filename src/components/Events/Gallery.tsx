function handleClick() {
console.log('clicked')
  return (
    <div className="w-full h-screen flex justify-center items-center text-center backdrop-blur-lg">
      I am a Modal
    </div>
  )
}

const Gallery = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-6 h-full w-4/5 gap-4">
      <div className="bg-red-500 hover:row-span-2  "></div>
      <div className="bg-red-500 rounded-xl"></div>
      <div className="bg-red-500"></div>
      <div className="bg-red-500"></div>
      <div className="bg-red-500"></div>
      <div className="bg-red-500"></div>
      <button onClick={()=>handleClick()} className="text-white p-3 text-2xl"> Click me</button>


    </div>
  )
}

export default Gallery