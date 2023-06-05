import React from 'react'

import group from "../../../../Assests/main/table/Group.svg";
import button from "../../../../Assests/main/table/Button.svg";
import '../../../../CSS/History.css'


const History = () => {
  return (
    <div className='History-main'>
    <div className='History-top-section'>History</div>
    <table className="customers">
        <tr>
          <th><input type="checkbox" ></input></th>
          <th>Website URL</th>
          <th>Last Checked</th>
          <th>Up Time</th>
          <th>Website Status</th>
          <th>SSl Status</th>
          
          <th>Actions</th>
        </tr>
        <tr>
          <td><input type="checkbox" checked="checked"></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
          <td><input type="checkbox"></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          
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
          
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
          <td><input type="checkbox"></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
          <td><input type="checkbox"></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
        <tr>
          <td><input type="checkbox"></input></td>
          <td>www.example.com</td>
          <td>22/02/2023 , 12:13 AM</td>
          <td>100%</td>
          <td>
            <button className="active1">Active</button>
          </td>
          <td>
            <button className="inactive2">Inactive</button>
          </td>
          
          <td className="action">
            {" "}
            <img src={group} alt="" />
            <img src={button} alt="" />
          </td>
        </tr>
          </table>
    </div>
  )
}

export default History