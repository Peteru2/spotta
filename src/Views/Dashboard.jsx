import Navbar from "../GeneralComponents/Navbar";
import { StarOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';
import DashData from "../DashboardComponents/data";
import heroImg from "../assets/images/heroImg.jfif"

const Dashboard = () => {
    return ( 
        <>
        <Navbar />
                <div className="flex  md:px-[100px] w-full px-[50px] gap-[320px] items-center font-roboto">
                    <div className="w-[440px]">
                        <h2 className="text-[54px] font-bold ">Find a place you will love to live!</h2>
                        <h2>See through the lenses of people who have
                            lived or visited the neighbourhood you might
                            have in mind.
                        </h2>

                        <div className="mt-8">
                            <div  className="border-[1px] py-1 px-2 rounded border-gray-400 w-full border">
                            <input 
                                type="email"
                                placeholder="Email Address"
                                className="outline-none w-full bg-none bg-transparent"
                            />
                            </div>
                            <button className="bg-blue-500 px-4  my-4 text-white rounded-md py-2 text-sm">SEARCH</button>
                        </div>
                    </div>
                    <div className="relative w-[600px] p-[1px] py-8 bg-gray-300 h-[550px] grid grid-cols-2  hover:overflow-y-scroll my-4 gap-[20px] scrollbar-style">
                                 <div className="fixed  top-0 left-0 right-0 w-full h-20 bg-gradient-to-b from-white via-white z-10" />
                                {/* Add bottom fade */}
                                <div className="fixed  bottom-0 left-0 right-0 w-full h-20 bg-gradient-to-t from-white via-white z-10" />
                                {/* Your content */}
                            {DashData.map(data =>{
                                return(
                                        <>
                                         <div className="p-4 h-[280px] bg-white rounded-xl">
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
                            </div>  
                        
                                        </>
                                )
                            })}
                    </div>
                </div>
        </>
     );
}
 
export default Dashboard;