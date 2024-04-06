import Navbar from "../GeneralComponents/Navbar";

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
                    <div className="w-[506px] bg-white h-[550px] justify-between flex  overflow-y-scroll my-4 gap-[10px] scrollbar-style">
                        <div className="p-2 border-[1px] border-gray-400 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur est magni minima quae aspernatur cumque distinctio fugiat non amet eligendi dolor sit perferendis nulla facilis corporis, modi commodi enim temporibus vel repellendus optio. Hic delectus numquam quas optio dolorum aliquid itaque! Perferendis veniam, consequatur quas incidunt doloribus ullam minima non magni dolorum ea dolores, nihil deleniti dolorem fugit, soluta repellat excepturi in! Debitis architecto non exercitationem quibusdam expedita mollitia dolor et deserunt, omnis ad consectetur nisi quidem unde voluptate.</div>
                        <div className="p-2 border-[1px] border-gray-400 rounded-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, soluta enim nihil ipsa eligendi neque earum, voluptates sint facere accusantium laboriosam id nobis dolorem illo, aut dignissimos tempora veritatis voluptate deleniti pariatur. Voluptas, ullam eveniet recusandae provident quibusdam nesciunt officia impedit excepturi possimus omnis ratione quos. Doloribus tempore labore beatae laudantium atque maxime dolor. Accusamus quia illo repudiandae recusandae quae blanditiis ducimus enim aut, minima sequi earum itaque sint facilis iusto ratione alias magni praesentium! Repellendus quidem nobis nemo provident!</div>
                    </div>
                </div>
        </>
     );
}
 
export default Dashboard;