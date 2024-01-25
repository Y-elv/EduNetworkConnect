import { useState } from 'react'
import { Homepage, AboutUsPage } from './Pages'

import {BrowserRouter, Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout , VolunteerPage} from './Pages/Dashboard';



function App() {
/// main return
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<SharedLayout />}>
     <Route index element={ <Homepage /> } />
     <Route path="about" element={<AboutUsPage/>} />
     <Route path="volunteer" element={<VolunteerPage />} />
     </Route>
     </Routes>

    <ToastContainer position="top-center" />
  </BrowserRouter>
  )
}

export default App
