import { Link, useLocation } from "react-router-dom";
import navAvatar from "../assets/images/navAvatar.jfif"
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from "react";
import SearchData from "../AllReviewsComponent/data";


const Navbar = () => {
    const location = useLocation()
    const isActive = location.pathname ==="/SignUp" || location.pathname ==="/Login" 
    const [searchData, setSearchData] = useState(null)
    const [isTyping, setIsTyping] = useState(false)

    const [formData, setFormData] = useState({    
        search: '',
      
      });
    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setFormData({ ...formData, [name]: value });
        SearchData.forEach((data=>{
            if(value === data.address){
            setSearchData(data)
            console.log("Yeah")
        }
        })
        )
        if (value !== ""){
            setIsTyping(true)
        }
        else{
            setIsTyping(false)
        }
        if(value !== searchData.address) {
            console.log("It is not working" + searchData.address)
        }else{
            console.log("It is working")
        }
    }
    return ( 
        
        <>
            <nav className={`${isTyping ? "bg-blue-50":""} md:px-[100px] px-[50px]  py-[16px] font-roboto`}>
                <div className={`  flex w-full`}>
                    <h2 className="flex items-center font-bold mr-6"><span className="tracking-[3px] text-[14px] ">SPOTTA</span><span className="bg-blue-500 text-center text-[8px] rounded-[2px] px-[6px] text-white ">NG</span></h2>
                    {!isActive && (
                    <div className="border-[1px] border-gray-200 py-2 px-2 items-center  flex rounded">
                    <SearchOutlined className="text-blue-500"/>
                        <input
                            type="text"
                            name="search"
                            value={formData.search}
                            onChange={handleInputChange}
                            className="outline-none bg-transparent w-[550px] px-2 "
                        />
                        <CloseOutlined className="text-blue-500 cursor-pointer"/>
                    </div>)}
                    <h2 className="ml-auto">
                        {isActive ? (
                                <>
                                 <Link to={"/Login"} className="text-blue-500 text-[14px] tracker-wider outline-none">LOGIN</Link>  
                                  
                                </>

                        ):(
                                <>
    
                                <div className="font-bold flex items-center">
                                        <h2 className="mr-1">Welcome!</h2><img className="w-[36px] h-[36px] rounded-full" src={navAvatar} alt="navAvatar" />
                                    </div>
                                </>

                        )}
                            </h2>

                              
                </div>
                <div className="mt-5">
                     <h2 className="font-bold text-[20px]"> {formData && formData.search} {searchData && searchData.month}</h2>
                </div>
                <div className="flex flex-wrap items-center  text-xs mt-2">
                            <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                            
                           

                            
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;