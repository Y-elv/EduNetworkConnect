import React,{useState} from 'react'
import { Header, Hero ,StripeForm} from '../../Components'
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../context';
import { BiSolidDollarCircle } from "react-icons/bi";
import styled from 'styled-components';


const VolunteerPage = () => {

  const [showPayment,setShowPayment] = useState(false)

  return (
    <Wrapper>
    <div>
    
   {/* message */}
   <div className='about-user-container' >
   <h3>Please tell us a little bit about your self</h3>
   <textarea></textarea>

<button className='yes-btn' >Submit</button>
   </div>
    
    {/* options to help */}
    <h3>Your support</h3>
    {/* Funds */}
    <div>
    <button className='yes-btn' onClick={()=>setShowPayment((prev)=>!prev)}  > <span><BiSolidDollarCircle /></span> Raise fund</button> <br/>
    <p> We are seeking $ 545 to cover school fees of 25 students</p>
    </div>
     {/* stripe form */}
     {
      showPayment &&  <div>

      <StripeForm/>
   
    </div>
     }

    {/* Skills */}
    <div>
    <input type="checkbox" name="" id="" /> {""}
    <button className='yes-btn' >Skills</button>
    </div>
    {/* Other */}
    <div>
    <input type="checkbox" name="" id="" /> {""}
    <button className='yes-btn'  >Other</button>
    </div>
    
    {/* continue */}
 
 <button className='yes-btn' >Continue</button>

         </div>
    </Wrapper>
  )
}

export default VolunteerPage


/////styles
const Wrapper = styled.section`
background-color:var(--backgroundColor);
margin-top:25px;
.about-user-container{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center
}
textarea{
  border: 1px solid black;
  min-width:300px;
  min-height:20px;
  max-width:400px;
  max-height:100px
}
  border:1px solid red
`