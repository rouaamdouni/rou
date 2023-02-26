
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import userContext from '../contexts/userContext';
import { FaSearch } from 'react-icons/fa';
import '../components/style.css';
import logo from "../assets/logo.png";

// const user=await fetch('http://localhost:5050/auth/login')









const Navbar = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const login = () => {
    setTimeout(() => {
      navigate("/login")
    }, 1000)
  }
  const logout = () => {
    setUser(null)
  }
  const signUp = () => {
    navigate("/register");
  }
  return (
    <div className='flex justify-between  items-center px-[20px] '>

      <div className='h-[80px]' >
        <img src={logo} alt="logo" className='h-[80px]'  />
      </div>
        <div className='nav-left'>
          <div className='flex justify-between  items-center px-[20px]'>
            {
              !user ? <></> : <h5 style={{ marginTop: '10px' }}>{user}</h5>
            }
            {
              !user ? <button className="bg-[#8ed1fc] hover:bg-[#0693e3] text-[#05445e] font-semibold px-[10px] py-2 " onClick={signUp}> Sign Up</button>
                : <></>
            }
            {
              !user ? <button onClick={login} className="bg-[#8ed1fc] hover:bg-[#0693e3] text-[#05445e] font-semibold ml-[15px] py-2 px-[15px] "> log in</button>
                : <button onClick={logout} className="bg-[#8ed1fc] hover:bg-[#0693e3] text-[#05445e] font-semibold py-2 px-[15px] ml-[15px] "> log out</button>
            }

          </div>

        </div>
      </div>
  
  )
}

export default Navbar;