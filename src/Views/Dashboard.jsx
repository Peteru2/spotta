import Navbar from "../GeneralComponents/Navbar";

const Dashboard = () => {
    return ( 
        <>
        <Navbar />
                <div className="flex md:px-[100px] px-[50px] items-center font-roboto">
                    <div className="w-[400px]">
                        <h2 className="text-[54px] font-bold ">Find a place you will love to live</h2>
                        <h2>See through the lenses of people who have
                            lived or visited the neighbourhood you might
                            have in mind.
                        </h2>
                    </div>
                    <div className="w-[506px]  overflow-y">
                        
                    </div>
                </div>
        </>
     );
}
 
export default Dashboard;