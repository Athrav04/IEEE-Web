import { useState } from "react";

const Gallery = ({imgUrl,delay}:{imgUrl:string,delay:string}) => {
  const [showModal,setShowModal] = useState(false);
  return (
    <div className={`eventsContainer animate-cardSlider`} style={{animationDelay:`${delay}ms`}}>
      <div className="eventsFloatingCard rounded-lg">
        <div className="w-full rounded-lg ">
          <img src={imgUrl} className="h-full w-full object-cover rounded-lg" alt="Event image"></img>
        </div>
        <h3 className="text-start primary-text">Testimonial</h3>
      </div>

      <div className="eventsFloatingCard rounded-lg">
        <div className="w-full rounded-lg ">
          <img src={imgUrl} className="h-full w-full object-cover rounded-lg" alt="Event image"></img>
        </div>
        <h3 className="text-start primary-text">Testimonial</h3>
      </div>

      <div className="eventsFloatingCard rounded-lg">
        <div className="w-full rounded-lg ">
          <img src={imgUrl} className="h-full w-full object-cover rounded-lg" alt="Event image"></img>
        </div>
        <h3 className="text-start primary-text">Testimonial</h3>
      </div>

      <div className="eventsFloatingCard rounded-lg">
        <div className="w-full rounded-lg ">
          <img src={imgUrl} className="h-full w-full object-cover rounded-lg" alt="Event image"></img>
        </div>
        <h3 className="text-start primary-text">Testimonial</h3>
      </div>

      <div className="eventsFloatingCard rounded-lg">
        <div className="w-full rounded-lg ">
          <img src={imgUrl} className="h-full w-full object-cover rounded-lg" alt="Event image"></img>
        </div>
        <h3 className="text-start primary-text">Testimonial</h3>
      </div>

      <div className="eventsFloatingCard rounded-lg">
        <div className="w-full rounded-lg ">
          <img src={imgUrl} className="h-full w-full object-cover rounded-lg" alt="Event image"></img>
        </div>
        <h3 className="text-start primary-text">Testimonial</h3>
      </div>



    </div>

    
   
  )
}

export default Gallery