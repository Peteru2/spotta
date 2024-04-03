import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignUp from './Views/SignUp';
import "../src/style.css"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          

        </Routes>
      </Router>
    </>
  )
}

export default App
