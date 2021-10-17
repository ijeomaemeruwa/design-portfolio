import React from 'react'

const Header = ({children}) => {
    return (
    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <div className="pb-6 md:mt-11">
      {children}
    </div>
    </div>
    )
}

export default Header
