import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useGlobalContext } from '../context';
import styled from 'styled-components';

const RegistrationForm = () => {
  const { showRegistrationForm, setShowRegistrationForm, setShowLoginForm } = useGlobalContext();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
    location: ""
  });

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`${formData?.name}, Account successfully created`);
    console.log("final data", formData);

    setShowRegistrationForm(false);
    setShowLoginForm(true);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
         <CloseButton onClick={() => setShowRegistrationForm(false)}>
          <IoCloseSharp />
          <span style={{ color: 'var(--primary-color)', marginLeft: '5px' }}>Close</span>
        </CloseButton>

        <FormField>
          <InputLabel>Full names:</InputLabel>
          <InputField type="text" name="name" value={formData.name} onChange={handleFormDataChange} placeholder='Enter your full names' />
        </FormField>

        <FormField>
          <InputLabel>Email:</InputLabel>
          <InputField type="email" name="email" value={formData.email} onChange={handleFormDataChange} placeholder='Enter your email' />
        </FormField>

        <FormField>
          <InputLabel>Location:</InputLabel>
          <InputField type="text" name="location" value={formData.location} onChange={handleFormDataChange} placeholder='Enter your Location' />
        </FormField>

        <FormField>
          <InputLabel>Password:</InputLabel>
          <InputField type="password" name="password" value={formData.password} onChange={handleFormDataChange} placeholder='Enter password' />
        </FormField>

        <SubmitContainer>
          <SubmitButton type='submit'>Register</SubmitButton>
          <CreateAccountText>If Already have an account? <CreateAccountButton>Login</CreateAccountButton></CreateAccountText>
        </SubmitContainer>
      </Form>
    </FormContainer>
  );
}

export default RegistrationForm;

const FormContainer = styled.div`
  background-color: #000000c5;
  position: absolute;
  top: 0;
  height: 120vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Form = styled.form`
  display: flex;
  height: 60%;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-color);
  background-color: var(--backgroundColor);
  padding: 5px;
  gap: 5px;
  position: relative;
`;

const CloseButton = styled.button`
  background-color:white;
  color: var(--primary-color);
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 10px;
  right: -320px;  // Adjusted the right position to 10px
  display: flex;
  align-items: center;
  gap: 5px;
  position:relative;


`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputLabel = styled.label`
  font-weight: 600;
  font-size: 1em;
`;

const InputField = styled.input`
  width: 100%;
  border: 1px solid var(--primary-color);
  padding: 10px;
`;

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid var(--primary-color);
  background-color:var(--primary-color);
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;


`;

const CreateAccountText = styled.div`
  margin-top: 10px;
  font-size: 1em;
  font-weight: bold;
`;

const CreateAccountButton = styled.button`
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;
