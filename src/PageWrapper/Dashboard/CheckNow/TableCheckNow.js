import React from "react";

import group from "../../../Assests/main/table/Group.svg";
import button from "../../../Assests/main/table/Button.svg";
import frame from "../../../Assests/main/table/Frame.svg";
import "../../../CSS/TableCheckNow.css";

const TableCheckNow = () => {
  return (
    
    <div className="table_main">
      <div className="add_website">Add Websites</div>
      <div className="table_second">
      <div className="inputr">
          <input
            className="inputfield"
            type="text"
            placeholder="Search by URL"
          />
          <div className="search_button">
            
            <img src={frame} alt="" />
          </div>
          </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 -700 rounded">
          Check Now
        </button>
      </div>

      <table className="customers">
        <tr>
        <th><input type="checkbox" ></input></th>
          <th>Website URL</th>
          <th>Last Checked</th>
          <th>Up Time</th>
          <th>Website Status</th>
          <th>SSl Status</th>
          <th>Expires in</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>23days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
        <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>3days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
        <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>10days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
        <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>9days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
        <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>23days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
        <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>23days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
        <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>23days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
        <td><input type="checkbox" ></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          <td>23days</td>
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TableCheckNow;
