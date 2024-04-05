import { CloseOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Success from './Success';

const ConfirmPassword = ({onClose}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isTyping, setIsTyping] = useState(false);
    const [isConfTyping, setIsConfTyping] = useState(false);
    const [success, setShowSuccess] = useState(false)
    
    const [formData, setFormData] = useState({
        password:'',
        cpassword:''

      });
    
      const [errors, setErrors] = useState({
        
        password:'',
        cpassword:''
      });
    
      const handleInputChange = (e) => {
        // e.preventDefault();      
       const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "password") {
            setIsTyping(true);
            const newErrors = { ...errors };
            //  if (/^.*(?=.{8,})(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(value)) {
            //     newErrors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character';
            // } else {
            //     newErrors.password = ''; // Clear error message if password is valid
            // }
            // setErrors(newErrors);

        } else if (name === "cpassword") {
            setIsConfTyping(true);
        }

      };
      const handleSubmit = (e) =>{
        e.preventDefault();
  const newErrors = {};
            const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
                   
            if(!formData.password.trim()){
                newErrors.password = 'Password is required';
            }
           else if (!re.test(formData.password)) {
                newErrors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character';
            }
            else if(formData.cpassword !== formData.password){
                newErrors.cpassword = 'Password does not match';
                newErrors.password = 'Password does not match';
            }
           
            else {
                    setFormData({
                        password:'',
                        cpassword:''
                    })
                      setShowSuccess(true)
            }
            setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
        }
  }
  const handleCloseConfirmPass =() =>{
        setShowSuccess(false)
        onClose()
  }
    return ( 
        <div className="text-sm">
            <div className="flex w-full justify-center items-center my-2">
            <h2 className="text-blue-500 text-center my-2 font-bold">Reset Password</h2>
            <CloseOutlined fill=""  onClick={handleCloseConfirmPass} className='ml-auto cursor-pointer text-blue-500'/>
            </div>
           <p className="">Please, input your password</p>
<form onSubmit={handleSubmit}>
           <div className="mb-4">  

                            
<div className={ `${errors.password? "border-red-500":"border-blue-200"} relative flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-3`}>
<div className="flex w-full">
    <label className={`absolute top-2 left-3 transition-all ${isTyping || showPassword ? "text-gray-400 text-[10px] pb-2 -translate-y-2" : ""} text-gray-400`}>
Password
</label>
    <input type={`${showPassword? "text":"password"}`} 
   name="password"
   placeholder=""
   value={formData.password}
   onChange={handleInputChange}
   onFocus={() => setIsTyping(true)}
    onBlur={() => setIsTyping(formData.password.length > 0)}
   className="w-full bg-blue-50 outline-none text-black"  />

   {isTyping && (
        <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="ml-auto"
>
    {showPassword ? (
        <EyeInvisibleOutlined />
        // <EyeOffIcon className="w-5 h-5 text-gray-400" />
    ) : (
        <EyeOutlined />
        
        // <EyeIcon className="w-5 h-5 text-gray-400" />
    )}
    
     
</button>
   )}

</div>   

   </div>
   <label className="flex text-[14px] ">
<span className={`text-red-500 text-[14px] ${errors.password? "blink-error":""}`}> {errors.password}</span>
</label> 
</div>

<div className="mb-4">  

<div className={ `${errors.cpassword? "border-red-500":"border-blue-200"} relative flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-3`}>
<div className="flex w-full">

<label className={`absolute top-2 left-3 transition-all ${isConfTyping || showConfirmPassword ? "text-[10px] pb-1 -translate-y-2" : ""} text-gray-400`}>
                        Confirm Password
</label>

   <input type={`${showConfirmPassword?"text":"Password"}`} 
   name="cpassword"
   placeholder=""
   value={formData.cpassword}
   onChange={handleInputChange}
   onFocus={() => setIsConfTyping(true)}
   onBlur={() => setIsConfTyping(formData.cpassword.length > 0)}
   className="w-full bg-blue-50 outline-none text-black"  />
   {isConfTyping && (
    <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="ml-auto"
>
    {showConfirmPassword  ? (
        <EyeInvisibleOutlined />
        // <EyeOffIcon className="w-5 h-5 text-gray-400" />
    ) : (
        <EyeOutlined />
        
        // <EyeIcon className="w-5 h-5 text-gray-400" />
    )}
    
     
</button>
)}
</div>

   </div>
   <label className="flex text-[14px]">
<span className={`text-red-500 text-[14px] ${errors.cpassword? "blink-error":""}`}> {errors.cpassword}</span>
</label> 
</div>

<div className="my-3 text-center bg-blue-500 rounded-md text-white p-2 w-full">
    <button>RESET PASSWORD</button>
</div>
</form>
<div className={ `modal w-[330px] md:w-[498px]  font-roboto ${success ? "modal-show":""}`}>
                            <div className='bg-white p-4 rounded-[6px] '>
                               
                                 <Success onClose={handleCloseConfirmPass}/> 
                        </div>
                        </div> 
                         <div className={`${success ?"overlay":""} `}></div>
        </div>
     );
}
 
export default ConfirmPassword;