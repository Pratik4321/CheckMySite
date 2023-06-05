import './App.css';
// import Graph from './PageWrapper/Dashboard/Reports/Graph/Graph';
import Modals from './PageWrapper/Home/SsslMonitoring/Modals/Modals';
import Home from './PageWrapper/Home/Home';
import Login from './PageWrapper/Authentic/Login/Login';
import CheckNow from './PageWrapper/Dashboard/CheckNow/CheckNow';
import ReportDetails from './PageWrapper/Dashboard/Reports/ReportDetails';
import Reports from './PageWrapper/Dashboard/Reports/Reports';
import Websites from './PageWrapper/Dashboard/Websites/Websites';
import SignUp from './PageWrapper/Authentic/SignUp/SignUp';
import SslMonitoring from './PageWrapper/Home/SsslMonitoring/SslMonitoring';
import WebMonitoring from '../src/PageWrapper/Home/WebMonitoring/WebMonitoring';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import AddnewModal from './PageWrapper/Dashboard/Websites/Modal/AddnewModal';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='webMonitoring' element={<WebMonitoring/>}/>
        <Route path='sslMonitoring' element={<SslMonitoring  />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='website' element={<Websites/>}/>
        <Route path='modals' element={<Modals/>}/>
        <Route path='checknow' element={<CheckNow/>}/>
        <Route path='reports' element={<Reports/>}/>
        <Route path='reportdetails' element={<ReportDetails/>}/>
        <Route path='addnew' element={<AddnewModal/>}/>
      </Routes>
    </Router> 
    
   
    </div>
  );
}

export default App;
