import React from "react";
import Images from "../Images/05041e86-1436-458c-8e7e-756fe84cbb89.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const forgotPassword = (e) => {
    e.preventDefault();

    navigate("/UpdatedPassword");
  };
  return (
    <section className="bg-gray-300 min-h-screen flex items-center  flex-col  py-2 px-4 overflow-hidden md:flex md:justify-center md:items-center">
      <div className=" bg-white flex flex-col justify-center items-center shadow-xl rounded-lg border-2 border-white">
        <div className=" flex flex-col  p-2 items-center md:min-w-[800px] min-w-[360px] ">
          <div className="">
            <img className="w-64 h-64" src={Images} alt="logo" />
          </div>
          <div className="">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl text-black text-left">
                Hey, <br /> Enter Your New Password
              </h2>
              <p className="text-left">
                Your new password must be different from your last password
              </p>
            </div>
            <form className="flex flex-col gap-4 py-2">
              <div className="flex flex-col">
                <label htmlFor="newPassword" className="">
                  Enter New Password
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-[#E5E8F2]"
                  type="password"
                  name="newPassword"
                  required
                />
                <div id="recaptcha-container"></div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="">
                  Confirm New Password
                </label>
                <input
                  className="p-2 mt-1 rounded-md border bg-[#E5E8F2]"
                  type="password"
                  name="confirmPassword"
                  required
                />
                <div id="recaptcha-container"></div>
              </div>
            </form>
            <div className="flex justify-center py-6">
              <button
                onClick={forgotPassword}
                className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-44 h-12 text-lg text-center"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
