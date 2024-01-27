import { useState } from 'react'
import { Homepage, AboutUsPage , OurWorkPage ,ContactUsPage  } from './Pages'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout , VolunteerPage,OpportunitiesPage} from './Pages/Dashboard';
import { ApplicationForm, NewRequest,EventApplicationForm } from './Components';
import { useGlobalContext } from './context';






function App() {
  const {auth,setAuth} = useGlobalContext();
/// main return
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<SharedLayout />}>
      {auth?.volunteerRole ?    <Route index element={ <VolunteerPage /> } /> :    <Route index element={ <Homepage /> } /> }
     <Route index element={ <Homepage /> } />
     <Route path="about" element={<AboutUsPage/>} />
     <Route path="volunteer" element={<VolunteerPage />} />
     <Route path="ourWork" element={<OurWorkPage/>} />
     <Route path="contactUs" element={<ContactUsPage />} />
     <Route path="opportunities" element={<OpportunitiesPage />} />
     <Route path="apply" element={<ApplicationForm />} />
     <Route path="request" element={<NewRequest />} />
     <Route path="event" element={<EventApplicationForm />} />
     </Route>
     </Routes>

    <ToastContainer position="top-center" />
  </BrowserRouter>
  )
}

export default App
