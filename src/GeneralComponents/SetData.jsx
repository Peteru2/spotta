import { useState } from "react";
import Navbar from "./Navbar";
import Reviews from "../AllReviewsComponent/Review";
const SetData= () => {
    const [searchData, setSearchData] = useState(null)

    const updateSearchData = (newData) => {
        setSearchData(newData);
    };


    return ( 
            <>
            <Navbar searchData={searchData} updateSearchData={updateSearchData}/>
            {/* <Reviews searchData={searchData}/> */}
            </>
     );
}
 
export default SetData;