
import React from 'react'
import Lottie from 'react-lottie';
import loader from '../lotties/loading.json'



const Loader = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
  };

return (
  <div className="flex justify-center items-center text-center font-neue">
    <Lottie 
	    options={defaultOptions}
      height={400}
      width={200}
    />
  </div>
  )
}



export default Loader
