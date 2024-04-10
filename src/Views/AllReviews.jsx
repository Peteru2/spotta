import Navbar from "../GeneralComponents/Navbar";
import SideBar from "../GeneralComponents/SideBar";
import ShowAllreviews from "../AllReviewsComponent/ShowReviews";
const AllReviews = () => {
    return ( 
        <>
            <Navbar />
            <div className="flex">
            <SideBar />
            <ShowAllreviews />
            </div>

        </>
     );
}
 
export default AllReviews;