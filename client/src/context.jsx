import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';



const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {

//////////////////////all state/////////////
    ////////auth state
    const [test,setTest] = useState("hello context")

/////////////////////main return
  return (
    <GlobalContext.Provider value={{test}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;