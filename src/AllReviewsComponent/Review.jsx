import { StarOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';
import navAvatar from "../assets/images/navAvatar.jfif"
import img1 from "../assets/images/img1.jfif"
import img2 from "../assets/images/img2.jfif"
import img3 from "../assets/images/img3.jfif"
import img4 from "../assets/images/img4.jfif"


import { useState } from 'react';
const Reviews = () => {
const [showPostBtn, setShowPostBtn] = useState(false)

const handleShowPostBtn = () =>{
    setShowPostBtn(show => !show)
}
    return ( 
        <>
        <div className="md:mx-[100px] mx-[50px] mt-[20px]">

<section className="grid md:grid-cols-6 grid-cols-1 gap-10 font-inter ">

        <div className="md:col-span-4">
            <div className='border-b-[1px] border-gray-200 pb-4 my-2'>
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
           <h2 className="text-indigo-900 cursor-pointer"><LikeOutlined /></h2>
           <h2  className="text-indigo-900 mx-2 cursor-pointer"> <DislikeOutlined /></h2>
           <h2  onClick={handleShowPostBtn} className="text-indigo-900 cursor-pointer"> <CommentOutlined /></h2>
            </div>

            
            </div>
            <div className={` ${!showPostBtn? "hidden": ""} border-b-[1px] border-gray-200 flex py-4`}>
                <input 
                type='text'
                placeholder='Add a comment'
                className='outline-none bg-transparent text-black w-full'
                />
                <button className='bg-blue-400 px-3 py-1 rounded text-white'>Post</button>
            </div>

            

        </div>
        <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
            <img src={img1} atl="img" className="w-[190px] h-[190px] rounded-md "/>
            <img src={img2} atl="img" className="w-[190px] h-[190px] rounded-md "/>
            <img src={img3} atl="img" className="w-[190px] h-[190px] rounded-md "/>

            <div className="relative w-[190px] h-[190px] rounded-md overflow-hidden">
                <img src={img4} alt="img" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-80">
                    <span className="text-white  ">View More</span>
                </div>
            </div>

            </div>
        </div>
       
</section>
</div>
        </>
     );
}
 
export default Reviews;