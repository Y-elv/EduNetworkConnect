import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';



const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {

//////////////////////all state/////////////
const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//// state to track if the user has registered so that he can log in
const [showLoginForm,setShowLoginForm] = useState(false)

/////////////////////main return
  return (
    <GlobalContext.Provider value={{showRegistrationForm, setShowRegistrationForm,showLoginForm,setShowLoginForm}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;