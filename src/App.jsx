import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignUp from './Views/SignUp';
import "../src/style.css"
import AllReviews from './Views/AllReviews';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<AllReviews />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          

        </Routes>
      </Router>
    </>
  )
}

export default App
