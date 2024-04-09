import Reviews from "../AllReviewsComponent/Review";
// import Navbar from "../GeneralComponents/Navbar";
import ReviewNav from "../GeneralComponents/ReviewNav";
import { useState } from "react";

const AllReviews = () => {
    const [searchData, setSearchData] = useState(null)

    const updateSearchData = (newData) => {
        setSearchData(newData);
    };

    return ( 
        <>
                    <ReviewNav  searchData={searchData} updateSearchData={updateSearchData}/>
                    <Reviews searchData={searchData} />
        </>
     );
}
 
export default AllReviews;