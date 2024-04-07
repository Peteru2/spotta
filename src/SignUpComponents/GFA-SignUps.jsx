import { Link, useLocation } from "react-router-dom";
import google from "../assets/images/google.png"
import facebook from "../assets/images/facebook.png"
import apple from "../assets/images/apple.png"


const GFA_SignUps = () => {
    const location = useLocation()
    const isActive = location.pathname ==="/"
    return ( 
        <>
        <       div className="my-4 justify-center flex items-center">
                            <h2 className="w-[150px] h-[1px] bg-blue-200"></h2>
                            <h2 className="mx-2">Or</h2>
                            <h2 className="w-[150px] h-[1px] bg-blue-200"></h2>
                        </div>

                        <div>
                            <div className="w-full my-2 flex justify-center border-[1px] text-center border-gray-300 rounded-md py-1 px-2">
                            <img src={google} className="w-9 h-9 mr-2" alt="apple"/>
                                <button className=" text-center ">Sign Up with Google</button>
                            </div>
                            <div className="w-full my-2 flex justify-center border-[1px] text-center border-gray-300 rounded-md py-2 px-2 ">
                            <img src={facebook} className="w-7 h-7 mr-2" alt="apple"/>
                                <button className=" text-center ">Sign Up with Facebook</button>
                            </div>
                            <div className="w-full flex my-2 border-[1px] text-center justify-center border-gray-300 rounded-md py-2 px-2 ">
                                <img src={apple} className="w-7 h-7 mr-2" alt="apple"/>
                                <button className=" text-center ">Sign Up with Apple</button>
                            </div>
                            {location.pathname === "/SignUp"? (
                                <Link to={"/Login"}><h2 className="text-sm text-center my-4">Already have an account? <span className="text-blue-500 font-bold">Log In</span></h2></Link>
                            ): location.pathname === "/Login"? (
                                    <>
                                        <div className="text-sm text-center mt-6">
                                            <Link><h2 className="underline mb-2">Forgot your Passwword?</h2></Link>
                                            <Link to={"/SignUp"}><h2 className="text-sm text-center ">Don't have an account? <span className="text-blue-500 font-bold underline">Sign Up</span></h2></Link>
                                        </div>
                                    </>
                            ) :null }
                            
                        </div>
        </>
     );
}
 
export default GFA_SignUps;