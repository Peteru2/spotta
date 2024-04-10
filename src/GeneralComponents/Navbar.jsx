import { Link, useLocation } from "react-router-dom";
import navAvatar from "../assets/images/navAvatar.jfif"
import { BookOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useState } from "react";
import SearchData from "../AllReviewsComponent/data";
import ReviewForm from "../AllReviewsComponent/ReviewForm";


const Navbar = ({updateSearchData}) => {
    const location = useLocation()
    const isActive = location.pathname ==="/SignUp" || location.pathname ==="/Login" 
    const review = location.pathname === "/All-Reviews"
    const [isTyping, setIsTyping] = useState(false)
    const [showRevForm, setShowRevForm] = useState(false)

    const handleShowRevForm =() =>{
        setShowRevForm(true)
    }
    const handleCloseRevForm =() =>{
        setShowRevForm(false)
    }
    

    const [formData, setFormData] = useState({    
        search: '',
      
      });
    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setFormData({ ...formData, [name]: value });
        SearchData.forEach((data=>{
            if(value === data.address){
                console.log(typeof updateSearchData)
                updateSearchData(data);
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
    
    }
    return ( 
        
        <>
            <nav className={`${ review  ? "bg-blue-50":""} md:px-[100px] px-[30px]  py-[16px] font-roboto`}>
                <div className={`  flex w-full`}>
                    <h2 className="flex items-center font-bold mr-12"><span className="tracking-[3px] text-[14px] ">SPOTTA</span><span className="bg-blue-500 text-center text-[8px] rounded-[2px] px-[6px] pt-[2px] text-white ">NG</span></h2>
                 
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
                {isTyping && !isActive &&(
                    <>
                        <div className="mt-5 md:flex">
                            <h2 className="font-bold text-[20px] break-all"> {formData && formData.search} </h2>
                            <div className="flex ml-auto">
                                <button onClick={handleShowRevForm} className="bg-blue-500 text-white px-3 rounded">LEAVE A REVIEW</button>
                                <span className="border-[1px] border-blue-400 mx-3 p-2 px-3 rounded">
                                <BookOutlined className="text-blue-400"/>
                                </span>
                                <span className="border-[1px] border-blue-400 p-2 px-3 rounded">
                                <ShareAltOutlined className="text-blue-400"/>
                               
                                </span>
                            </div>
                        </div>
                    
                                <div className="flex flex-wrap items-center  text-xs mt-2">
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                </div>
                        </>
                )}
               
            </nav>

            <div className={ `modal w-[330px] md:w-[600px]  font-roboto ${showRevForm ? "modal-show":""}`}>
                <div className='bg-white p-4 rounded-[6px] '> 
                    <ReviewForm onClose={handleCloseRevForm} />
                </div>
                        </div> 
                    <div className={`${showRevForm?"overlay":""} `}></div>
     
        </>
     );
}
 
export default Navbar;