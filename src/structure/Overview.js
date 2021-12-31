import React from 'react'

const Overview = ({children}) => {
    return (
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">Overview</h4>
      {children}
    </div>
    )
}

export default Overview
