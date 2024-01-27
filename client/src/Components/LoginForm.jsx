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
     const {showRegistrationForm, setShowRegistrationForm, showLoginForm,setShowLoginForm, auth} = useGlobalContext();

     const disableLoginAndShowRegi = ()=>{
      setShowRegistrationForm(true)
      setShowLoginForm(false)
    }
  
  
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
       // check if email exist on local storage
       if(formData.email === auth.formData.email)
       {
        navigate("/volunteer")
        // console.log("current email",formData.email)
        // console.log("storage email",auth?.formData?.email)
        // console.log("storage data",auth)
        toast.success(`Welcome ${auth?.formData?.name}`)
       }
       else{
        // console.log("current email",formData.email)
        // console.log("storage email",auth.formData.email)
        // console.log("storage data",auth)
        toast.error("Invalid details")
       }
      //  toast.success(`Successfully login`)
       // console.log("login data",formData)
    
  
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
                   <div>Don't have an account? <button className='yes-btn' onClick={ disableLoginAndShowRegi} >Create Account</button></div>
                </div>

            </form>
        </div>
  )
}

export default LoginForm