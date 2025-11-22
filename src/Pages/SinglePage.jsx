import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SinglePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [apidata, setApidata] = useState(null)

  const fetchApi = async () => {
    try {
      const res = await fetch(`http://localhost:5000/jobs/${id}`)
      if(!res.ok){
        navigate("/this")
      }
      const data = await res.json()
       console.log("data", data)
        
      setApidata(data)
      
     
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [id])

  if (!apidata) {
    return <h1 className='text-3xl text-center mt-20'>Loading...</h1>
  }

  return (
    <>
      <div className='flex flex-col ml-90 justify-center h-60'>
        <h1 className='text-4xl font-bold'>Job Opening</h1>
        <h3>List of the Current job opening in our company</h3>
      </div>

      <div className='ml-90'>
        <h2 className='text-xl'>
          <span className='text-2xl font-bold'>Job Title: </span>
          {apidata.title}
        </h2>

        <h2 className='mt-5 text-xl'>
          <span className='text-2xl font-bold'>Salary: </span>
          {apidata.salary}
        </h2>

        <h2 className='text-xl mt-5'>
          <span className='text-2xl font-bold'>Job Location: </span>
          {apidata.location}
        </h2>

        <h2 className='text-xl mt-5'>
          <span className='text-2xl font-bold'>Description: </span>
          {apidata.description}
        </h2>

        <button className='px-5 py-3 bg-black text-white mt-9'>
          Apply Now
        </button>
      </div>
    </>
  )
}

export default SinglePage
