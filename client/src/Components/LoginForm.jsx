import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { setShowRegistrationForm, setShowLoginForm } = useGlobalContext();

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully login`);
    console.log('login data', formData);
    navigate('/volunteer');
  };

  return (
    <FormContainer>
    <Form onSubmit={handleSubmit}>
      <CloseButton onClick={() => setShowLoginForm(false)}>
        <IoCloseSharp />
        <span style={{ color: 'var(--primary-color)', marginLeft: '5px' }}>Close</span>
      </CloseButton>

      <CenteredFormFields>
        <FormField>
          <InputLabel>Email:</InputLabel>
          <InputField type="email" name="email" value={formData.email} onChange={handleFormDataChange} placeholder="Enter your email" />
        </FormField>

        <FormField>
          <InputLabel>Password:</InputLabel>
          <InputField type="password" name="password" value={formData.password} onChange={handleFormDataChange} placeholder="Enter password" />
        </FormField>
      </CenteredFormFields>

      <SubmitContainer>
        <SubmitButton type="submit">Login</SubmitButton>
        <CreateAccountText>
          Don't have an account? <CreateAccountButton>Create Account</CreateAccountButton>
        </CreateAccountText>
      </SubmitContainer>
    </Form>
  </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  background-color: #000000c5;
  position: absolute;
  top: 0;
  height: 100%;
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
  align-items: center; /* Center the form horizontally */
  border: 1px solid var(--primary-color);
  background-color: var(--backgroundColor);
  padding: 5px;
  gap: 5px;
  position: relative; /* Add this line */
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  right: 10px; /* Adjust the right position as needed */
  display: flex;
  align-items: center;
  gap: 5px;
  

  &:hover {
    color: #fff;
  }
`;

const CenteredFormFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the form fields vertically */
  gap: 10px;
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
  width: 100%; /* Take up the full width of the parent container */
  border: 1px solid var(--primary-color);
  padding: 10px; /* Increased padding for better aesthetics */
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
  background-color: transparent;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
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
