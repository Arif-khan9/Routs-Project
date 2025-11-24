import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { jobsArr } from '../assets/data'

const SinglePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [job, setJob] = useState(null)

  useEffect(() => {
   
    const jobId = parseInt(id)
    const selectedJob = jobsArr.find(j => j.id === jobId)
    
    if (!selectedJob) {
     
      navigate("/this") 
    } else {
      setJob(selectedJob)
    }
  }, [id, navigate])

  if (!job) {
    return <h1 className='text-3xl text-center mt-20'>Loading...</h1>
  }

  return (
    <>
      <div className="flex flex-col items-center text-center px-4 py-10">
        <div>
          <h1 className="text-4xl font-bold">Job Opening</h1>
          <h3>List of the Current job opening in our company</h3>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl">
          <span className="text-2xl font-bold">Job Title: </span>
          {job.title}
        </h2>
        <h2 className="mt-5 text-xl">
          <span className="text-2xl font-bold">Salary: </span>
          {job.salary}
        </h2>
        <h2 className="text-xl mt-5">
          <span className="text-2xl font-bold">Job Location: </span>
          {job.location}
        </h2>
        <h2 className="text-xl mt-5">
          <span className="text-2xl font-bold">Description: </span>
          {job.description}
        </h2>
        <button className="px-6 py-3 bg-black text-white mt-9 rounded-lg hover:bg-gray-800 transition">
          Apply Now
        </button>
      </div>
    </>
  )
}

export default SinglePage
