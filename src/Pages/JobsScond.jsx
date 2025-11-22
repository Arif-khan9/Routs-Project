import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const JobsScond = () => {

    const [fetchapi, setFetchapi] = useState([]);

const apiData = async () => {
  try {
    const res = await fetch("http://localhost:5000/jobs");
    const data = await res.json();
    setFetchapi(data);
    console.log("data:", data);
  } catch (error) {
    console.log("Error fetching API:", error);
  }
};

useEffect(() => {
  apiData();
}, []);

  return (
   <>
    <div className='flex justify-center items-center h-120 flex-col '>
   <div>
    <h1 className='text-4xl font-bold'>Jop Opening</h1>
    <h3>List of the Current job opening in our company</h3>
    </div> 
    <div className='flex gap-3 mt-10 '>
     {
  fetchapi.map((items, index) => {
    return (
     <Link to={`singlePage/${items.id}`}>
      <div key={index} className="h-25 w-45 bg-gray-300">
        <p className='text-2xl font-bold ml-3 mt-2'>{items.title}</p>
        <p className='ml-3'>{items.location}</p>
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



