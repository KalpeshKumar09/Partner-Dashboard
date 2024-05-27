import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  const [payouts, setPayouts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchPayouts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setPayouts(data);
      } catch (error) {
        console.error("Error fetching payouts:", error);
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchPayouts();
    fetchTransactions();
  }, []);

  return (
    <div className="flex justify-center py-2 md:py-4 min-h-screen">
      <div className="flex flex-col bg-white">
        <div className="flex flex-col px-4 w-full text-neutral-800 md:min-w-[800px] min-w-[360px]">
          <div className="flex flex-col justify-center items-center px-20 py-2 rounded-md bg-[#F5F5F5]">
            <h2 className="text-sm font-medium">Total Earnings</h2>
            <h2 className="mt-2 text-xl font-semibold">INR 20,000</h2>
          </div>
          <div className="flex flex-col gap-0">
            <Link to="/TransactionHistory" className="mt-2 text-sm font-medium">
              Transaction History
            </Link>

            {transactions.slice(0, 4).map((transaction) => (
              <div
                key={transaction.id}
                className="flex gap-2.5 items-center px-2.5 py-2 mt-3 text-sm bg-white rounded-md shadow-xl md:flex md:justify-between justify-between"
              >
                <div className="flex flex-row items-start gap-4">
                  <div className="flex justify-center items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.721 0.0791995C20.0802 -0.0184788 20.4552 -0.0259073 20.8174 0.0574781C21.1797 0.140864 21.5197 0.312871 21.8117 0.560442C22.1037 0.808013 22.3399 1.12464 22.5025 1.48629C22.6651 1.84793 22.7497 2.24509 22.75 2.64761V4.80267H23.5625C24.209 4.80267 24.829 5.08183 25.2861 5.57874C25.7432 6.07565 26 6.7496 26 7.45234V23.3503C26 24.0531 25.7432 24.727 25.2861 25.2239C24.829 25.7208 24.209 26 23.5625 26H2.4375C1.79104 26 1.17105 25.7208 0.713927 25.2239C0.256807 24.727 1.59399e-07 24.0531 1.59399e-07 23.3503V7.45234C-0.000226623 6.77023 0.241544 6.11431 0.674988 5.62109C1.10843 5.12787 1.70016 4.83536 2.327 4.80444L19.721 0.0791995ZM9.03825 4.80267H21.125V2.64761C21.1247 2.5136 21.0964 2.38142 21.0422 2.26107C20.9879 2.14072 20.9092 2.03537 20.812 1.95299C20.7147 1.87061 20.6015 1.81336 20.4809 1.78558C20.3603 1.7578 20.2355 1.76022 20.1159 1.79265L9.03825 4.80267ZM2.4375 6.56912C2.22201 6.56912 2.01535 6.66217 1.86298 6.82781C1.7106 6.99344 1.625 7.21809 1.625 7.45234V23.3503C1.625 23.5846 1.7106 23.8092 1.86298 23.9749C2.01535 24.1405 2.22201 24.2336 2.4375 24.2336H23.5625C23.778 24.2336 23.9847 24.1405 24.137 23.9749C24.2894 23.8092 24.375 23.5846 24.375 23.3503V7.45234C24.375 7.21809 24.2894 6.99344 24.137 6.82781C23.9847 6.66217 23.778 6.56912 23.5625 6.56912H2.4375Z"
                        fill="#211F1F"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col items-start">
                    <h4 className="font-medium">{transaction.username}</h4>
                    <p className="mt-2.5">Grooming service for Max.</p>
                  </div>
                </div>
                <div>
                  <div className="font-medium">INR 149</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <Link to="/PayoutHistory" className="mt-2 text-sm font-medium">
              Payout History
            </Link>

            {payouts.slice(0, 1).map((payout) => (
              <div
                key={payout.id}
                className="flex gap-2.5 items-center justify-between px-2.5 py-2 mt-3 text-sm bg-white rounded-md shadow-xl md:flex md:justify-between"
              >
                <div className="flex flex-row items-start gap-4">
                  <div className="flex justify-center items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.721 0.0791995C20.0802 -0.0184788 20.4552 -0.0259073 20.8174 0.0574781C21.1797 0.140864 21.5197 0.312871 21.8117 0.560442C22.1037 0.808013 22.3399 1.12464 22.5025 1.48629C22.6651 1.84793 22.7497 2.24509 22.75 2.64761V4.80267H23.5625C24.209 4.80267 24.829 5.08183 25.2861 5.57874C25.7432 6.07565 26 6.7496 26 7.45234V23.3503C26 24.0531 25.7432 24.727 25.2861 25.2239C24.829 25.7208 24.209 26 23.5625 26H2.4375C1.79104 26 1.17105 25.7208 0.713927 25.2239C0.256807 24.727 1.59399e-07 24.0531 1.59399e-07 23.3503V7.45234C-0.000226623 6.77023 0.241544 6.11431 0.674988 5.62109C1.10843 5.12787 1.70016 4.83536 2.327 4.80444L19.721 0.0791995ZM9.03825 4.80267H21.125V2.64761C21.1247 2.5136 21.0964 2.38142 21.0422 2.26107C20.9879 2.14072 20.9092 2.03537 20.812 1.95299C20.7147 1.87061 20.6015 1.81336 20.4809 1.78558C20.3603 1.7578 20.2355 1.76022 20.1159 1.79265L9.03825 4.80267ZM2.4375 6.56912C2.22201 6.56912 2.01535 6.66217 1.86298 6.82781C1.7106 6.99344 1.625 7.21809 1.625 7.45234V23.3503C1.625 23.5846 1.7106 23.8092 1.86298 23.9749C2.01535 24.1405 2.22201 24.2336 2.4375 24.2336H23.5625C23.778 24.2336 23.9847 24.1405 24.137 23.9749C24.2894 23.8092 24.375 23.5846 24.375 23.3503V7.45234C24.375 7.21809 24.2894 6.99344 24.137 6.82781C23.9847 6.66217 23.778 6.56912 23.5625 6.56912H2.4375Z"
                        fill="#211F1F"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col items-start">
                    <h4 className="font-medium">{payout.username}</h4>
                    <p className="mt-2.5">INR 149</p>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Pending</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <h4 className="flex-auto text-sm font-medium">
              Available To Withdraw
            </h4>
            <h2 className="text-lg font-semibold">INR 6200</h2>
          </div>
          <Link to="/WithDrawFunds" className="mt-3.5 text-sm font-medium">
            Withdraw Funds
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
