import React, { useState } from "react";
import Images from "../Images/7a7c7ed2-db3d-4c4a-959e-5f6018481360.png";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();

  const verifyOtp = (e) => {
    e.preventDefault();
    console.log(otp);
    navigate("/Home");
  };

  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen flex items-center flex-col py-2 px-2 md:flex md:justify-center md:items-center">
      <div className="bg-white flex flex-col justify-center items-center  rounded-xl border border-white">
        <div className=" flex flex-col p-2 items-center rounded-2xl md:min-w-[800px] min-w-[360px]">
          <div className="">
            <img className="w-64 h-64" src={Images} alt="logo" />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 flex-col">
              <h2 className="font-bold text-xl text-black px-2 text-left">
                Hey, <br />
                We've Sent You An Email With Your Code
              </h2>
              <p className="text-center font-normal">
                Enter the code which has been send to contact@poodles.in
              </p>
            </div>
            <form
              className="flex flex-col gap-4 px-2 overflow-hidden" /* onSubmit={verifyOtp} */
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-center gap-6">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="w-10 h-10 border-2 border-black rounded-md"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                </div>
                <div className="text-center">
                  <p>Don't Recived Code?</p>
                  <p className="font-normal text-lg">Request New Otp In 28</p>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <button
                  onClick={verifyOtp}
                  className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-44 h-12 text-lg font-semibold"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
