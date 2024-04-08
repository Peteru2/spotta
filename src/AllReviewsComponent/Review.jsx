import { StarOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';
import navAvatar from "../assets/images/navAvatar.jfif"
const Reviews = () => {
    return ( 
        <>
        <div className="md:mx-[100px] mx-[50px] mt-[20px]">

<section className="grid md:grid-cols-6 grid-cols-1 gap-10 font-roboto ">

        <div className="md:col-span-4">
            <div className='border-b-[3px] border-gray-300 pb-4'>
            <div className="flex items-center w-full">
                <div className="flex items-center">
                        <img className="w-[30px] h-[30px] rounded-full" src={navAvatar} alt="avatar"/>
                        <h2 className="mx-2">James T.</h2>
                        <h2 className="text-gray-400">5 months ago</h2>
                </div>
                <h2 className="ml-auto">
                <StarOutlined  className="text-yellow-400 " /> 4.0
                </h2>
            </div>
            <div className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum provident velit nam iste perspiciatis non, quibusdam nihil consequatur cumque temporibus hic incidunt, enim, corporis nostrum qui sunt. Eum architecto, pariatur minus praesentium corporis sequi animi suscipit. Labore iusto laboriosam dicta dolorum sint incidunt ipsam officia laudantium, qui nobis! Omnis quidem nisi inventore voluptates doloribus dolores sunt facere optio asperiores, possimus, perspiciatis eum expedita sed ad sequi deleniti blanditiis! Esse reiciendis, ex repudiandae natus rem dolore perspiciatis repellat ducimus, velit porro id quos voluptatibus laudantium veritatis fugit nisi hic.</div>

            <div className="flex w-full  mt-2">
           <h2 className="text-indigo-900"><LikeOutlined /></h2>
           <h2  className="text-indigo-900 mx-2"> <DislikeOutlined /></h2>
           <h2  className="text-indigo-900"> <CommentOutlined /></h2>
            </div>

            
            </div>
            <div className="border-b-[3px] border-gray-300 py-4">
                <input 
                type='text'
                placeholder='Add a comment'
                className='outline-none bg-transparent text-black w-full'
                />
            </div>
        </div>
        <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
            <img src={navAvatar} atl="img" className="w-[150px] h-[150px] rounded-md "/>
            <img src={navAvatar} atl="img" className="w-[150px] h-[150px] rounded-md "/>
            <img src={navAvatar} atl="img" className="w-[150px] h-[150px] rounded-md "/>
            <img src={navAvatar} atl="img" className="w-[150px] h-[150px] rounded-md "/>
            </div>
        </div>
       
</section>
</div>
        </>
     );
}
 
export default Reviews;