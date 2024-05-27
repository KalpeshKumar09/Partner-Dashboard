import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookingDetailsComplete = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="flex flex-col items-center bg-white py-4 min-h-screen md:px-4 px-2">
      {userData ? (
        <div className="flex flex-col md:min-w-[800px] min-w-[360px]">
          <div className="flex flex-col justify-center self-start px-2 py-3 mt-2 ml-4 text-sm font-medium text-black rounded-lg bg-zinc-300 ">
            <div className="py- grid grid-cols-1 px-4 bg-white rounded ">
              <div className="self-center">Service Details</div>
              <div className="mt-4 text-neutral-800">
                <span className="font-medium text-black">Booking Id</span>:{" "}
                <span className="text-neutral-800">PETCARE-123456</span>
              </div>
              <div className="mt-3.5">
                Service: <span>Veterinary Care</span>
              </div>
              <div className="mt-3.5">
                Date: <span>{userData.email}</span>
              </div>
              <div className="mt-3.5">
                Time: <span>10:00 AM</span>
              </div>
              <div className="mt-4">
                Address: <span>456 Anytown Lane,</span>
                <span>Anytown, CA 90210</span>
              </div>
              <div className="mt-3.5 text-red-500">
                Concern:{" "}
                <span className="text-[#F24135]">
                  Vomiting and loss of appetite for the past 2 days.
                </span>
              </div>
              <div className="mt-3.5">
                Additional Notes: <span>No recent</span>
                <span>dietary changes,</span>
                <span>possible ingestion of foreign object.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center self-start px-2 py-3 mt-2 ml-4 text-sm font-medium text-black rounded-lg bg-zinc-300 ">
            <div className="grid grid-cols-1 px-4 py-2 mt-3 bg-white rounded ">
              <div className="self-center">Service Provided</div>
              <div className="mt-4">
                Grooming Service: <span>{userData.name}</span>
              </div>
              <div className="mt-4">
                Vet Consultation: <span>Dr. John Doe</span>
              </div>
              <div className="mt-4">
                Treatment Details: <span>Vaccination for rabies and</span>
                <span>treatment for skin infection</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default BookingDetailsComplete;
