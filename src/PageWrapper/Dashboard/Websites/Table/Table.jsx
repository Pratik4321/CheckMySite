import React from "react";
import "../../../../CSS/Table.css";
import group from "../../../../Assests/main/table/Group.svg";
import button from "../../../../Assests/main/table/Button.svg";
import frame from "../../../../Assests/main/table/Frame.svg";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div className="">
      <div className="">
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
          <Link to={'/addnew'}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 -700 rounded">
            Add New
          </button>
          </Link>
        </div>

        <table className="customers">
          <tr>
            <th>Website URL</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>www.example.com</td>
            <td>example@gmail.com</td>
            <td>+9779866927835</td>
            <td className="action">
              {" "}
              <img src={group} alt="" />
              <img src={button} alt="" />
            </td>
          </tr>
          <tr>
            <td>www.example.com</td>
            <td>example@gmail.com</td>
            <td>+9779866927835</td>
            <td className="action">
              {" "}
              <img src={group} alt="" />
              <img src={button} alt="" />
            </td>
          </tr>
          <tr>
            <td>www.example.com</td>
            <td>example@gmail.com</td>
            <td>+9779866927835</td>
            <td className="action">
              {" "}
              <img src={group} alt="" />
              <img src={button} alt="" />
            </td>
          </tr>
          <tr>
            <td>www.example.com</td>
            <td>example@gmail.com</td>
            <td>+9779866927835</td>
            <td className="action">
              {" "}
              <img src={group} alt="" />
              <img src={button} alt="" />
            </td>
          </tr>
          <tr>
            <td>www.example.com</td>
            <td>example@gmail.com</td>
            <td>+9779866927835</td>
            <td className="action">
              {" "}
              <img src={group} alt="" />
              <img src={button} alt="" />
            </td>
          </tr>
          <tr>
            <td>www.example.com</td>
            <td>example@gmail.com</td>
            <td>+9779866927835</td>
            <td className="action">
              {" "}
              <img src={group} alt="" />
              <img src={button} alt="" />
            </td>
          </tr>
          <tr>
            <td>www.example.com</td>
            <td>example@gmail.com</td>
            <td>+9779866927835</td>
            <td className="action">
              {" "}
              <img src={group} alt="" />
              <img src={button} alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );                                      
};

export default Table;
