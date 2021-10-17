import React from 'react'

const Overview = ({children}) => {
    return (
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="font-neue font-medium pb-8 text-xl md:text-3xl text-dark">Overview</h4>
      {children}
    </div>
    )
}

export default Overview
