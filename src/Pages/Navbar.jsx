import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center mt-5 justify-between px-6 lg:px-20">
        
        <h3 className="text-4xl font-bold">router</h3>
        <ul className="hidden md:flex gap-6 text-xl bg-gray-100 px-5 py-2 rounded-full">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Home</NavLink>
          <NavLink to="products" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Products</NavLink>
          <NavLink to="about" className={({ isActive }) => isActive ? "text-blue-600" : ""}>About</NavLink>
          <NavLink to="contact" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Contact</NavLink>
          <NavLink to="jobsscond" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Jobs</NavLink>
        </ul>

        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <CiMenuBurger />}
        </div>

        <button className="hidden md:block bg-black text-white px-6 py-3 rounded-full"
          onClick={() => navigate("/contact", { replace: true })}>
          Get Started
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-100 text-xl p-5 flex flex-col gap-4 mt-3">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="products" onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="jobsscond" onClick={() => setOpen(false)}>Jobs</NavLink>

          <button className="bg-black text-white px-6 py-3 rounded-full mt-2"
            onClick={() => {
              setOpen(false);
              navigate("/contact", { replace: true });
            }}>
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
