import React, { useState } from "react";
import Images from "../Images/262d36ab-e1e2-4075-9825-fe6332071f2e.png";
import { Link, useNavigate } from "react-router-dom";

const OtpSignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const getOtp = (e) => {
    e.preventDefault();
    console.log(email);
    navigate("/Otp");
  };

  return (
    <div className="bg-gray-300 min-h-screen flex items-center  flex-col py-2 px-2  overflow-hidden md:flex md:justify-center md:items-center">
      <div className=" bg-white flex flex-col justify-center items-center  rounded-lg shadow-xl border-2 border-white py-4">
        <div className=" flex  flex-col px-2 items-center rounded-2xl md:min-w-[800px] min-w-[360px]">
          <div className="">
            <img className="w-64 h-64" src={Images} alt="logo" />
          </div>
          <div className=" flex flex-col gap-4">
            <div>
              <h2 className="font-medium text-xl text-black px-2 text-center">
                Hey, Welcome Back To Continue!
              </h2>
              <h4 className="text-center text-lg font-normal">
                Sign In With Otp
              </h4>
              <p className="text-center text-sm">
                You'll receive a 5 digit code to verify next...
              </p>
            </div>
            <form className="flex flex-col gap-4 px-2" onSubmit={getOtp}>
              <div className="flex flex-col">
                <label htmlFor="email" className="">
                  Enter Your Email Address
                </label>
                <input
                  className="p-2 rounded-md border bg-[#E5E8F2]"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  /* value={email} */
                  required
                />
              </div>

              <div className="flex justify-center items-center">
                <Link
                  to="/Otp"
                  className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-44 h-12 text-md font-semibold text-center"
                >
                  Continue
                </Link>
              </div>
            </form>

            <div className="mt-3 text-xs flex justify-center items-center text-[#002D74]">
              <Link to="/" className="py-2 text-[14px] text-black text-md">
                SignIn With Email
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-center flex justify-center items-center text-black">
          <p className=" text-[14px] py-4">
            By Logging In, I agree with Poodles's{" "}
            <span className="text-[#7276E8]">Terms of Services</span> and{" "}
            <span className="text-[#7276E8]">Privacy Policy</span>, I agree to
            receive transactional text messages and I can opt-out at any time
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpSignIn;
