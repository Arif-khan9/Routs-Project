import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import JobsScond from './Pages/JobsScond';
import SinglePage from './Pages/SinglePage';


import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Info from './components/Info';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="jobsScond" element={<JobsScond />} />
        <Route path="jobsScond/singlePage/:id" element={<SinglePage />} />

        <Route path="contact" element={<Layout />}>
          <Route path="contactForm" element={<ContactForm />} />
          <Route path="info" element={<Info />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
