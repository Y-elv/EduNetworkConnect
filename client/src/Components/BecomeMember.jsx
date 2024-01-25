import React, { useState } from 'react'
import styled from "styled-components";


const BecomeMember = () => {

    /// states to keep ideas
    const [showOption,setShowOption] = useState(false)
    

/// main return
  return (
    <Wrapper>
        {/* volunteer */}
        <div  className='box'  >
           <button className='yes-btn' >Become a Volunteer</button> 
          { showOption && <div>
               <select name="volunteer" id="">
                <option value="ngo">--Select your category--</option>
                <option value="ngo">NGO</option>
                <option value="tutor">Individual</option>
               </select>
          </div>
            
          } 
        </div>
        {/* Available opportunities by us */}
        <div className='box' >
           <button className='yes-btn' >Opportunities</button> 
           <small>Check available opportunities</small>
        </div>
        {/* become volunteer */}
        <div className='box' >
        <button className='yes-btn' >Request support</button> 
           <small>Raise a question</small>
        </div>
    </Wrapper>
  )
}

export default BecomeMember


/////////// styles
const Wrapper = styled.section`
margin-top:25px;
padding:10px;
   background-color:var( --backgroundColor);
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:5px;
    .box{
        display:flex;
        flex-direction:column;
    }
`