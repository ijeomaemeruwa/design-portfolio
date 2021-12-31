import React from 'react'


const Card = ({children}) => {
return (
<>
<div 
  className="bg-white mb-8 mt-8 mx-2 card transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-100" 
  style={{maxWidth: '550px'}}
>
  <div className="w-full h-full mx-auto px-1">
    {children}
  </div>
</div>       
</>
)
}

export default Card