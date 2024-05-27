import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="flex items-center justify-center py-2 md:py-2">
      <div className="bg-white  flex justify-center">
        <div className=" flex flex-col md:min-w-[800px] min-w-[360px]">
          <div className="bg-white p-2">
            <Link to="/Setting">
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
          <div className="p-2">
            <div className=" flex flex-col items-center rounded-lg  bg-[#E5E8F2] ">
              <div className=" flex p-1 items-center ">
                <div className="flex gap-2 flex-col ">
                  <h1 className="text-[22px]  text-center font-bold">
                    Change password
                  </h1>
                  <p className="text-[14px] text-center px-4">
                    Your password must be at least 8 characters and should
                    include a combination of numbers, letters ans special
                    characters (!$@%).
                  </p>
                  <form
                    action=""
                    className="flex flex-col gap-4 py-6"
                    /*   onSubmit={handleSubmit} */
                  >
                    <div className="flex flex-col">
                      <label htmlFor="currentPassword" className="">
                        currentpassword
                      </label>
                      <input
                        className="p-2 mt-1 rounded-md border bg-white"
                        type="password"
                        name="currentPassword"
                        /*  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} */
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="password" className="">
                        password
                      </label>
                      <input
                        className="p-2 mt-1 rounded-md border bg-white"
                        type="password"
                        name="password"
                        /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="confirmPassword" className="">
                        confirmpassword
                      </label>
                      <input
                        className="p-2 mt-1 rounded-md border bg-white"
                        type="password"
                        name="confirmPassword"
                        /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                      />
                    </div>

                    <div className="flex justify-center">
                      <button className="bg-[#545AFA] rounded-md text-white py-2  w-72 h-12 text-lg">
                        Updated Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
