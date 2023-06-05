import React from "react";
import "../../../../CSS/Modals.css";
import pointer from "../../../../Assests/main/pointer.svg";
import { Link } from "react-router-dom";

const Modals = () => {
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:space-between">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Check Now
                  </h3>
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
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-8 sm:w-8"
                  style={{
                    backgroundColor: "whitesmoke",
                    padding: 5,
                    color: "grey",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="nx rz"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="bg-white-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                Done
              </button>
               <Link to={'/webMonitoring'}><button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
