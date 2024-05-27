import React from "react";
import UpcomingBookings from "../Booking/UpcomingBookings";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white flex flex-col items-center py-4">
      <div className=" flex flex-col items-center   gap-4 rounded-xl md:max-w-4xl max-w-6xl">
        <div className="">
          <div className="flex flex-col gap-1 justify-center items-center p-2 mt-4 text-base font-medium rounded-md bg-black text-white w-64 h-12">
            Go Online
            <label
              htmlFor="check"
              className="flex items-center mb-2 justify-center cursor-pointe"
            >
              <input type="checkbox" id="check" className="sr-only peer" />
              <span className="w-9 h-5 relative  rounded-full peer-checked:after:bg-[#FAAF19] bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7276E8]"></span>
            </label>
          </div>
        </div>
        <div className="flex gap-5 justify-between w-full text-sm  text-neutral-800 py-2 max-w-[800px]">
          <div className="w-full flex flex-col gap-1">
            <div className="flex flex-row justify-between w-full">
              <div className=" font-medium">Upcoming Bookings</div>
              <Link className="" to="/UpcomingBookings">
                View All
              </Link>
            </div>
            <UpcomingBookings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
