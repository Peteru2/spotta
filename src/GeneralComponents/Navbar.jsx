import { Link, useLocation } from "react-router-dom";
import navAvatar from "../assets/images/navAvatar.jfif"
const Navbar = () => {
    const location = useLocation()
    const isActive = location.pathname ==="/"
    return ( 
        
        <>
            <nav className="font-roboto">
                <div className="   md:px-[100px] px-[50px]  py-[16px] flex w-full">
                    <h2 className="flex items-center font-bold"><span className="tracking-[3px] text-[14px] ">SPOTTA</span><span className="bg-blue-500 text-center text-[8px] rounded-[2px] px-[6px] text-white">NG</span></h2>
                    <h2 className="ml-auto">

                        {isActive ? (
                                <>
                                 <div className="font-bold flex items-center">
                                        <h2 className="mr-1">Welcome!</h2><img className="w-[36px] h-[36px] rounded-full" src={navAvatar} alt="navAvatar" />
                                    </div> 
                                </>
                        ):(
                                <>
                                 <Link className="text-blue-500 text-[14px] tracker-wider outline-none">LOGIN</Link>  
                                </>
                        )}


                    </h2>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;