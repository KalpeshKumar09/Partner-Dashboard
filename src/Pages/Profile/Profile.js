import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center  min-h-screen">
      <div className="bg-gray-100 flex overflow-hidden py-2 px-2 flex-col gap-2 md:min-w-[800px] min-w-[360px] ">
        <div className="shadow-xl rounded-lg  bg-white">
          <div className="flex p-2 flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <g clip-path="url(#clip0_2_32)">
                  <path
                    d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
                    fill="#E8EBF3"
                  />
                  <path
                    d="M32 29.091C36.2843 29.091 39.7576 25.6177 39.7576 21.3334C39.7576 17.049 36.2843 13.5758 32 13.5758C27.7157 13.5758 24.2424 17.049 24.2424 21.3334C24.2424 25.6177 27.7157 29.091 32 29.091Z"
                    fill="#6C63FF"
                    stroke="#6C63FF"
                    stroke-width="1.27273"
                  />
                  <path
                    d="M18.9416 53.3334H45.0793C48.6846 53.3334 50.4242 52.3028 50.4242 50.07C50.4242 44.8412 43.2558 37.8182 32 37.8182C20.7441 37.8182 13.5757 44.8412 13.5757 50.07C13.5757 52.3028 15.3155 53.3334 18.9416 53.3334Z"
                    fill="#6C63FF"
                    stroke="#6C63FF"
                    stroke-width="1.27273"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_32">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="text-lg font-normal">Lokesh Ahir</h2>
              <h4 className="text-md font-normal">4.5</h4>
            </div>
            <div className="flex flex-col p-2 border-b-2 border-gray-300 w-full">
              <h2 className="text-lg font-normal">Vet Certificate Number</h2>
              <p>D647897</p>
            </div>
            <div className="flex flex-col p-2 border-b-2 border-gray-300 w-full">
              <h2 className="text-lg font-normal">Email</h2>
              <p>contact@poodles.in</p>
            </div>
            <div className="flex flex-col p-2 border-b-2 border-gray-300 w-full">
              <h2 className="text-lg font-normal">Mobile</h2>
              <p>1233456789</p>
            </div>
            <div className="flex flex-col p-2 border-b-2 border-gray-300 w-full">
              <h2 className="text-lg font-normal">Address</h2>
              <p>123 main street anytown</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-normal">Certification Documents</h2>
              <img
                src=""
                alt="Vet Licences"
                className="w-full h-20 border-dashed border-2 border-gray-400 text-black"
              />
              <img
                src=""
                alt="Aadhar Card"
                className="w-full h-20 border-dashed border-2 border-gray-400 text-black"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">User Feedback</h3>
          <div className="  bg-white">
            <div className="flex p-1">
              <div className="flex flex-col shadow-xl rounded-lg  bg-white py-4">
                <p>
                  Provided exceptional care and attention to our furry family
                  member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
