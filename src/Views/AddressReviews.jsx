import Reviews from "../AllReviewsComponent/Review";
// import Navbar from "../GeneralComponents/Navbar";
import ReviewNav from "../GeneralComponents/ReviewNav";
import { useState } from "react";
import Dashboard from "./Dashboard";

const AddressReviews = () => {
    const [searchData, setSearchData] = useState(null)

    const updateSearchData = (newData) => {
        setSearchData(newData);
    };

    return ( 
        <>
                    <ReviewNav  searchData={searchData} updateSearchData={updateSearchData}/>
                    {searchData?(<Reviews searchData={searchData} />):(<Dashboard />)}
                    
        </>
     );
}
 
export default AddressReviews;