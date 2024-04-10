import SearchData from "./data";
import { SearchOutlined, CloseOutlined, StarOutlined } from '@ant-design/icons';




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
                    <div className='border-b-[1px] pb-4 xl:w-[864px]'>
                        <div className='flex items-center mt-3  '>
                        <h2 className="text-[24px] font-bold">{data.address}</h2>
                        <h2 className="text-sm ml-2 mt-1">
                        <StarOutlined className='text-yellow-400' /> <span className="text-gray-300">5.0</span>
                        </h2>
                        
                        </div>
                        
                        <h2 className='text-sm text-gray-700'>February 19th, 2024.</h2>
                        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto nam rerum sapiente veritatis. Odit obcaecati sapiente maiores? Culpa optio incidunt doloremque consectetur quas fugit nostrum quibusdam vitae accusantium deleniti assumenda eos enim aperiam perferendis, soluta voluptas. Cupiditate molestiae numquam, mollitia possimus voluptatibus a veniam eum aliquam odit, assumenda, corrupti ratione fugit? Nobis, facilis in? Dolore numquam beatae tenetur reiciendis, nulla magni recusandae suscipit porro, ullam aliquid saepe excepturi laudantium tempora dolorum quia, vero et quo inventore enim ipsa vitae?</p>
                    </div>
                            )
                        })}
                    
                </div>
        </>
     );
}
 
export default ShowAllreviews;