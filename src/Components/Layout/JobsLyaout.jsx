import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLyaout = () => {
  return (
    <div className='flex  flex-col  justify-center items-center h-100'>
      <h1 className='text-4xl font-bold '>Job Openings</h1>
      <p className='text-xl'>List of currect job opening in our company.</p>
      <Outlet/>

    </div>
  )
}

export default JobsLyaout
