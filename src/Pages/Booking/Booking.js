import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUpcomingBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    const fetchCompleteBooking = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setCompletedBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBooking();
    fetchCompleteBooking();
  }, []);

  return (
    <div className="flex justify-center min-h-screen py-2">
      <div className="flex flex-col items-center text-sm text-neutral-800">
        <div className="flex flex-col w-full py-4 md:min-w-[800px] min-w-[360px]">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-row justify-between px-2 w-full">
              <div className="font-medium">Upcoming Bookings</div>
              <Link to="/UpcomingBookings">View All</Link>
            </div>
            {upcomingBookings.slice(0, 1).map((upBooking) => (
              <Link
                className="cursor-pointer shadow-xl rounded-lg flex flex-col gap-3 mt-3 bg-white"
                key={upBooking.id}
                to={`/BookingDetails/${upBooking.id}`}
              >
                <div className="flex flex-col text-neutral-800">
                  <div className="px-2">
                    <div className="flex justify-between gap-5">
                      <div className="font-medium text-black">
                        {upBooking.name}
                      </div>
                      <div className="text-xs">Upcoming</div>
                    </div>
                    <div className="text-xs font-medium mt-2">Booking Slot</div>
                    <div className="self-start mt-2 text-xs text-zinc-700">
                      Tuesday, March 30, 2024, 10:00 AM
                    </div>
                  </div>
                  <div className="bg-white border border-white mt-1"></div>
                  <div className="px-2 bg-[#E5E8F2]">
                    <div className="text-sm text-zinc-700">
                      456 Anytown Lane, Anytown,
                      <br />
                      CA 90210
                    </div>
                    <div className="mt-3 text-xs text-zinc-400">
                      Received 20 minutes ago
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row justify-between px-2 w-full p-4">
              <div className="font-medium">Previous Bookings</div>
              <Link to="/CompletedBookings">View All</Link>
            </div>
            {completedBookings.slice(0, 4).map((comBooking) => (
              <Link
                className="flex gap-4 flex-row justify-between w-full rounded-md bg-white shadow-lg overflow-hidden p-4"
                key={comBooking.id}
                to={`/BookingDetailsComplete/${comBooking.id}`}
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
                    <div className="font-medium">{comBooking.name}</div>
                    <div className="text-sm">Grooming service for Max.</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                  <div className="font-medium">March 15, 2024</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
