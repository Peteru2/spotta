import { Link, useLocation } from "react-router-dom";
import navAvatar from "../assets/images/navAvatar.jfif"
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from "react";
import SearchData from "../AllReviewsComponent/data";


const Navbar = () => {
    const location = useLocation()
    const isActive = location.pathname ==="/SignUp" || location.pathname ==="/Login" 
    const [searchData, setSearchData] = useState(null)

    const [formData, setFormData] = useState({    
        search: '',
      
      });
    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setFormData({ ...formData, [name]: value });
        SearchData.map((data=>{
            setSearchData(data)
        })
        )
        if(value !== searchData.name) {
            console.log("It is not working")
        }else{
            console.log("It is working")
        }
    }
    return ( 
        
        <>
            <nav className="font-roboto">
                <div className="   md:px-[100px] px-[50px]  py-[16px] flex w-full">
                    <h2 className="flex items-center font-bold mr-6"><span className="tracking-[3px] text-[14px] ">SPOTTA</span><span className="bg-blue-500 text-center text-[8px] rounded-[2px] px-[6px] text-white ">NG</span></h2>
                    {!isActive && (
                    <div className="border-[1px] border-gray-100 py-2 px-2 items-center  flex rounded">
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
            </nav>
        </>
     );
}
 
export default Navbar;