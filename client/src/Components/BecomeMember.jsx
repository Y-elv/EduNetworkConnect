import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RegistrationForm from './RegistrationForm';
import { useGlobalContext } from '../context';
import LoginForm from './LoginForm';


const BecomeMember = () => {
   /// global context
   const {showRegistrationForm, setShowRegistrationForm,showLoginForm,setShowLoginForm} = useGlobalContext();
    const [showOption, setShowOption] = useState(false);
    const [volunteerRole, setVolunteerRole] = useState('');


    //// handle handleVolunteerOnChange
    const handleVolunteerOnChange = (e) => {
      setVolunteerRole(e.target.value);
    };

    //////// testing 
    useEffect(()=>{
console.log("test",volunteerRole);
    },[volunteerRole])
  
    return (
      <Wrapper>
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
              <button className='yes-btn' onClick={()=>setShowRegistrationForm((prev)=>!prev)}  >Continue</button>
            </div>
          )}
          {/* volunteer registration form */}
       {showRegistrationForm && <RegistrationForm/>}  
        {/*show login form  */}
        {showLoginForm && <LoginForm/>}
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
    z-index: 1000; 
    .close-regi-form-btn{
        display:flex;
        justify-content:center;
        align-items:center
    }
    form{
        height:200px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        border:1px solid var(--primary-color);
        background-color:var(  --backgroundColor);
        padding:5px;
        gap:5px;
       
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
