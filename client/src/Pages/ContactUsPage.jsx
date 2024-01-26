
import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../Components';
import contactMe from '../../src/assets/images/contactMe.jpg';





const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual form submission logic
    console.log('Form Data:', formData);
    // Add logic to submit the form data
  };
  return (
    <Wrapper>
     
      <div className="first-sec">
        <div className="first-sec-left">
        
        <h2 className="contact-heading">Contact Education Connect Network</h2>
        <p className="contact-text">
          We'd love to hear from you. Whether you have questions, suggestions, or just want to say hello, our team is
          here to help. Feel free to get in touch below, and we'll get back to you as soon as possible.
        </p>
        <p className="contact-text">
          Your feedback and inquiries are valuable to us as we strive to create a supportive and engaging community for
          students and volunteers in the field of education.
        </p>
      </div>
      
        <div className="first-sec-right">
          <img src={contactMe}/>
        </div>

      </div>
      <div className="second-sec">
      <h3>Contact Us :</h3>
      <br/>
      <div className="second-sec-form">
      
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
   
   
  </Wrapper>
  )
}

export default ContactUsPage


// Styles
const Wrapper = styled.section`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .first-sec {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:2rem;
    margin-top:40px;
  }

  .first-sec-left {
    
    width: 40%;
    font-family: 'Open Sans', sans-serif;
    color: #333;
  }

  .contact-heading {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .contact-text {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .first-sec-right {
    
    width: 40%;
  }

  .first-sec-right img {
    width: 100%;
    border-radius: 0px 20px 20px 20px;
  }
  .second-sec{
    
    margin:0px 0px 0px 120px 
   
    
    
  }
  .second-sec-form{
  
  
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  

  form {
    display: grid;
    gap: 16px;

    label {
      font-size: 16px;
      margin-bottom: 8px;
      display: block;
    }

    input,
    textarea {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      background-color: #007bff;
      color: #fff;
      padding: 10px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
  }
`;