import React from "react";
import { Link } from "react-router-dom";

const AddProfile = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="bg-gray-50  flex justify-center h-screen ">
        <div className="flex flex-col md:min-w-[800px] min-w-[360px]">
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
          <div className="shadow-inner p-1">
            <div className="flex flex-col items-center shadow-lg rounded-lg  bg-[#E5E8F2]">
              <div className="flex p-1 items-center">
                <div className="flex gap-3 flex-col ">
                  <h1 className="text-[22px]  text-center font-bold py-4">
                    Profile Details
                  </h1>
                  <form
                    action=""
                    className="flex flex-col gap-4 py-2"
                    /* onSubmit={handleSubmit} */
                  >
                    <div className="flex flex-col">
                      <label htmlFor="fullName" className="">
                        Full Name
                      </label>
                      <input
                        className="p-2 mt-1 rounded-md border bg-white w-96"
                        type="text"
                        name="fullName"
                        /* value={fullName}
                  onChange={(e) => setFullName(e.target.value)} */
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="">
                        Email
                      </label>
                      <input
                        className="p-2 mt-1 rounded-md border bg-white"
                        type="email"
                        name="email"
                        /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="mobile" className="">
                        Mobile
                      </label>
                      <input
                        className="p-2 mt-1 rounded-md border bg-white"
                        type="text"
                        name="mobile"
                        /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address" className="">
                        Address
                      </label>
                      <input
                        className="p-2 mt-1 rounded-md border bg-white"
                        type="text"
                        name="address"
                        /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">Gender</h1>
                      <div className="flex flex-row gap-8 px-4">
                        <div className="flex flex-row">
                          <input
                            className="p-2 mt-1 rounded-md border bg-white"
                            type="radio"
                            name="male"
                            /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                          />
                          <label htmlFor="male" className="">
                            Male
                          </label>
                        </div>
                        <div className="flex flex-row">
                          <input
                            className="p-2 mt-1 rounded-md border bg-white"
                            type="radio"
                            name="female"
                            /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                          />
                          <label htmlFor="female" className="">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="flex justify-center py-6">
                    <button className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-32 h-12 text-lg">
                      Save
                    </button>
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

export default AddProfile;
