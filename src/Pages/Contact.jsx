import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
   <>
   
  <div>
    <div className='flex justify-center items-center h-100 flex-col '> 
    <h1 className='text-7xl text-bold'>Contact Page</h1>
    <div className='flex gap-4 mt-5'>
   <button className=' px-4 py-2 bg-gray-200 ' onClick={() => navigate("/contact/info")}>
  Contact info
</button>

<button className='bg-gray-200 px-4 py-2' onClick={() => navigate("/contact/contactForm")}>
  Contact page
</button>

   </div>
   </div>
   
  </div>
   </>
  )
}

export default Contact
