import ScrollableDiv from "../DashboardComponents/SrollableDiv";
import { SearchOutlined} from '@ant-design/icons';


const Dashboard = () => {
    return ( 
        <>
                <div className="grid grid-cols-2  md:px-[100px] w-full px-[30px] gap-[110px] items-center font-roboto">
                    
                    <div className="md:w-[520px]">
                        <h2 className="md:text-[54px] text-[25px] word-break font-bold ">Find a place you will love to live!</h2>
                        <h2>See through the lenses of people who have
                            lived or visited the neighbourhood you might
                            have in mind.
                        </h2>
                        <div className="mt-8">
                            <div  className="shadow-md py-3 px-3 rounded-md border-gray-400 flex items-center md:w-full border">
                                <SearchOutlined className="text-gray-400 " />
                            <input 
                                type="email"
                                placeholder="Email Address"
                                className="outline-none md:w-full pl-2 bg-none bg-transparent"
                            />
                            </div>
                            <button className="bg-blue-500 px-4  my-4 text-white rounded-md py-2 text-sm">SEARCH</button>
                        </div>
                    </div>

                <div className="grid-cols-1">                    
                    <ScrollableDiv />
                </div>

                </div>
        </>
     );
}
 
export default Dashboard;