import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined, DeliveredProcedureOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import GFA_SignUps from "../SignUpComponents/GFA-SignUps";
import Navbar from "../GeneralComponents/Navbar";



const Login = () => {

const [icon, setIcon] = useState(false)
const [showPassword, setShowPassword] = useState(false)
const [isTyping, setIsTyping] = useState(false);
const navigate = useNavigate()

    const [formData, setFormData] = useState({
        
        email: '',
        password:'',
      
      });
    
      const [errors, setErrors] = useState({
       
        email: '',
        password:'',
       
      });
    
      const handleInputChange = (e) => {
        // e.preventDefault();       
       const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "password") {
            setIsTyping(value !== "");
        }

      };
      const handleSubmit = (e) =>{
            e.preventDefault();
      const newErrors = {};
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

            
                if (!formData.email.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }
                
                else if(!formData.password.trim()){
                    newErrors.password = 'Password is required';
                }
                else if(formData.password.length < 1){
                    newErrors.password = 'Password must not be less than 8 characters';
                }
               
               
                else {
                    
                        setFormData({
                            email: '',
                            password:'',
                        })
                          navigate("/")
                }
                setErrors(newErrors);
            if (Object.keys(newErrors).length === 0) {
                setErrors({});
            }
      }

      
      
    return ( 
                <>
               <Navbar />
                <div className="flex  mt-10 md:mt-0 justify-center  ">  
                    <section className=" bg-gray-50 items-center  w-[370px]  rounded-[10px] py-4 px-6 ">
                        <div>
                        <form onSubmit={handleSubmit}  className={`font-roboto  text-black`}>
                            <h2 className="text-center text-black mb-3 text-[20px]">Log In</h2>

                            

                            <div className="mb-4">  
                            
                            <div className={ `${errors.email? "border-red-500":"border-blue-200"} flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-3`}>
                               
                                <input type="Email" 
                                name="email"
                                placeholder="E-mail address"
                                value={formData.email} 
                                onChange={handleInputChange}
                                className="w-full bg-blue-50 outline-none text-black"/>
                                </div>
                                <label className="flex text-[14px]">
                            <span className={`text-red-500 text-[14px] ${errors.email? "blink-error":""}`}> {errors.email}</span>
                        </label> 
                            </div>



                            <div className="mb-4">  

                            
                            <div className={ `${errors.password? "border-red-500":"border-blue-200"} relative flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-3`}>
                            <div className="flex w-full">
                                <label className={`absolute top-2 left-3 transition-all ${isTyping || showPassword ? "text-gray-400 text-[10px] pb-1 -translate-y-2" : ""} text-gray-400`}>
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
                                    <EyeInvisibleOutlined  className="outline-none"/>
                                    // <EyeOffIcon className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <EyeOutlined className="outline-none"/>
                                    
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
                            <button  type="submit"  className="bg-blue-600 w-full border-[1px] mt-2  border-private hover:bg-opacity-90  text-white  py-2 px-3 rounded-md "> <span className="text-white">LOGIN</span> </button>  
                        </form>
                                    <GFA_SignUps />
                    </div>
                    </section>
                    </div>
                </>
     );
}
 
export default Login;