import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { jobsArr } from '../assets/data';

const JobsScond = () => {

//     const [fetchapi, setFetchapi] = useState([]);

// const apiData = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/jobs");
//     const data = await res.json();
//     setFetchapi(data);
//     console.log("data:", data);
//   } catch (error) {
//     console.log("Error fetching API:", error);
//   }
// };

// useEffect(() => {
//   apiData();
// }, []);

  return (
   <>
    <div className='flex justify-center items-center min-h-screen flex-col px-4'>
  <div className='text-center'>
    <h1 className='text-4xl font-bold'>Job Opening</h1>
    <h3>List of the Current job openings in our company</h3>
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 w-full max-w-5xl'>
    {
      jobsArr.map((items, index) => {
        return (
          <Link key={index} to={`singlePage/${items.id}`}>
            <div className="h-25 w-full bg-gray-300 p-4 rounded-xl hover:shadow-md transition">
              <p className='text-2xl font-bold'>{items.title}</p>
              <p>{items.location}</p>
            </div>
          </Link>
        );
      })
    }
  </div>

</div>

   </>
  )
}

export default JobsScond



