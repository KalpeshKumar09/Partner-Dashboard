import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BookingOtp = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Booking");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col bg-white w-11/12 md:w-5/12">
        <Link
          to=""
          className="flex flex-col items-center px-2.5 w-full text-sm text-neutral-800"
        >
          <button className="flex gap-3 self-start mt-9 font-medium cursor-pointer">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 1.625C9.98316 1.625 7.08989 2.82343 4.95666 4.95666C2.82343 7.08989 1.625 9.98316 1.625 13C1.625 16.0168 2.82343 18.9101 4.95666 21.0433C7.08989 23.1766 9.98316 24.375 13 24.375C16.0168 24.375 18.9101 23.1766 21.0433 21.0433C23.1766 18.9101 24.375 16.0168 24.375 13C24.375 9.98316 23.1766 7.08989 21.0433 4.95666C18.9101 2.82343 16.0168 1.625 13 1.625ZM13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26ZM18.6875 13.8125C18.903 13.8125 19.1097 13.7269 19.262 13.5745C19.4144 13.4222 19.5 13.2155 19.5 13C19.5 12.7845 19.4144 12.5778 19.262 12.4255C19.1097 12.2731 18.903 12.1875 18.6875 12.1875H9.27387L12.7628 8.70025C12.9153 8.54768 13.001 8.34076 13.001 8.125C13.001 7.90924 12.9153 7.70232 12.7628 7.54975C12.6102 7.39718 12.4033 7.31147 12.1875 7.31147C11.9717 7.31147 11.7648 7.39718 11.6122 7.54975L6.73725 12.4247C6.66158 12.5002 6.60155 12.5899 6.56059 12.6886C6.51963 12.7873 6.49855 12.8931 6.49855 13C6.49855 13.1069 6.51963 13.2127 6.56059 13.3114C6.60155 13.4101 6.66158 13.4998 6.73725 13.5753L11.6122 18.4503C11.7648 18.6028 11.9717 18.6885 12.1875 18.6885C12.4033 18.6885 12.6102 18.6028 12.7628 18.4503C12.9153 18.2977 13.001 18.0908 13.001 17.875C13.001 17.6592 12.9153 17.4523 12.7628 17.2997L9.27387 13.8125H18.6875Z"
                fill="#211F1F"
              />
            </svg>

            <h4 className="flex-auto my-auto">Confirm Otp Code</h4>
          </button>
          <p className="self-stretch mt-5 text-xs leading-5 text-center text-black">
            Enter the 5-digit OTP code that has been sent from SMS to complete
            your account registration
          </p>
          <div className="flex items-center justify-center gap-2 self-stretch mt-3.5 text-4xl font-medium leading-9 text-center text-black whitespace-nowrap ">
            <form className="flex flex-col gap-4 px-2 overflow-hidden md:py-8 ">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-center items-center gap-4 md:flex md:flex-row md:items-center md:gap-4 md:justify-center">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="w-12 h-16 border-2 border-black rounded-md text-center"
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
              </div>
            </form>
          </div>
          <h4 className="mt-7 font-medium">Add Prescription Image</h4>
          <svg
            className="mt-4"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="15" width="10" height="40" rx="4" fill="#D9D9D9" />
            <rect
              y="25"
              width="10"
              height="40"
              rx="4"
              transform="rotate(-90 0 25)"
              fill="#D9D9D9"
            />
          </svg>

          <button
            onClick={handleSubmit}
            className="flex flex-col justify-center items-center px-16 py-3.5 mt-14 max-w-full font-medium whitespace-nowrap rounded-xl bg-zinc-300 w-[184px]"
          >
            <svg
              width="30"
              height="17"
              viewBox="0 0 30 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9591 0.83753C17.3061 0.49759 17.7679 0.309657 18.247 0.313387C18.726 0.317117 19.185 0.512219 19.527 0.857524C19.8689 1.20283 20.0671 1.67133 20.0798 2.16416C20.0925 2.657 19.9186 3.13562 19.5948 3.49904L9.76627 16.1475C9.59726 16.3348 9.39328 16.4852 9.16653 16.5895C8.93978 16.6938 8.69491 16.7501 8.44656 16.7548C8.19821 16.7595 7.95148 16.7127 7.72113 16.617C7.49078 16.5214 7.28153 16.379 7.1059 16.1982L0.58801 9.49122C0.406497 9.31718 0.260911 9.1073 0.159935 8.8741C0.0589598 8.64091 0.00466427 8.38917 0.000287519 8.13391C-0.00408923 7.87866 0.0415425 7.6251 0.134461 7.38839C0.227379 7.15167 0.36568 6.93664 0.541113 6.75611C0.716546 6.57559 0.925517 6.43328 1.15556 6.33766C1.3856 6.24205 1.632 6.19509 1.88007 6.1996C2.12813 6.2041 2.37277 6.25997 2.59939 6.36388C2.82601 6.46778 3.02997 6.61759 3.19911 6.80437L8.35726 12.1096L16.9098 0.893295L16.9591 0.83753ZM14.6929 13.8662L16.9591 16.1982C17.1347 16.3786 17.3438 16.5207 17.5739 16.6161C17.804 16.7115 18.0505 16.7582 18.2985 16.7535C18.5466 16.7487 18.7911 16.6927 19.0177 16.5885C19.2442 16.4844 19.448 16.3344 19.617 16.1475L29.4505 3.49904C29.6271 3.31958 29.7668 3.10533 29.8612 2.86908C29.9556 2.63284 30.0028 2.37944 29.9999 2.12403C29.997 1.86861 29.9441 1.61642 29.8444 1.3825C29.7447 1.14858 29.6001 0.937746 29.4195 0.762575C29.2388 0.587404 29.0257 0.451494 28.7929 0.362961C28.56 0.274427 28.3122 0.235086 28.0643 0.247287C27.8163 0.259488 27.5733 0.322982 27.3497 0.433975C27.1262 0.544968 26.9266 0.701184 26.763 0.893295L18.208 12.1096L17.0133 10.8777L14.6929 13.8662Z"
                fill="#211F1F"
              />
            </svg>

            <div>Submit</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingOtp;
