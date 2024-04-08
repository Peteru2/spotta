import navAvatar from "../assets/images/navAvatar.jfif"
import Navbar from "../GeneralComponents/Navbar";
import { StarOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';


const AllReviews = () => {
    return ( 
        <>
        <Navbar />
        <div className="md:mx-[100px] mx-[50px] mt-[20px]">
            
            <section className="grid grid-cols-3 gap-4 font-roboto ">
                    <div className="col-span-2 ">
                        <div className="flex items-center w-full">
                            <div className="flex text-xs items-center">
                                    <img className="w-[30px] h-[30px] rounded-full" src={navAvatar} alt="avatar"/>
                                    <h2 className="mx-2">James T.</h2>
                                    <h2 className="text-gray-400">5 months ago</h2>
                            </div>
                            <h2 className="ml-auto">
                            <StarOutlined  className="text-yellow-400 " /> 4.0
                            </h2>
                        </div>
                    </div>
            </section>
        </div>
        </>
     );
}
 
export default AllReviews;