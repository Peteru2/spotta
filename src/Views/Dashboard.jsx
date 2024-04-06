import Navbar from "../GeneralComponents/Navbar";

const Dashboard = () => {
    return ( 
        <>
        <Navbar />
                <div className="flex  md:px-[100px] w-full px-[50px] gap-[320px] items-center font-roboto">
                    <div className="w-[450px]">
                        <h2 className="text-[54px] font-bold ">Find a place you will love to live</h2>
                        <h2>See through the lenses of people who have
                            lived or visited the neighbourhood you might
                            have in mind.
                        </h2>
                    </div>
                    <div className="w-[506px] bg-white h-[500px] justify-between flex flex-wrap overflow-y-scroll mt-20 gap-[10px] scrollbar-style">
                        <div className=" border-[1px] border-gray-400 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur est magni minima quae aspernatur cumque distinctio fugiat non amet eligendi dolor sit perferendis nulla facilis corporis, modi commodi enim temporibus vel repellendus optio. Hic delectus numquam quas optio dolorum aliquid itaque! Perferendis veniam, consequatur quas incidunt doloribus ullam minima non magni dolorum ea dolores, nihil deleniti dolorem fugit, soluta repellat excepturi in! Debitis architecto non exercitationem quibusdam expedita mollitia dolor et deserunt, omnis ad consectetur nisi quidem unde voluptate.</div>
                        <div className="border-[1px]  border-gray-50 rounded">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, soluta enim nihil ipsa eligendi neque earum, voluptates sint facere accusantium laboriosam id nobis dolorem illo, aut dignissimos tempora veritatis voluptate deleniti pariatur. Voluptas, ullam eveniet recusandae provident quibusdam nesciunt officia impedit excepturi possimus omnis ratione quos. Doloribus tempore labore beatae laudantium atque maxime dolor. Accusamus quia illo repudiandae recusandae quae blanditiis ducimus enim aut, minima sequi earum itaque sint facilis iusto ratione alias magni praesentium! Repellendus quidem nobis nemo provident!</div>
                    </div>
                </div>
        </>
     );
}
 
export default Dashboard;