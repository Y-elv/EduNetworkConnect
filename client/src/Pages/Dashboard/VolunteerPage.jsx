// VolunteerPage.jsx
import React, { useState } from 'react';
import { BiSolidDollarCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { Header, Hero, StripeForm } from '../../Components';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../context';
import {skillsAvailable} from "../../data"
const VolunteerPage = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showOthers, setShowOthers] = useState(false);


  /// utils
  const handleSkillsSubmit = ()=>{
    toast.success("Thank you, We will reach out back to you with matching seeker")
  }
  
  const handleOtherSupport = ()=>{
    toast.success("Thank you, We will reach out back to you with matching seeker")
  }
  return (
    <Wrapper>
      <div>
        {/* About user message */}
        <div className='about-user-container'>
          <h3>Tell us a little bit about yourself</h3>
          <textarea placeholder='Enter your message...'></textarea>
          <button className='submit-btn'>Submit</button>
        </div>

        {/* Options to help */}
        <h3>Your Support</h3>

{/* supports container */}
<div className='supports-container' >
 {/* Raise Fund */}
 <div className='Funds-section' >
          <button className='yes-btn raise-fund' onClick={() => setShowPayment((prev) => !prev)}>
            <span><BiSolidDollarCircle /></span> Raise Fund
            <p>We are seeking $545 to cover school fees for 25 students</p>
          </button>
         
        {/* Stripe Form */}
        {showPayment && (
          <div>
            <StripeForm />
          </div>
        )}
        </div>


        {/* Skills */}
        <div className='skills-section' >
          <button className='yes-btn skills' onClick={() => setShowSkills((prev) => !prev)}>
            Skills
            <p>Help education seekers by sharing your skills with them</p>
          </button>
        

          {/* Display type of skills */}
          {showSkills && (
          <div>
            <div className='skill-cards-container' >
              {
                skillsAvailable.map((skill,index)=>{
                /// destructuring 
                return <ul key={index} className='skill-card'  >
                    <h4>{skill?.field}</h4>
                    {skill?.courses?.map((course,index)=>{
                     return  <div key={index} className='courses-card'  >
                         <input type="checkbox" name="" id="" />
                        <li>{course}</li>
                      </div>
                    })}
                  </ul>
                })
              }
              
            </div>
            
             {/* Continue */}
        <button className='yes-btn continue' onClick={handleSkillsSubmit} >Continue</button>
             </div>
            
          )}
          

        </div>

        {/* Other */}
        <div className='others-section' >
          <button className='yes-btn other' onClick={() => setShowOthers((prev) => !prev)}>
            Other
            <p>If you have any other thing you would like to support with, Please specify it</p>
          </button>

          {/* Show other section */}
          {showOthers && (
            <div className='clarify-others-container' >
              <label>Please specify any other support you would like to offer</label>
              <textarea placeholder='Enter your message...'></textarea>
              <button className='submit-btn continue ' onClick={handleOtherSupport} >Submit</button>
            </div>
          )}
        </div>
</div>
       

       
      </div>
    </Wrapper>
  );
};

export default VolunteerPage;

/////styles
const Wrapper = styled.section`
  background-color: var(--backgroundColor);
  margin-top: 25px;
  padding: 20px;

  .about-user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      margin-bottom: 10px;
    }

    textarea {
      border: 1px solid var(--primary-color);
      min-width: 300px;
      min-height: 60px;
      max-width: 400px;
      max-height: 150px;
      margin-top: 10px;
      padding: 10px;
      resize: vertical;
    }

    .submit-btn {
      margin-top: 10px;
    }
  }

  .supports-container{

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
  }
 

  div > div,
  div > button {
    margin-top: 10px;
    width:100%
  }

  div > p {
    margin-top: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 5px;
  }

  ul > h4 {
    margin-bottom: 5px;
  }

  label {
    display: block;
    margin-top: 10px;
  }

  /* Specific button styles */
  .raise-fund,
  .skills,
  .other{
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .continue {
    background-color:green;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  /* New styles for skill cards */
  .skill-cards-container {
    display: flex;
   overflow-x:auto;
   border: 1px solid var(--primary-color);
   border-radius:5px
  }

  .skill-card {
    background-color: #fff;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    margin: 10px;
    padding: 15px;
    min-width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h4 {
      margin-bottom: 10px;
    }

    .courses-card {
      display: flex;
      align-items: center;

      input {
        margin-right: 10px;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    }
  }
  /* New styles for Funds-section */
  .Funds-section {
    .raise-fund {
      /* ... (your existing styles) */
      padding: 15px 20px;
      position: relative;
      border: 2px solid var(--primary-color);
      border-radius: 10px;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--primary-color);
      }

      span {
        font-size: 24px;
        margin-right: 10px;
      }

      p {
        margin-top: 10px;
        font-size: 14px;
        color: var(--text-color);
      }
    }
  }

  /* New styles for Skills-section */
  .skills-section {
    .skills {
      /* ... (your existing styles) */
      padding: 15px 20px;
      position: relative;
      border: 2px solid var(--primary-color);
      border-radius: 10px;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--primary-color);
      }

      span {
        font-size: 24px;
        margin-right: 10px;
      }

      p {
        margin-top: 10px;
        font-size: 14px;
        color: var(--text-color);
      }
    }

    /* Additional styles for skill cards */
    .skill-cards-container {
      /* ... (your existing styles) */
      overflow-x: auto;
      padding: 10px;
      margin-top: 15px;
    }

    .skill-card {
      /* ... (your existing styles) */
      min-width: 250px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

      .courses-card {
        /* ... (your existing styles) */
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  /* New styles for Others-section */
  .others-section {
    .other {
      /* ... (your existing styles) */
      padding: 15px 20px;
      position: relative;
      border: 2px solid var(--primary-color);
      border-radius: 10px;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--primary-color);
      }

      span {
        font-size: 24px;
        margin-right: 10px;
      }

      p {
        margin-top: 10px;
        font-size: 14px;
        color: var(--text-color);
      }
    }

    /* Additional styles for the form */
    div {
      margin-top: 15px;
      label {
        /* ... (your existing styles) */
        margin-bottom: 5px;
      }

      textarea {
        /* ... (your existing styles) */
        margin-bottom: 10px;
      }
    }
  }
  .clarify-others-container{
    border: 1px solid red;
    textarea{
      border: 1px solid var(--primary-color);
      min-width:300px;
      min-height:50px
    }
  }
`;
