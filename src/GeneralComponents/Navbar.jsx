import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <>
            <nav className="font-roboto">
                <div className="  bg-blue-50 md:px-[100px] px-[50px]  py-[16px] flex w-full">
                    <h2 className="flex items-center font-bold"><span className="tracking-[3px] text-[14px] ">SPOTTA</span><span className="bg-blue-500 text-center text-[8px] rounded-[2px] px-[6px] text-white">NG</span></h2>
                    <h2 className="ml-auto">
                        <Link className="text-blue-500 text-[14px] tracker-wider outline-none">LOGIN</Link>
                        <img></img>
                    </h2>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;