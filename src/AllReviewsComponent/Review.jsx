import { StarOutlined, LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';
import navAvatar from "../assets/images/navAvatar.jfif"
import svg from "../assets/svgs/notFoundSVG.svg"
import ReviewForm from './ReviewForm';

import { useState } from 'react';
const Reviews = ({searchData}) => {
const [showPostBtns, setShowPostBtns] = useState(Array(searchData && searchData.length).fill(false));
const [showRevForm, setShowRevForm] = useState(false)
   

    const handleShowRevForm =() =>{
        setShowRevForm(true)
    }
    const handleCloseRevForm =() =>{
        setShowRevForm(false)
    }
    const handleShowPostBtn = (index) => {
        const newShowPostBtns = [...showPostBtns];
        newShowPostBtns[index] = !newShowPostBtns[index];
        setShowPostBtns(newShowPostBtns);
    };
    const check = searchData && searchData.reviews.length === 0
    return ( 
        <>
        { !check ? (
        <div className="md:mx-[100px] mx-[50px] mt-[20px]">
                
<section className="grid md:grid-cols-6 grid-cols-1 gap-10 font-inter ">

        <div className="md:col-span-4">
            {searchData && searchData.reviews.map((data, index)=>{
                    return(
                        <>
            <div className='border-b-[1px] border-gray-200 pb-4 my-2'>
            <div className="flex items-center w-full">
                        <div className="flex items-center">

                            <img className="w-[30px] h-[30px] rounded-full" src={navAvatar} alt="avatar"/>
                            <h2 className="mx-2">{data.name}</h2>
                            <h2 className="text-gray-400">{data.month}</h2>
                            </div>
                  
                
                <h2 className="ml-auto">
                <StarOutlined  className="text-yellow-400 " /> 4.0
                </h2>
            </div>
            <div className="my-3">{data.description}</div>
           
            <div className="flex w-full  mt-2">
           <h2 className="text-indigo-900 cursor-pointer"><LikeOutlined /> {data.like}</h2>
           <h2  className="text-indigo-900 mx-2 cursor-pointer"> <DislikeOutlined />{data.dislike}</h2>
           <h2 onClick={() => handleShowPostBtn(index)} className="text-indigo-900 cursor-pointer"> <CommentOutlined /> {data.comment}</h2>
            </div>
            </div>

            <div className={` ${!showPostBtns[index]? "hidden": ""} border-b-[1px] border-gray-200 flex py-4`}>
                <input 
                type='text'
                placeholder='Add a comment'
                className='outline-none bg-transparent text-black w-full'
                />
                <button className='bg-blue-400 px-3 py-1 rounded text-white'>Post</button>
            </div>

            </>

)
})}

            
            

            

        </div>
       
                
               
                <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
            <img src={searchData&&searchData.imgs[0]} atl="img" className="w-[190px] h-[190px] rounded-md "/>

            <img src={searchData&&searchData.imgs[1]} atl="img" className="w-[190px] h-[190px] rounded-md "/>
            <img src={searchData&&searchData.imgs[2]} atl="img" className="w-[190px] h-[190px] rounded-md "/>

            <div className="relative cursor-pointer h-[190px] rounded-md overflow-hidden">
                <img src={searchData&&searchData.imgs[3]} alt="img" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-80">
                    <span className="text-white  ">View More</span>
                </div>
            </div>

            </div>
            </div>
           
        
       
</section>
</div>
):(
    <>
        <div className ="flex justify-center items-center mt-10">
            <div>
                <img src={svg} alt="svg"/>
                <div>
                    <h2 className="text-center my-3">Opps, No review Yet</h2>
                    <div onClick={handleShowRevForm} className="bg-blue-500 rounded-md py-2 mt-4 text-white flex justify-center ">
                        <button>LEAVE A REVIEW</button>
                    </div>
                </div>

             </div>
        </div>
    </>
)}

<div className={ `modal w-[380px] md:w-[700px]  font-roboto ${showRevForm ? "modal-show":""}`}>
                <div className='bg-white p-4 rounded-[6px] '> 
                    <ReviewForm onClose={handleCloseRevForm} searchData={searchData}/>
                </div>
                        </div> 
                    <div className={`${showRevForm?"overlay":""} `}></div>
        </>
     );
}
 
export default Reviews;