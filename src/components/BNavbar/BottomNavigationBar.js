import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Routes/AuthContext";

const BottomNavigationBar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && (
        <>
          <div className="bg-[#7276E8] flex fixed justify-center z-30 sm:static inset-x-0 bottom-0 p-4 gap-16 sm:hidden">
            <Link to="/Home" className="text-[14px] text-center text-white">
              Home
            </Link>
            <Link to="/Booking" className="text-[14px] text-center text-white">
              Booking
            </Link>
            <Link to="/Wallet" className="text-[14px] text-center text-white">
              Wallet
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default BottomNavigationBar;
