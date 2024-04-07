import DashData from "../DashboardComponents/data";
import { StarOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';

const ScrollableDiv = () => {
    return ( 
        <>
        <div className=" w-[600px] p-[1px] py-8 bg-gray-300 h-[550px] grid grid-cols-2  overflow-y-hidden overflow-y-scroll relative gap-[20px] scrollbar-style">
       
                   {DashData.map(data =>{
                       return(
                               <>
                                <div className="p-4  bg-white rounded-xl">
                               <div className="flex items-center  w-full text-sm">
                       <img className="w-[25px] h-[25px] rounded-full -mt-1 mr-1" src={data.img} alt="hero"/>
                       <div className="">
                           <h2>{data.name}.</h2>
                           <h2 className=" -mt-1 text-gray-400 text-[10px]">5 months ago</h2>
                       </div>
                       <div className="ml-auto">
                           <h2>Ikate, Lekki</h2>
                           <h2 className="-mt-1">
                           <StarOutlined  className="text-yellow-400 "/>
                           <StarOutlined  className="text-yellow-400 "/>
                           <StarOutlined  className="text-yellow-400 "/>
                           <StarOutlined  className="text-gray-400 "/>
                           <StarOutlined  className="text-gray-400 "/>

                           </h2>
                       </div>
                   </div>
                   <p className="text-[15px] my-2">
                   There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                   </p>
                   <div className="flex w-full text-xs mt-2">
                       <h2 className="text-gray-500"><LikeOutlined />{data.like}</h2>
                       <h2  className="text-gray-500 mx-2"> <DislikeOutlined />{data.dislike}</h2>
                       <h2  className="text-gray-500"> <CommentOutlined />{data.comment}</h2>
                  
                   
                   <h2 className={`ml-auto text-xs rounded-md px-1 text-black ${data.type === "power"? "bg-red-400": data.type==="network"? "bg-pink-200" : data.type==="traffic"? "bg-yellow-100": "bg-blue-400"}`}>{data.type}</h2>
                   </div>
                   <div className="sticky bottom-0 z-10 bg-gradient-to-t from-white via-white"></div>
                   </div>  
               
                               </>
                       )
                   })}
           </div>
        </>
     );
}
 
export default ScrollableDiv;