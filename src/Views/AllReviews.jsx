import navAvatar from "../assets/images/navAvatar.jfif"
import Navbar from "../GeneralComponents/Navbar";

const AllReviews = () => {
    return ( 
        <>
        <Navbar />
        <div>
            
            <section className="grid grid-cols-3 gap-4 font-roboto ">
                    <div className="cols-span-3 ">
                        <div className="flex">
                            <div className="flex text-xs">
                                    <img className="w-[30px] h-[30px] rounded-full" src={navAvatar} alt="avatar"/>
                                    <h2>James T.</h2>
                                    <h2 className="text-gray-200">5 months ago</h2>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
        </>
     );
}
 
export default AllReviews;