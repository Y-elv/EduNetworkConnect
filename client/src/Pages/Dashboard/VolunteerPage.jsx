// VolunteerPage.jsx
import React, { useState } from 'react';
import { BiSolidDollarCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { Header, Hero, StripeForm } from '../../Components';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../context';

const VolunteerPage = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

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

        {/* Raise Fund */}
        <div>
          <button className='yes-btn raise-fund' onClick={() => setShowPayment((prev) => !prev)}>
            <span><BiSolidDollarCircle /></span> Raise Fund
          </button>
          <p>We are seeking $545 to cover school fees for 25 students</p>
        </div>

        {/* Stripe Form */}
        {showPayment && (
          <div>
            <StripeForm />
          </div>
        )}

        {/* Skills */}
        <div>
          <button className='yes-btn skills' onClick={() => setShowSkills((prev) => !prev)}>
            Skills
          </button>
          <p>Help education seekers by sharing your skills with them</p>

          {/* Display type of skills */}
          {showSkills && (
            <div>
              <ul>
                <h4>Science</h4>
                <li>Biology</li>
                <li>Chemistry</li>
              </ul>
              <ul>
                <h4>Computer</h4>
                <li>Programming</li>
                <li>Robotics</li>
              </ul>
            </div>
          )}
        </div>

        {/* Other */}
        <div>
          <button className='yes-btn other' onClick={() => setShowOthers((prev) => !prev)}>
            Other
          </button>

          {/* Show other section */}
          {showOthers && (
            <div>
              <label>Please specify any other support you would like to offer</label>
              <textarea placeholder='Enter your message...'></textarea>
              <button className='submit-btn'>Submit</button>
            </div>
          )}
        </div>

        {/* Continue */}
        <button className='yes-btn continue'>Continue</button>
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

  h3 {
    margin-top: 20px;
  }

  div > div,
  div > button {
    margin-top: 10px;
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
  .other,
  .continue {
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;
