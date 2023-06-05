import React from "react";
import "../../../CSS/WebsiteMiddle.css";
import "../../../CSS/latest.css";
import eye from "../../../Assests/main/eye.svg";
import intopros from "../../../Assests/main/table/intopros.svg";
import notepad2 from "../../../Assests/main/notepad2.svg";
import pointer from "../../../Assests/main/pointer.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Header2 from "../../../Header/Header2";
import Graph from './Graph/Graph'
import SslInfo from "./SslInfo/SslInfo";
import History from "./History/History";

const ReportDetails = () => {
  const location = useLocation();
  const url = location.pathname;
  const lastPathSegment = url.substring(url.lastIndexOf("/") + 1);

  const checkACtive = (val) => {
    if (lastPathSegment == "website" && val == "website") {
      return "active";
    } else if (lastPathSegment == "checknow" && val == "checknow") {
      return "active";
    } else if (lastPathSegment == "reports" && val == "reports") {
      return "active";
    } else {
      return "";
    }
  };
  return (
    <div>
    <Header2/>
    <div className="page_body">
      <div className="page_sidebar">
      <div className="sidebar-top">
        <div className={`sidebar-link ${checkACtive("website")}`}>
          <img src={pointer} alt="" />
          <Link to={"/website"}> Websites</Link>
        </div>

        <div className={`sidebar-link ${checkACtive("checknow")}`}>
          <img src={eye} alt="" />

          <Link to={"/checknow"}>Check Now</Link>
        </div>
        <div className={`sidebar-link ${checkACtive("reports")}`}>
          <img src={notepad2} alt="" />

          <Link to={"/reports"}> Reports</Link>
        </div>
    </div>
        <div className="sidebar-bottom">
        
        <img src={intopros} alt="" />
        
        <div className="">
        <div class="">Intopros</div>
            <div className="email">intopros@gmail.com</div>
         
        </div>

        </div>
      </div>
      <div className="page_content">
        <div className="page_table">
          <Graph/>
          <SslInfo/>
          <History/>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ReportDetails;
