import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BecomeMember = () => {
    const [showOption, setShowOption] = useState(false);
    const [volunteerRole, setVolunteerRole] = useState('');
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  

    //// handle handleVolunteerOnChange
    const handleVolunteerOnChange = (e) => {
      setVolunteerRole(e.target.value);
    };

    //// registration form
    const RegistrationForm = ()=>{
        return <div className='registration-form' >
            <form>
                {/* full names */}
                <div className='form-field' >
            <label>Full names</label>
            <input type="text" name="" id="" placeholder='Enter your full names' />
                </div>
            {/* email */}
            <div className='form-field' >
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder='Enter your email' />
            </div>
               {/* Location */}
               <div className='form-field' >
                <label htmlFor="">Location</label>
                <input type="text" name="" id="" placeholder='Enter your Location' />
               </div>
               {/* password */}
               <div className='form-field' >
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" placeholder='Enter password' />
               </div>
               
                <div>
                    <button className='yes-btn' >Register</button>
                   <div>If Already have an account? <button className='yes-btn' >Login</button></div>
                </div>

            </form>
        </div>
    }



    //////// testing 
    useEffect(()=>{
console.log("test",volunteerRole);
    },[volunteerRole])
  
    return (
      <Wrapper>
        {/* registration form place*/}
        {
            !showRegistrationForm && <RegistrationForm/>
        }

        <div className='box'>
          <button className='yes-btn' onClick={() => setShowOption((prev) => !prev)}>
            Become a Volunteer
          </button>
          {!showOption && (
            <div className='volunteer-options-container'>
              <div>
                <label>Join as</label> <br />
                <div className=''>
                  {/* NGO */}
                  <div>
                    <input
                      type='radio'
                      name='volunteerRole'
                      value='ngo'
                      onChange={handleVolunteerOnChange}
                      checked={volunteerRole === 'ngo'}
                    />
                    <span>NGO</span>
                  </div>
                  {/* Individual */}
                  <div>
                    <input
                      type='radio'
                      name='volunteerRole'
                      value='individual'
                      onChange={handleVolunteerOnChange}
                      checked={volunteerRole === 'individual'}
                    />
                    <span>Individual</span>
                  </div>
                  {/* Other */}
                  <div>
                    <input
                      type='radio'
                      name='volunteerRole'
                      value='other'
                      onChange={handleVolunteerOnChange}
                      checked={volunteerRole === 'other'}
                    />
                    <span>Other</span>
                  </div>
                </div>
              </div>
              <button className='yes-btn' >Continue</button>
            </div>
          )}
        </div>
        <div className='box'>
          <button className='yes-btn'>Opportunities</button>
          <small>Check available opportunities</small>
        </div>
        <div className='box'>
          <button className='yes-btn'>Request support</button>
          <small>Raise a question</small>
        </div>
      </Wrapper>
    );
  };
  
export default BecomeMember;

const Wrapper = styled.section`
  margin-top: 25px;
  padding: 10px;
  background-color: var(--backgroundColor);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  .box {
    display: flex;
    flex-direction: column;
  }

  .volunteer-options-container {
    border: 1px solid var(--primary-color);
    margin-top: 5px;
  }
  .registration-form{
    background-color:#000000c5;
    position: absolute;
    top:0;
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    form{
        height:200px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border:1px solid var(--primary-color);
        background-color:var(  --backgroundColor);
        padding:5px;
        gap:5px
    }
    .form-field{
        display:flex;
        gap:5px;
        label{
            font-weight:600
        }
        input{
            border:1px solid var(--primary-color);
        padding:2px
        }
    }

  }
`;
