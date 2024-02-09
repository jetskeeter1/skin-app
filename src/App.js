import './style/Login.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar"; 
import Admin from "./pages/Admin";
import SupAd from './pages/superadmin';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/SupAd' element={<SupAd />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
