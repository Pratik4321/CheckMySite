import React from "react";
import "../../../../CSS/Modals.css";
import pointer from "../../../../Assests/main/pointer.svg";
import { Link } from "react-router-dom";
import '../../../../CSS/AddnewModal.css'

const AddnewModal = () => {
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
              <div class="sm:flex sm:items-start">
                 
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Add New Website
                  </h3>
                  <div class="mt-2">
                    <div className="Email">URl*</div>
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter URL"
                    />

                    <div className="Email">Email*</div>
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter Email"
                    />

                    <label className="Password">Phone Number*</label>
                    <div className="password-input">
                      <input
                        className="input"
                        type="text"
                        placeholder="Enter PHone Number"
                      />
                    </div>
                    <div className="radio_btn">
                      <div
                        className="radio-container"
                        style={{ marginBottom: 20 }}
                      >
                        <input type="radio" value="Male" name="gender" /> Check
                        Now
                      </div>
                      <div className="radio-container">
                        <input type="radio" value="Female" name="gender" />{" "}
                        Notify when the Website is down
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Add
              </button>
              <Link to={'/website'}>
               <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
              </Link>
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddnewModal;
