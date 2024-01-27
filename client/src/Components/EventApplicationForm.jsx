import React from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';


const EventApplicationForm = () => {

    const handleScholarSubmit = (e)=>{
        e.preventDefault()
        toast.success("Thanks you for your interest we will get back to you shortly")
    }
  return (
    <Wrapper>
      <h3>Boot camp Application Form</h3>
      <form>
        <Label htmlFor="fullName">Full Name:</Label>
        <Input type="text" id="fullName" name="fullName" required />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="phoneNumber">Phone Number:</Label>
        <Input type="tel" id="phoneNumber" name="phoneNumber" required />

        <Label htmlFor="essay">Why do you deserve this opportunity? (Max 500 words)</Label>
        <TextArea id="essay" name="essay" rows="4" required></TextArea>

        <SubmitButton type="button" onClick={handleScholarSubmit} >Submit Application</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default EventApplicationForm;

const Wrapper = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color:var(--backgroundColor);
  margin:10px auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

