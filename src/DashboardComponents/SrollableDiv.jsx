import DashData from "../DashboardComponents/data";
import { StarOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';

const ScrollableDiv = () => {
    return ( 
        <>
      
        <div className="md:w-[600px] w-full p-[1px] py-8 bg-gray-200 relative h-[550px]   overflow-y-hidden hover:overflow-y-scroll">

         <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-white via-white" />
    
     <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white via-white" /> 
       <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px]">
                   {DashData.map(data =>{
                       return(
                               <>
                                <div className="p-4  bg-white bg-opacity-100 rounded-xl">
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
                       <h2 className="text-indigo-900"><LikeOutlined />{data.like}</h2>
                       <h2  className="text-indigo-900 mx-2"> <DislikeOutlined />{data.dislike}</h2>
                       <h2  className="text-indigo-900"> <CommentOutlined />{data.comment}</h2>
                  
                   
                   <h2 className={`ml-auto text-xs rounded-md px-1 text-black ${data.type === "power"? "bg-red-400": data.type==="network"? "bg-pink-200" : data.type==="traffic"? "bg-yellow-100": "bg-blue-300 border-[1px] border-blue-500"}`}>{data.type}</h2>
                   </div>
                   <div className="after:content-container"></div>
                   </div>  
               
                               </>
                       )
                   })}
           </div>
           </div> 
        </>
     );
}
 
export default ScrollableDiv;