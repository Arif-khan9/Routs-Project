import React from 'react'

const ContactForm = () => {
  return (
   <>
    <div className='flex justify-center relative bottom-25  '>
      <form>
        <input className=' bg-gray-200 p-2 px-6 ' type="text" placeholder='Name' />
        <br />
        <input className='bg-gray-200 p-2 px-6 mt-2' type="text" placeholder='Email ' />
        <br />
        <textarea className='bg-gray-200 p-2 px-5 mt-2' placeholder='Message'></textarea>
        <br />
        <button className='bg-gray-300 mt-2 px-6 py-2' type='submit'>Submit.</button>
      </form>
    </div>
   </>
  )
}

export default ContactForm
