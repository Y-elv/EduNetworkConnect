import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      {/* logo container */}
      <div>
        <h3 className='ecn-logo'>ECN</h3>
      </div>

      {/* menu */}
      <div className='menu-container'>
        <Link to="/">Home</Link>
        <Link to="/ourWork">Our Work</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contactUs">Contact Us</Link>
      </div>

      {/* Login / notification */}
      <div>
        <button className='login-btn'>Login</button>
      </div>
    </Wrapper>
  );
}

export default Header;

// Styles
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: var(--backgroundColor);
  min-height: 50px;

  /* CSS for logo */
  .ecn-logo {
    color: var(--primary-color);
    font-size: 24px; /* Adjust font size as needed */
    font-weight: bold; /* Use a bold font-weight for emphasis */
  }

  /* CSS for menu */
  .menu-container {
    display: flex;
    gap: 20px; /* Increased gap for better readability */
    
    a {
      color: var(--primary-color);
      font-size: 16px; /* Adjust font size as needed */
      font-weight: 500; /* Use a slightly bolder font-weight */
      text-decoration: none;
      padding: 8px 12px; /* Adjust padding for better spacing */
      border: 1px solid var(--primary-color);
      border-radius: 5px;
      transition: transform 0.4s ease, background-color 0.3s ease, color 0.3s ease;
    }

    a:hover {
      background-color: var(--primary-color);
      color: var(--white);
      border-radius: 3px;
      transform: scale(1.1);
    }
  }

  /* CSS for login button */
  .login-btn {
    background-color: var(--primary-color);
    color: var(--white);
    font-size: 14px; /* Adjust font size as needed */
    font-weight: 500; /* Use a slightly bolder font-weight */
    padding: 8px 16px; /* Adjust padding for better spacing */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .login-btn:hover {
    background-color: var(--dark-primary-color);
  }
`;
