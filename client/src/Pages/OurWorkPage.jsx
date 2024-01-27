import useState  from 'react';
import styled from "styled-components";
import ourWork from "../../src/assets/images/ourWork.jpg";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';


const OurWorkPage = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Wrapper>
   <div className="first-sec">
    <div className="first-sec-left">Our <br/>Work</div>
    <div className="first-sec-right">
      <p>Our mission covers 120+ countries, addressing a crucial problem: many students pause education due to poverty. We strive for a world where every student can pursue education <br/>without financial barriers.</p>
    </div>
   </div>
   <div className="second-sec">
    <img src={ourWork}/>
   </div>
   <div className="third-sec">
   <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          backgroundColor:'var(--primary-color)' ,
       // Set background color to blu,
          color: 'white', // Set text color to white
          margin: '10px',
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Providing Financial Support for Students</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          One of the primary tasks of the Education Connect network is to offer financial support to students facing economic challenges. This support can include scholarships, grants, and other forms of financial assistance to cover tuition fees, living expenses, and educational materials.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
       sx={{
        backgroundColor:'var(--primary-color)' ,
     // Set background color to blu,
        color: 'white', 
        margin: '10px',
        
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Building a Global Learning Community</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Education Connect endeavors to create a global learning community by connecting students, educators, and institutions from diverse backgrounds. This involves facilitating online platforms, forums, and events where members can collaborate, share knowledge, and engage in educational discussions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
      sx={{
        backgroundColor:'var(--primary-color)' ,
     // Set background color to blu,
        color: 'white', 
        margin: '10px',
        
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
          Advocating for Educational Equality and Access
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Education Connect is committed to advocating for educational equality and access. This involves raising awareness about educational disparities, promoting policies that support inclusive education, and collaborating with governments and organizations to address systemic issues hindering equal access to quality education.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
   </div>
 </Wrapper>
 
  )
}

export default OurWorkPage 

///// styles
const Wrapper = styled.section`
display:flex;
flex-direction:column ;
gap:2rem;
  width:98%;
  .first-sec{
    display:flex;
    flex-direction:row;
    
    margin:35px 15px ;
    justify-content:space-between;
    align-item:center;
    


  }
  .first-sec-left{
    font-weight: bold;
    font-size: 3rem;
    font-family: Playfair Display, serif; 

  }
  .first-sec-right{
    font-size: 1.2rem;
    font-weight: lighter;
    width:60%;
    
    display: flex; 
  justify-content: center;
  align-items: center;

  }
  .second-sec {
    width:100%;
    height: 85vh;
    
    display:flex;
    justify-content: center;
  align-items: center;

  }
  .second-sec img{
    width:95vw;
    height: 80vh;
  }
  .third-sec{
    
    width:90vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    margin: auto;

  }

  .third-sec panel2-header{
    background-color: var(--primary-color);
  }
  .third-sec Accordion{
    border:1px solid red;
    width:80vw;
   
    
  }
`