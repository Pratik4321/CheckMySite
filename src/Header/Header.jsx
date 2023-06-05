import React, { useEffect, useState } from "react";
import Logo from "../Assests/Logo.svg";
import "../CSS/Header.css";
import { Link, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const url = location.pathname;
  const lastPathSegment = url.substring(url.lastIndexOf("/") + 1);

  const checkACtive = (val) => {
    if (lastPathSegment == "webMonitoring" && val == "webMonitoring") {
      return "active";
    } else if (lastPathSegment == "sslMonitoring" && val == "sslMonitoring") {
      return "active";
    } else if (lastPathSegment == "login" && val == "login") {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div>
      <div className="header">
        <div className="left_section">
          <div className="check">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="right_section">
          <Link to={"/webMonitoring"}>
            <div className={checkACtive("webMonitoring")}>Web Monitoring</div>{" "}
          </Link>
          <Link to="/sslMonitoring" href="/sslMonitoring">
            <div className={checkACtive("sslMonitoring")}>SSL Monitoring</div>
          </Link>
          <div className={checkACtive("login")}>
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
