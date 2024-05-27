import React from "react";
import { useNavigate } from "react-router-dom";

const WithDrawFunds = () => {
  const navigate = useNavigate();

  const withDraw = () => {
    navigate("/WithDrawFundsScreen");
  };
  return (
    <div className="flex justify-center min-h-screen py-2">
      <div className="flex flex-col  mx-auto bg-white min-h-screen">
        <div className="flex flex-col px-7 w-full text-neutral-800 md:min-w-[800px] min-w-[360px]">
          <div className="flex flex-col px-10 py-4 rounded-md bg-[#F5F5F5]">
            <h4 className="text-sm font-medium text-center">
              Available To Withdraw
            </h4>
            <h2 className="self-center text-center mt-4 text-xl font-semibold">
              INR 6200
            </h2>
          </div>
          <form action="">
            <div>
              <div className="flex flex-col">
                <label htmlFor="">Withdraw Request</label>
                <input
                  type="text"
                  value="Enter Amount"
                  className="justify-center flex text-center items-center p-2.5 mt-2.5 text-sm text-black rounded-md bg-zinc-300"
                />
              </div>
            </div>
            <div className="gap-2 flex flex-col">
              <h4 className="mt-5 text-sm font-medium">Enter Bank Details</h4>
              <div className="flex flex-col">
                <label htmlFor="">Customer Name</label>
                <input
                  type="text"
                  className="justify-center flex  items-center p-2.5 mt-2.5 text-sm text-black rounded-md bg-zinc-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Account Number</label>
                <input
                  type="text"
                  className="justify-center flex items-center p-2.5 mt-2.5 text-sm text-black rounded-md bg-zinc-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Confirm Account Number</label>
                <input
                  type="text"
                  className="justify-center flex items-center p-2.5 mt-2.5 text-sm text-black rounded-md bg-zinc-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Bank Name</label>
                <input
                  type="text"
                  className="justify-center flex items-center p-2.5 mt-2.5 text-sm text-black rounded-md bg-zinc-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Ifsc Code</label>
                <input
                  type="text"
                  className="justify-center flex items-center p-2.5 mt-2.5 text-sm text-black rounded-md bg-zinc-300"
                />
              </div>
            </div>
          </form>
          <button
            onClick={withDraw}
            className="flex flex-col justify-center items-center self-center px-2 py-2.5 mt-8 text-sm font-medium rounded-xl bg-zinc-300 w-52"
          >
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.721 0.579199C20.0802 0.481521 20.4552 0.474093 20.8174 0.557478C21.1797 0.640864 21.5197 0.812871 21.8117 1.06044C22.1037 1.30801 22.3399 1.62464 22.5025 1.98629C22.6651 2.34793 22.7497 2.74509 22.75 3.14761V5.30267H23.5625C24.209 5.30267 24.829 5.58183 25.2861 6.07874C25.7432 6.57565 26 7.2496 26 7.95234V23.8503C26 24.5531 25.7432 25.227 25.2861 25.7239C24.829 26.2208 24.209 26.5 23.5625 26.5H2.4375C1.79104 26.5 1.17105 26.2208 0.713927 25.7239C0.256807 25.227 1.59399e-07 24.5531 1.59399e-07 23.8503V7.95234C-0.000226623 7.27023 0.241544 6.61431 0.674988 6.12109C1.10843 5.62787 1.70016 5.33536 2.327 5.30444L19.721 0.579199ZM9.03825 5.30267H21.125V3.14761C21.1247 3.0136 21.0964 2.88142 21.0422 2.76107C20.9879 2.64072 20.9092 2.53537 20.812 2.45299C20.7147 2.37061 20.6015 2.31336 20.4809 2.28558C20.3603 2.2578 20.2355 2.26022 20.1159 2.29265L9.03825 5.30267ZM2.4375 7.06912C2.22201 7.06912 2.01535 7.16217 1.86298 7.32781C1.7106 7.49344 1.625 7.71809 1.625 7.95234V23.8503C1.625 24.0846 1.7106 24.3092 1.86298 24.4749C2.01535 24.6405 2.22201 24.7336 2.4375 24.7336H23.5625C23.778 24.7336 23.9847 24.6405 24.137 24.4749C24.2894 24.3092 24.375 24.0846 24.375 23.8503V7.95234C24.375 7.71809 24.2894 7.49344 24.137 7.32781C23.9847 7.16217 23.778 7.06912 23.5625 7.06912H2.4375Z"
                fill="#211F1F"
              />
            </svg>

            <h4 className="text-center">Request Payout</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithDrawFunds;
