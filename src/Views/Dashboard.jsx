import ScrollableDiv from "../DashboardComponents/SrollableDiv";

const Dashboard = () => {
    return ( 
        <>
                <div className="flex  md:px-[100px] w-full px-[50px] gap-[320px] items-center font-roboto">
                    <div className="w-[520px]">
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

                    <ScrollableDiv />
                </div>
        </>
     );
}
 
export default Dashboard;