import React from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div className="flex justify-center py-2 min-h-screen">
      <div className="bg-gray-100 flex flex-col">
        <div className="flex flex-col md:min-w-[800px] min-w-6xl">
          <div className="bg-white p-2 ">
            <Link to="/Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </Link>
          </div>
          <div className="shadow-inner p-2">
            <div className="flex flex-col bg-[#E5E8F2] p-2 gap-4 rounded-lg">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">Account</h3>
                <div className="bg-white p-3 flex flex-row justify-start gap-4 rounded-lg ">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_32)">
                      <path
                        d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
                        fill="#E8EBF3"
                      />
                      <path
                        d="M32 29.091C36.2843 29.091 39.7576 25.6177 39.7576 21.3334C39.7576 17.049 36.2843 13.5758 32 13.5758C27.7157 13.5758 24.2424 17.049 24.2424 21.3334C24.2424 25.6177 27.7157 29.091 32 29.091Z"
                        fill="#6C63FF"
                        stroke="#6C63FF"
                        stroke-width="1.27273"
                      />
                      <path
                        d="M18.9416 53.3334H45.0793C48.6846 53.3334 50.4242 52.3028 50.4242 50.07C50.4242 44.8412 43.2558 37.8182 32 37.8182C20.7441 37.8182 13.5757 44.8412 13.5757 50.07C13.5757 52.3028 15.3155 53.3334 18.9416 53.3334Z"
                        fill="#6C63FF"
                        stroke="#6C63FF"
                        stroke-width="1.27273"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_32">
                        <rect width="64" height="64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="flex flex-col">
                    <h4>Kalpesh Kumar</h4>
                    <p>sutharkalpesh101@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h3>General</h3>
                <div className="flex flex-col py-2 bg-white rounded-lg">
                  <Link
                    to="/AddProfile"
                    className=" p-3 flex flex-row justify-between gap-4 border-b-2 border-gray-300"
                  >
                    <h4>ProfileSetting</h4>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right text-black"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/ChangePassword"
                    className=" p-3 flex flex-row justify-between gap-4 "
                  >
                    <h4>Password & Security</h4>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right text-black"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col py-2">
                <h3>Other</h3>
                <div div className="bg-white rounded-lg">
                  <Link
                    to="/Contact"
                    className=" p-3 flex flex-row justify-between gap-4 border-b-2 border-gray-300"
                  >
                    <h4>Contact Us</h4>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right text-black"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/Report"
                    className=" p-3 flex flex-row justify-between gap-4 border-b-2 border-gray-300"
                  >
                    <h4>Report An Issue</h4>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right text-black"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/Privacy"
                    className=" p-3 flex flex-row justify-between gap-4 border-b-2 border-gray-300"
                  >
                    <h4>Privacy Policy</h4>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right text-black"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    to="/Terms"
                    className=" p-3 flex flex-row justify-between gap-4 "
                  >
                    <h4>T&C</h4>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right text-black"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
