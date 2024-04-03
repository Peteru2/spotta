import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";


const SignUp = () => {

const [icon, setIcon] = useState(false)
const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username:'',
        email: '',
        password:'',
        cpassword:''

      });
    
      const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        username:'',
        email: '',
        password:'',
        cpassword:''
      });
    
      const handleInputChange = (e) => {
        // e.preventDefault();       
        
       const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) =>{
            e.preventDefault();
      const newErrors = {};
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

            if (formData.firstname.trim()  === '' ) {
            newErrors.firstname = 'First name is required';
            }
            else if(formData.lastname.trim()  === '' ){
                newErrors.lastname = ' Lastname is required';
            }
            else if(formData.username.trim()  === '' ){
                newErrors.username = ' Username is required';
            }
                else if (!formData.email.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }
                
                else if(!formData.password.trim()){
                    newErrors.password = 'Password is required';
                }
                else if(formData.password.length < 8){
                    newErrors.password = 'Password must not be less than 8 characters';
                }
                else if(formData.cpassword !== formData.password){
                    newErrors.cpassword = 'Password does not match';
                    newErrors.password = 'Password does not match';

                }
               
                else {
                    
                        setFormData({
                            firstname: '',
                            lastname:'',
                            username:'',
                            email: '',
                            password:'',
                            cpassword:''
                        })
                          
                }
                setErrors(newErrors);
            if (Object.keys(newErrors).length === 0) {
                setErrors({});
            }
      }

      
     
    return ( 
                <>
                <div className="flex h-screen justify-center items-center ">  
                    <section className=" bg-white items-center bg-opacity-70 rounded-[10px] py-3 px-6 ">
                        <div>
                        <form onSubmit={handleSubmit}  className={`font-roboto w-[400px] text-black`}>
                            <h2 className="text-center text-black my-2 text-[20px]">Sign Up</h2>

                            <div className="flex gap-x-4 mb-4">
                        <div className="">  
                        
                         
                        <div className={ `${errors.firstname? "border-red-500":"border-blue-200"} flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-2`}>
                               
                                <input type="text" className="w-full bg-blue-50 outline-none text-black-300"
                                placeholder="Firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                />
                                </div>
                                <label className="flex text-[14px]">
                                    <span className={`text-red-500 text-[14px] ${errors.firstname? "blink-error":""}`}> {errors.firstname}</span>
                        </label>
                            </div>

                            <div className="">                    
                            <div className={ `${errors.lastname? "border-red-500":"border-blue-200"} flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-2`}>
                                <input type="text" className="w-full bg-blue-50 outline-none text-black"
                                name="lastname"
                                placeholder="Lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                />
                                </div>
                                <label className="flex text-[14px]">
                            <span className={`text-red-500 text-[14px] ${errors.lastname? "blink-error":""}`}> {errors.lastname}</span>
                        </label> 
                            </div>
                           
                            </div>

                            <div className="mb-4">                    
                            <div className={ `${errors.username? "border-red-500":"border-blue-200"} flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-2`}>
                                <input type="text" className="w-full bg-blue-50 outline-none text-black"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleInputChange}
                                />
                                </div>
                                <label className="flex text-[14px]">
                            <span className={`text-red-500 text-[14px] ${errors.username? "blink-error":""}`}> {errors.username}</span>
                        </label> 
                            </div>

                            <div className="mb-4">  
                            
                            <div className={ `${errors.email? "border-red-500":"border-blue-200"} flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-2`}>
                               
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

                            
                            <div className={ `${errors.password? "border-red-500":"border-blue-200"} flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-2`}>
                            <div className="flex w-full">
                                <input type={`${showPassword? "text":"password"}`} 
                               name="password"
                               placeholder="Password"
                               value={formData.password}
                               onChange={handleInputChange}
                               className="w-full bg-blue-50 outline-none text-black"  />
                                    <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="ml-auto"
                            >
                                {showPassword ? (
                                    <EyeOutlined />
                                    // <EyeOffIcon className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <EyeInvisibleOutlined />
                                    // <EyeIcon className="w-5 h-5 text-gray-400" />
                                )}
                                
                                 
                            </button>
                               
                            </div>   

                               </div>
                               <label className="flex text-[14px] ">
                            <span className={`text-red-500 text-[14px] ${errors.password? "blink-error":""}`}> {errors.password}</span>
                        </label> 
                            </div>

                            <div className="mb-4">  
                            
                        <div className={ `${errors.cpassword? "border-red-500":"border-blue-200"} flex items-center bg-blue-50 border  rounded-[5px] mt-1 px-3  py-2`}>
                               
                               <input type="text" 
                               name="cpassword"
                               placeholder="Confirm Password"
                               value={formData.cpassword}
                               onChange={handleInputChange}
                               className="w-full bg-blue-50 outline-none text-black"  />
                               </div>
                               <label className="flex text-[14px]">
                            <span className={`text-red-500 text-[14px] ${errors.cpassword? "blink-error":""}`}> {errors.cpassword}</span>
                        </label> 
                            </div>

                            <button  type="submit"  className="bg-blue-600 w-full border-[1px] mt-2  border-private hover:bg-opacity-90  text-white  py-2 px-3 rounded-md "> <span className="text-white">SIGN UP</span> </button>
                                
                        </form>
                    
                  
                        <div className="my-4 justify-center flex items-center">
                            <h2 className="w-[150px] h-[1px] bg-gray-400"></h2>
                            <h2 className="mx-2">Or</h2>
                            <h2 className="w-[150px] h-[1px] bg-gray-400"></h2>
                        </div>

                        <div>
                            <div className="w-full my-2 border-[1px] text-center border-gray-300 rounded-md py-2 px-2">
                                <button className=" text-center ">Sign Up with Google</button>
                            </div>
                            <div className="w-full my-2 border-[1px] text-center border-gray-300 rounded-md py-2 px-2 ">
                                <button className=" text-center ">Sign Up with Facebook</button>
                            </div>
                            <div className="w-full my-2 border-[1px] text-center border-gray-300 rounded-md py-2 px-2 ">
                                <button className=" text-center ">Sign Up with Apple</button>
                            </div>
                        </div>


                    </div>
                    </section>
           
                    </div>
                   
                    
                </>
     );
}
 
export default SignUp;