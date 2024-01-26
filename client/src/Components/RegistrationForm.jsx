import React ,{useState}from 'react'
import { IoCloseSharp } from "react-icons/io5";


const RegistrationForm = () => {

    //// registration form data
    const [formData, setFormData,] = useState({
      name:"",
      role:"",
      email:"",
      password:"",
      location:""
  });


    /// handle handleForm data change
    const handleFormDataChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    /// handle submit
    const handleSubmit = (e)=>{
      e.preventDefault()
      /// handle submit
      console.log("final data",formData)
    }

  return (
    <div className='registration-form' >
            <form onSubmit={handleSubmit} >
            <button className='no-btn close-regi-form-btn '  onClick={()=>setShowRegistrationForm((prev)=>!prev)} > <i><IoCloseSharp/></i>  <span>Close</span>  </button>
                {/* full names */}
                <div className='form-field' >
            <label>Full names</label>
            <input type="text" name="name" value={formData.name} onChange={handleFormDataChange}  id="" placeholder='Enter your full names' />
                </div>
            {/* email */}
            <div className='form-field' >
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleFormDataChange}  id="" placeholder='Enter your email' />
            </div>
               {/* Location */}
               <div className='form-field' >
                <label htmlFor="">Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleFormDataChange}  id="" placeholder='Enter your Location' />
               </div>
               {/* password */}
               <div className='form-field' >
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleFormDataChange}  id="" placeholder='Enter password' />
               </div>
               
                <div>
                    <button className='yes-btn' type='submit'  >Register</button>
                   <div>If Already have an account? <button className='yes-btn' >Login</button></div>
                </div>

            </form>
        </div>
  )
}

export default RegistrationForm