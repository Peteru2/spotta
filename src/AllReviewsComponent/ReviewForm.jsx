import { useState } from "react";
import { DownOutlined, StarOutlined } from '@ant-design/icons';

const ReviewForm = ({onClose}) => {
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
      <h2 className="font-bold">OLatunji Peter Street</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mt-5 mb-3" htmlFor="options">Select options:</label>
        <div 
        
        className="relative inline-block text-left w-full ">
            <div 
            onClick={() => setShowOptions(!showOptions)}
            className="flex inline-flex  bg-blue-50 bg w-full rounded-md shadow-sm px-4 py-2">
          <button 
            type="button" 
            className="   bg-transparent text-sm outline-none font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            
          >
            Select Amenities
          </button>
          <h2 className="ml-auto">
          <DownOutlined />
          </h2>
          </div>

          <div className="relative">
          {showOptions && (

            <div className="origin-top-right p-2 absolute transition-all  w-full rounded-md shadow-lg bg-blue-50 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options">
              <div className="flex">
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
        <div className="border shadow-sm h-[180px] rounded-md">
          <input 
          placeholder= "Placeholder"
          type="text" id="other"  name="other" className="outline-none py-2 px-2 w-full" value={other} onChange={handleOtherChange}/>
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
