import React, { useState } from 'react'
import {  NavLink,useNavigate,Link } from 'react-router-dom'



const Navbar = () => {
  // const [isActive , setIsActive]= useState("/")

 const navigate = useNavigate();


  return (
    <>
    <div className='flex items-center mt-5  justify-around'>
    <div>
        <h3 className='text-4xl font-bold'>router</h3>
    </div>
    <div className=' text-black px-5 py-2 rounded-full shadow-xs bg-gray-100'>
        <ul>
          <li className='text-xl flex gap-5'>
            {/* <Link to={"/"}><a className={`${isActive === "/" ? "text-blue-600" : ""}`} onClick={()=> setIsActive("/")}>Home</a></Link> */}
             <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600" : ""} >Home</NavLink>
             <NavLink to="products" className={({isActive}) => isActive ? "text-blue-600" : ""}>Products</NavLink>
             
             <NavLink to="about" className={({isActive}) => isActive ? "text-blue-600" : ""}>About</NavLink>
             <NavLink to="contact" className={({isActive}) => isActive ? "text-blue-600" : ""}>Contact</NavLink>
          

             <NavLink to="jobsscond" className={({isActive}) => isActive ? "text-blue-600" : ""}>Jobs</NavLink>
           </li>
        </ul>
    </div>
    <div>
        <button className='bg-black text-white px-6 py-3 rounded-full' onClick={()=> navigate("/contact " , {replace:true})}>Get Started</button>
    </div>
 </div>
    </>
  )
}

export default Navbar
