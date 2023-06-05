import React from "react";
import Header from '../../Header/Header.jsx'
import Footer from "../../Footer/Footer";
import "../../CSS/Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Header/>
      <div className="home">
        <h1>Welcome to CheckMySite</h1>
        <p className="para">
          CheckMySite is a comprehensive and user-friendly online platform
          designed to help website owners and administrators monitor the status
          and performance of their websites.
        </p>
         <Link to={'/webMonitoring'}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 -700 rounded">
          Web Monitoring
        </button></Link>
        <div className="opacity"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
