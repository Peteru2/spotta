import { CloseOutlined, EyeInvisibleOutlined, DeliveredProcedureOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ConfirmPassword from './ConfirmPassword';

const ResetPassword = ({closeResend}) => {
    const [resetPassword, setResetPassword] = useState(false)
    const [formData, setFormData] = useState({
       email:'',
      });
    
      const [errors, setErrors] = useState({
        email:'',
      });
    
    
   const  handleCloseResetPassword = () =>{
    setResetPassword(false)
    closeResend()
   }
   const handleInputChange = (e) => {
    // e.preventDefault();       
   const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

  };
  const handleResetPassword = (e) =>{
    e.preventDefault()
    const newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        else{
        setResetPassword(true)
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
        }
}
    return ( 
        <div className="text-sm">
            <div className="flex w-full justify-center items-center my-2">
            <h2 className="text-center my-2 font-bold w-full">Reset Password</h2>
            <CloseOutlined fill=""  onClick={handleCloseResetPassword} className='ml-auto cursor-pointer text-blue-500'/>
            </div>
           <p className="">Please enter your valid email address</p>

<div className={`border-[1px] rounded-md p-3 ${errors.email? "border-red-400": ""}`}>
    <input 
    name='email'
    type="Email" 
    placeholder='E-mail address'
    onChange={handleInputChange}
    className="bg-transparent outline-none w-full" />
</div>
    <label className="flex text-[14px] ">
    <span className={`text-red-500 text-[14px] ${errors.email? "blink-error":""}`}> {errors.email}</span>
                        </label> 


    <button className="my-3 text-center bg-blue-500 rounded-md text-white p-2 w-full" onClick={handleResetPassword}>GET RECOVERY LINK</button>


<div className={ `modal w-[330px] md:w-[498px]  font-roboto ${resetPassword ? "modal-show":""}`}>
                            <div className='bg-white p-4 rounded-[6px] '>
                               
                                 <ConfirmPassword onClose={handleCloseResetPassword}/> 
                        </div>
                        </div> 
                        <div className={`${resetPassword?"overlay":""} `}></div>
        </div>
     );
}
 
export default ResetPassword;