import React from 'react'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ContactForm from './Components/ContactForm'
import Info from './Components/Info'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound'
import JobsScond from './Pages/JobsScond'
import SinglePage from './Pages/SinglePage'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    
    <Route path='/' element={<Home/>}/>   
    <Route path='products' element={<Products/>}/>   
    <Route path='/this' element={<NotFound/>}/>   
    <Route path='about' element={<About/>}/>   
    <Route path='jobsScond' element={<JobsScond/>}/>  
    <Route path='jobsScond/singlePage/:id' element={<SinglePage/>}/>   
   <Route path="contact" element={<Layout />}>
  <Route path="contactForm" element={<ContactForm />} />
  <Route path="info" element={<Info />} />
</Route>


 
   </Routes>
  
   </>
  )
}
export default App
