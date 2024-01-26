import React,{useState} from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useGlobalContext } from '../context';
import { Link,useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    //// login form data
    const [formData, setFormData,] = useState({
        email:"",
        password:"",
    });
     /// global context
     const {showRegistrationForm, setShowRegistrationForm, showLoginForm,setShowLoginForm} = useGlobalContext();

  
  
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
        toast.success(`Successfully login`)
        console.log("login data",formData)
        navigate("/volunteer")
  
      }
  return (
    <div className='registration-form' >
            <form onSubmit={handleSubmit} >
            <button className='no-btn close-regi-form-btn '  onClick={()=>setShowLoginForm(false)} > <i><IoCloseSharp/></i>  <span>Close</span>  </button>
            {/* email */}
            <div className='form-field' >
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleFormDataChange}  id="" placeholder='Enter your email' />
            </div>
              
               {/* password */}
               <div className='form-field' >
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleFormDataChange}  id="" placeholder='Enter password' />
               </div>
               
                <div>
                    <button className='yes-btn' type='submit'  >Login</button>
                   <div>Don't have an account? <button className='yes-btn' >Create Account</button></div>
                </div>

            </form>
        </div>
  )
}

export default LoginForm