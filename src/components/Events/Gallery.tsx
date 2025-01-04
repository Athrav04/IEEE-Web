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
    <div className="bg-red-500 rounded-xl hover:scale-125 transition ease-in duration-200 hover:z-10 hover:h-96 hover:w-72 hover:bg-transparent hover:border hover:border-blue-500"></div>
  )
}

export default Gallery