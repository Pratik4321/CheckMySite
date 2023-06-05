import React from 'react'
import "../../../../../CSS/Modals.css";
import pointer from "../../../../../Assests/main/pointer.svg";
// import { Link } from "react-router-dom";

const   StatusField = () => {
  return (
    <div>
         <div class="mt-2">
                    <div className="modal-container">
                      <div className="modal-inner-top">
                        
                      <div className="pointericon"><img src={pointer} alt="" /></div>
                        <p className="website_name">www.example.com</p>
                      </div>

                      <div className="web1ssl">
                      <div className="Website_Status">
                        Website Status :
                        <button className="active_button">Active</button>
                      </div>
                      <div className="SSl_Status">
                        <div></div>
                        SSL Status:
                        <button className="inactive_button">Inactive</button>
                      </div>
                    </div>
                    <div className="last_checkedmain">
                      <div className="last_checked">Last Checked:</div>
                      <div className="last-check_data">22/02/2023 12:13 AM</div>
                    </div>

                    </div>{" "}
                   
                  </div>
    </div>
  )
}

export default StatusField