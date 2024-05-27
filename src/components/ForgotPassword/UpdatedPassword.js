import React from "react";
import Images from "../Images/e5b8d8b6-80d3-4545-ab6d-24fdd706ef4c.png";
import { useNavigate } from "react-router-dom";

const UpdatedPassword = () => {
  const navigate = useNavigate();

  const updatedPassword = (e) => {
    e.preventDefault();

    navigate("/");
  };
  return (
    <section className="bg-gray-300 min-h-screen flex items-center  flex-col  py-4 px-4 overflow-hidden md:flex md:justify-center md:items-center">
      <div className=" bg-white flex flex-col justify-center items-center shadow-xl rounded-lg border-2 border-white">
        <div className=" flex flex-col p-2 items-center rounded-2xl md:min-w-[800px] min-w-[360px]">
          <div className="">
            <img className="w-64 h-64" src={Images} alt="logo" />
          </div>
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-black text-left px-2">
                Hey, <br />
                Password successfully <br /> changed
              </h2>
              <p className="text-left px-2">
                Use the updated password fot logging the next time
              </p>
            </div>
            <div className="flex justify-center items-center py-16">
              <button
                onClick={updatedPassword}
                className="bg-[#545AFA] rounded-md text-white py-2 w-44 h-12 text-lg text-center"
              >
                Go to Login Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatedPassword;
