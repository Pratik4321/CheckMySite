import React from "react";
import Header from "../../../Header/Header.jsx";
import Footer from "../../../Footer/Footer";
import "../../../CSS/WebMonitoring.css";
import { Link } from "react-router-dom";

const WebMonitoring = () => {
  return (
    <div>
      <Header />
      <div className="container-form">
        <div className="btn" style={{ textAlign: "left" }}>
          <button class="bg-[#E8F1FD] hover:bg-blue-700 text-[blue] font-bold py-2 px-4 -700 rounded ">
            Free Monitoring
          </button>
        </div>

        <div className="form">
          <div>
            {" "}
            <div className="label-container">
              <div className="label">WebSite URL:</div>
              <input
                style={{ width: "100%" }}
                type="text"
                className="input_btn"
                placeholder="www.example.com"
              />
            </div>
          </div>

          <div className="label-container">
            <div className="label">Email:</div>
            <input
              style={{ width: "100%" }}
              type="text"
              className="input_btn"
              placeholder="Enter Email"
            />
          </div>

          <div className="label-container">
            <label className="label">Phone Number:</label>
            <input
              style={{ width: "100%" }}
              type="text"
              className="input_btn"
              placeholder="Enter Phone Number"
            />
          </div>

          <div className="radio_btn">
            <div className="radio-container" style={{ marginBottom: 20 }}>
              <input type="radio" value="Male" name="gender" /> Check Now
            </div>
            <div className="radio-container">
              <input type="radio" value="Female" name="gender" /> Notify when
              the Website is down
            </div>

            <Link to={"/modals"}>
              {" "}
              <button class="start-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Now
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WebMonitoring;
