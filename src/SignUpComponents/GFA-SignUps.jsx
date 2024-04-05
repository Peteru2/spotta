const GFA_SignUps = () => {
    return ( 
        <>
        <       div className="my-4 justify-center flex items-center">
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
                            <h2 className="text-sm text-center my-4">Already have an account? <span className="text-blue-500 font-bold">Log In</span></h2>
                        </div>
        </>
     );
}
 
export default GFA_SignUps;