import SearchData from "./data";
import { SearchOutlined, CloseOutlined, StarOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';


const ShowAllreviews = () => {
    return ( 
        <>
                <div className=" pt-14 px-10 font-inter">
                    <h2 className="text-[20px]">All Reviews Creadted</h2>
                    <form className='flex mt-2'>
                    <div className="border-[1px] border-gray-200 mx-4 md:mx-0 py-3 px-3 items-center  flex rounded">
                    <SearchOutlined className="text-blue-500"/>
                        <input
                            type="text"
                            name="search"
                            // value={formData.search}
                            // onChange={handleInputChange}
                            className="outline-none bg-transparent xl:w-[700px] md:w-[300px] w-[50px] xs:w-[100px] px-3 "
                        />
                        <CloseOutlined className="text-blue-500 outline-none cursor-pointer"/>
                        {/* onClick ={()=> setFormData({search:''}) */}
                    </div>
                    <button className='bg-blue-500 text-white rounded-md text-center ml-2 w-[100px]'>Search</button>
                    </form>
                        {SearchData.map((data)=>{

                            return(
                                <>                                
                                {data.reviews.map((data)=>{
                                    return(
<                   div className='border-b-[1px] pb-4 xl:w-[864px]'>
                    <div className="w-full flex items-center ">
                        <div className='flex items-center mt-3  '>
                        <h2 className="text-[24px] font-bold">{data.address}</h2>
                        <h2 className="text-sm ml-2 mt-1">
                        <StarOutlined className='text-yellow-400' /> <span className="text-gray-300">5.0</span>
                        </h2>
                        </div>

                        <div className="flex ml-auto">
                            <span className="border shadow px-1">
                            <EditOutlined  className="text-blue-400"/>
                            
                            </span >      
                                <span className="border shadow px-1 ml-2"><DeleteOutlined className="text-red-400"/></span>
                        </div>
                        </div>
                        <h2 className='text-sm text-gray-700'>February 19th, 2024.</h2>
                        <p className='my-2'>{data.description}</p>
                    </div>
                                    )
                                })}
                    
                    </>
                            )
                        })}
                    
                </div>
        </>
     );
}
 
export default ShowAllreviews;