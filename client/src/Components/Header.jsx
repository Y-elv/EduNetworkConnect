import React, { useEffect } from 'react'
import styled from "styled-components";

import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';
import { addUserToLocalStorage ,removeUserFromLocalStorage} from '../utils/localStorage';
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const {auth,setAuth,setShowLoginForm} = useGlobalContext();
  const navigate = useNavigate();

  const HandleLogout = ()=>{
    removeUserFromLocalStorage();
    setShowLoginForm(false)
    setAuth("")
    toast.success("log out successfully")
   navigate('/');
  }
  const HandleLogin = ()=>{
    setShowLoginForm(true)
  }


  return (
    <Wrapper>
      {/* logo container */}
      <div>
      <h3 className='ecn-logo' >ECN</h3>
      </div>

      {/* menu */}
      <div className='menu-container' >
      <Link  to="/">
            Home
          </Link>
      <Link to="/ourWork">
            Our Work
          </Link>
      <Link  to="/about">
            About us
          </Link>
      <Link  to="/contactUs">
            Contact us
          </Link>

      </div>

      {/* Login / notification */}
      <div>
      {auth?.formData?.name ?<p>Hi,{auth?.formData?.name} <button className='yes-btn' onClick={HandleLogout} >Logout</button></p>  : <button className='yes-btn' onClick={HandleLogin}  >Login</button>}  
      </div>
      </Wrapper>
  )
}

export default Header

//// styles
const Wrapper = styled.section`
  display:flex;
  width:100%;
  justify-content:space-around;
  align-items:center;
  background-color:var(--backgroundColor);
  min-height:50px;

  /* css for logo */
  .ecn-logo{
    color:var(--primary-color)
  }


  /* css for menu */
  .menu-container{ 
display:flex;
gap:10px;
a{
  color:var(--primary-color);
  font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 26px;
border:1px solid var(--primary-color);
border-radius:5px;
padding:0 2px
}
a:hover {
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 3px;
  transform: scale(1.1);
  transition: transform 0.4s ease, background-color 0.3s ease, color 0.3s ease;
}

  }
`