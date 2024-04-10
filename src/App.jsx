import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignUp from './Views/SignUp';
import "../src/style.css"
import AddressReviews from './Views/AddressReviews';
import Dashboard from './Views/Dashboard';
import Login from './Views/Login';
import AllReviews from './Views/AllReviews';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<AddressReviews />} />
          {/* <Route path="/" element={<A />} /> */}
          <Route path='/All-Reviews' element={<AllReviews />} />
          <Route path="/Home" element={<Dashboard />} />
          

        </Routes>
      </Router>
    </>
  )
}

export default App
