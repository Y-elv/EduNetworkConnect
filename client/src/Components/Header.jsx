import React from 'react'
import styled from "styled-components";
import { useNavigate,Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      {/* logo container */}
      <div>
      <h3>EduCon</h3>
      </div>

      {/* menu */}
      <div className='menu-container' >
      <Link  to="/">
            Home
          </Link>
      <Link to="/">
            Our Work
          </Link>
      <Link  to="/">
            About us
          </Link>
      <Link  to="/">
            Contact us
          </Link>

      </div>

      {/* Login / notification */}
      <div>
        <button>Login</button>
      </div>
      </Wrapper>
  )
}

export default Header

//// styles
const Wrapper = styled.section`
  border: 1px solid red;
  display:flex;
  justify-content:space-around;
  align-items:center;
  .menu-container{ 
display:flex;
gap:10px;
a{
  color:var(--primary-color);
  font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 26px;
}
  }
`