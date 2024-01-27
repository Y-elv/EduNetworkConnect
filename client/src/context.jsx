import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "./utils/localStorage";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
 ////////auth state
 const [auth,setAuth] = useState(getUserFromLocalStorage())
 ///volunteer
 const [volunteerRole, setVolunteerRole] = useState('');
//////////////////////all state/////////////
const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//// state to track if the user has registered so that he can log in
const [showLoginForm,setShowLoginForm] = useState(false)

//// getting date of user
useEffect(()=>{
setAuth(getUserFromLocalStorage())
},[])
useEffect(()=>{
setAuth(getUserFromLocalStorage())
},[showRegistrationForm])
/// testing
useEffect(()=>{
  console.log("here is auth",auth)
},[auth])
/////////////////////main return
  return (
    <GlobalContext.Provider value={{showRegistrationForm, volunteerRole, setVolunteerRole,setShowRegistrationForm,showLoginForm,setShowLoginForm,auth,setAuth}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;