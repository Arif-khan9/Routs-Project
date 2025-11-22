import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-100 flex-col'>
      <h1 className='text-4xl font-bold'>404 | Page not found</h1>
      <button className='border mt-5' onClick={()=> navigate("/")}>Go to Home</button>
    </div>
  )
}

export default NotFound
