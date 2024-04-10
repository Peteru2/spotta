import { useState } from "react";
import { DownOutlined, StarOutlined } from '@ant-design/icons';

const ReviewForm = ({onClose, searchData, showMessage}) => {
  const [options, setOptions] = useState([]);
  const [other, setOther] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const isFormValid = options.length > 0 && other.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
   if(isFormValid){
        onClose()
        setOptions([])
        setOther("")
        showMessage()
   }
   
    console.log('Options:', options);
    console.log('Other:', other);
  };
  
  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setOptions([...options, value]);
    } else {
      setOptions(options.filter((option) => option !== value));
    }

  };

  const handleOtherChange = (e) => {
    setOther(e.target.value);
  };

  
  return ( 
    <div className="font-inter">
      <h2 className="Review Location text-center my-2 font-bold">Review Location</h2>
      <h2 className="font-bold">{searchData && searchData.address}</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mt-5 mb-3" htmlFor="options">Select options:</label>
        <div 
        
        className="relative inline-block text-left w-full ">
            <div 
            onClick={() => setShowOptions(!showOptions)}
            className="flex inline-flex  bg-blue-50 bg w-full rounded-md shadow-sm px-4 py-2">
          <button 
            type="button" 
            className=" relative  bg-transparent text-sm outline-none font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            
          >
            Select Amenities
          </button>
          <h2 className="ml-auto">
          <DownOutlined />
          </h2>
          </div>

          <div className="">
          {showOptions && (

            <div className="origin-top-right p-2 absolute overflow-y-scroll transition-all  w-full rounded-md shadow-lg bg-blue-50 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options">
              <div className="md:flex  text-sm">
                    <div>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" className="text-[30px]" value="option1" onChange={handleOptionChange} checked={options.includes('option1')} />
                 
                  <span>Parking Lot</span>
                </label>
                
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option2" onChange={handleOptionChange} checked={options.includes('option2')} />
                  
                  <span>Night Life</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option3" onChange={handleOptionChange} checked={options.includes('option3')} />
                  
                  <span>Hospitals</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox"  value="option4" onChange={handleOptionChange} checked={options.includes('option4')} />
                 
                  <span>Adult Home</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option5" onChange={handleOptionChange} checked={options.includes('option5')} />
                  
                  <span>Schools</span>
                </label>

               </div>
               
               <div className="mx-3">
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" className="text-[30px]" value="option6" onChange={handleOptionChange} checked={options.includes('option6')} />
                 
                  <span>Free-Wifi</span>
                </label>
                
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option7" onChange={handleOptionChange} checked={options.includes('option7')} />
                  
                  <span>Pet Store</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option8" onChange={handleOptionChange} checked={options.includes('option8')} />
                  
                  <span>Child Care</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox"  value="option9" onChange={handleOptionChange} checked={options.includes('option9')} />
                 
                  <span>Gym </span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option10" onChange={handleOptionChange} checked={options.includes('option10')} />
                  
                  <span>Security</span>
                </label>

               </div>
               <div className="mx-3">
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" className="text-[30px]" value="option11" onChange={handleOptionChange} checked={options.includes('option11')} />
                 
                  <span>Parking Lot</span>
                </label>
                
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option12" onChange={handleOptionChange} checked={options.includes('option12')} />
                  
                  <span>Night Life</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option13" onChange={handleOptionChange} checked={options.includes('option13')} />
                  
                  <span>Hospitals</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox"  value="option14" onChange={handleOptionChange} checked={options.includes('option14')} />
                 
                  <span>Adult Home</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option15" onChange={handleOptionChange} checked={options.includes('option15')} />
                  
                  <span>Schools</span>
                </label>

               </div>

               <div className="mx-3">
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" className="text-[30px]" value="option16" onChange={handleOptionChange} checked={options.includes('option16')} />
                 
                  <span>Free-Wifi</span>
                </label>
                
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option17" onChange={handleOptionChange} checked={options.includes('option17')} />
                  
                  <span>Pet Store</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option18" onChange={handleOptionChange} checked={options.includes('option18')} />
                  
                  <span>Child Care</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox"  value="option19" onChange={handleOptionChange} checked={options.includes('option19')} />
                 
                  <span>Gym </span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option20" onChange={handleOptionChange} checked={options.includes('option20')} />
                  
                  <span>Security</span>
                </label>

               </div> 
               <div className="mx-3">
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" className="text-[30px]" value="option21" onChange={handleOptionChange} checked={options.includes('option21')} />
                 
                  <span>Parking Lot</span>
                </label>
                
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option22" onChange={handleOptionChange} checked={options.includes('option22')} />
                  
                  <span>Night Life</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option23" onChange={handleOptionChange} checked={options.includes('option23')} />
                  
                  <span>Hospitals</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox"  value="option24" onChange={handleOptionChange} checked={options.includes('option24')} />
                 
                  <span>Adult Home</span>
                </label>
                <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" value="option25" onChange={handleOptionChange} checked={options.includes('option25')} />
                  
                  <span>Schools</span>
                </label>

               </div>
               
                
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
                <div className="my-3">
                        <h2 className="font-bold my-1">Rate Location</h2>
                        <div>
                            <StarOutlined  className="text-yellow-400 "/>
                           <StarOutlined  className="text-yellow-400 mx-2"/>
                           <StarOutlined  className="text-yellow-400 "/>
                           <StarOutlined  className="text-yellow-400 mx-2"/>
                           <StarOutlined  className="text-yellow-400 "/>
                        </div>
                </div>

                
        <div className="">
            <h2>Write Review</h2>
        <div onClick={() => setShowOptions(!showOptions)} className="border shadow-sm h-[180px] rounded-md">
          <input 
          placeholder= "Placeholder"
          type="text" id="other"  name="other" className="outline-none py-2 px-2 w-full h-full" value={other} onChange={handleOtherChange}/>
        </div>
        </div>

            <div className="flex my-3">
            <label className="flex items-center justify-start space-x-2">
                  <input type="checkbox" className="text-[30px]" value="anonymous" onChange={handleOptionChange}  />
                 
                  <span className="text-gray-400">Post as anonymous</span>
                </label>
            </div>


        <div className="flex w-full justify-between ">

       

        <button 
          type="submit" 
          disabled={!isFormValid} 
          className={ `text-white  mr-2 text-center w-full rounded-md py-2 ${isFormValid ? "bg-blue-400 cursor-pointer" : "bg-blue-400 cursor-not-allowed bg-opacity-40"}`}
        >
          Submit
        </button>
       

        
        <div onClick={()=> onClose()} className="cursor-pointer border w-full text-center ml-2 shadow-md py-2 rounded text-black">
        <button>Cancel</button>
        </div>

        </div>
      </form>
    </div>
  );
}
 
export default ReviewForm;
