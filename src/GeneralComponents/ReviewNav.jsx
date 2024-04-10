import { Link, useLocation } from "react-router-dom";
import navAvatar from "../assets/images/navAvatar.jfif"
import { SearchOutlined, CloseOutlined, BookOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useState } from "react";
import SearchData from "../AllReviewsComponent/data";
import ReviewForm from "../AllReviewsComponent/ReviewForm";
import { CheckCircleOutlined} from '@ant-design/icons';


const ReviewNav = ({searchData, updateSearchData}) => {
    const location = useLocation()
    const isActive = location.pathname ==="/SignUp" || location.pathname ==="/Login" 
    const [isTyping, setIsTyping] = useState(false)
    const [showRevForm, setShowRevForm] = useState(false)
const [message, setMessage] =useState(false)

   

    const handleShowRevForm =() =>{
        setShowRevForm(true)
    }
    const handleCloseRevForm =() =>{
        setShowRevForm(false)
    }
    
    const handleShowMessage =() =>{
        setMessage(true)
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    }

    const [formData, setFormData] = useState({    
        search: '',
      
      });
    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setFormData({ ...formData, [name]: value });
        // // SearchData.forEach((data=>{
        // //     if(value === data.address){
        // //         console.log(updateSearchData)
        // //         updateSearchData(data);
        // //         setstoreData(data)
        // //         console.log("Yeah")
        // // }
        // // else{
        // //     updateSearchData(null);
        // // }
        // })
        // )

        const foundData = SearchData.find(data => value === data.address);

        if (foundData) {
            updateSearchData(foundData);
            setstoreData(foundData);
            console.log("Yeah");
        } else {
            // If address is not found, clear the data
            updateSearchData(null);
        }

        if (value !== ""){
            setIsTyping(true)
        }
        else{
            setIsTyping(false)
            updateSearchData(null)
        }
    
    }
    const reviews = searchData && searchData === 0
    return ( 
        
        <>
            <nav className={`${isTyping ? "bg-blue-50":""} md:px-[100px] px-[30px]  py-[16px] font-roboto`}>
                <div className={`flex md:justify-left justify-between  w-full`}>
                    <h2 className="flex items-center font-bold md:mr-12"><span className="tracking-[3px] text-[14px] ">SPOTTA</span><span className="bg-blue-500 text-center text-[8px] rounded-[2px] px-[6px] pt-[2px] text-white ">NG</span></h2>
                    {!isActive && (
                    <div className="border-[1px] border-gray-200 mx-4 md:mx-0 py-2 px-2 items-center  flex rounded">
                    <SearchOutlined className="text-blue-500"/>
                        <input
                            type="text"
                            name="search"
                            value={formData.search}
                            onChange={handleInputChange}
                            className="outline-none bg-transparent xl:w-[900px] md:w-[350px] w-[50px] xs:w-[100px] px-2 "
                        />
                        <CloseOutlined onClick ={()=> setFormData({search:''})}className="text-blue-500 outline-none cursor-pointer"/>
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
                {searchData ?(
                    <>
                        <div className="mt-5 md:flex">
                            <div>
                            <h2 className="font-bold text-[20px] break-all"> {formData && formData.search} </h2>
                            {
                                reviews ? (<h2 className="font-bold  break-all"> "" Reviews </h2>):
                                (<h2 className="font-bold  break-all"> "{searchData.reviews.length}" Reviews  (People are raving about the selected location) </h2>)
                            }
                            
                            </div>
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
                        </>
                ):null}

                        {isTyping && !isActive &&(
                    <>

                                <div className="flex flex-wrap items-center  text-xs mt-2">
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>
                                <button className="bg-white border-2 rounded border-gray-2 mr-1 px-2 py-1">Schools</button>

                                </div>
                        </>
                )}
               
            </nav>

            <div className={ `modal w-[380px] md:w-[700px]  font-roboto ${showRevForm ? "modal-show":""}`}>
                <div className='bg-white p-4 rounded-[6px] '> 
                    <ReviewForm onClose={handleCloseRevForm} showMessage={handleShowMessage} showRevForm={handleShowRevForm}  searchData={searchData}/>
                </div>
                        </div> 
                    <div className={`${showRevForm?"overlay":""} `}></div>
     
                    <div className="justify-center flex ">
                    <h2 className={`border shadow-md rounded-md py-2 border-green-400 text-green-400 font-bold w-[400px] text-center message-enter ${message?"message-enter-active":""}`}>
                        <CheckCircleOutlined /> Review Submitted
                    </h2>
                </div>
        </>
     );
}
 
export default ReviewNav;