import React from 'react'

const Products = () => {

    async function aptData(){
      const res = await fetch("http://localhost:5000/jobs")
      const data = await res.json()
      console.log("data",data)
    }

    aptData()


  return (
   <>
   
  <div className='flex justify-center items-center h-150'> 
    <h1 className='text-7xl text-bold'>Product Page</h1>
   </div>
   </>
  )
}

export default Products
