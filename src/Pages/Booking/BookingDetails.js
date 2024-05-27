import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BookingDetails = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const navigate = useNavigate();

  const complete = () => {
    navigate("/BookingOtp");
  };
  return (
    <>
      {userData ? (
        <>
          <div className="flex flex-col items-center mx-auto w-full bg-white md:px-4 px-2 h-screen  overflow-scroll">
            <div className="flex flex-col px-2 py-3.5 mt-4 text-sm font-medium text-black rounded-lg bg-zinc-300  md:min-w-[800px] min-w-[360px] md:px-4">
              <div className="py-2 grid grid-cols-1 px-4 bg-white rounded x">
                <div className="self-center"> Service Details</div>
                <div className="mt-3.5 text-zinc-700">
                  <span className="font-medium text-black">Name</span>:
                  {userData.name}
                </div>
                <div className="mt-3 text-neutral-800">
                  <span className="font-medium text-black">Booking Id</span>:
                  <span className="text-neutral-800">PETCARE-123456</span>
                </div>
                <div className="mt-3.5">
                  Service: <span className="">Veterinary Care</span>{" "}
                </div>
                <div className="mt-3.5">
                  Date:<span className="">March 30, 2024</span>{" "}
                </div>
                <div className="mt-3.5">
                  Time: <span className="">Veterinary Care</span>{" "}
                </div>
                <div className="mt-3.5">
                  Date:<span className="">10:00 AM</span>{" "}
                </div>
                <div className="mt-4">
                  Address: <span className="">456 Anytown Lane, </span>
                  <span className="">Anytown,CA 90210 </span>
                </div>
                <div className="mt-3.5 text-red-500">
                  Concern:{" "}
                  <span className="text-[#F24135] ">
                    Vomiting and loss of appetite for the past 2 days.{" "}
                  </span>
                </div>
                <div className="mt-3.5">
                  Additional Notes: <span className="">No recent </span>
                  <span className="">dietary changes, up-to-date </span>
                  <span className="">on vaccinations.</span>
                </div>
              </div>
              <div className="grid grid-cols-1 px-4 py-2 mt-3 bg-white rounded ">
                <div className="self-center">Pet Profile</div>
                <div className="flex flex-col self-start mt-5">
                  <div>
                    Pet Name: <span className="">Whisks</span>{" "}
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    Breed:<span className="">Persian</span>{" "}
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    Age:<span className=""> 5 Years</span>{" "}
                  </div>
                </div>
                <div>
                  <div className="mt-3.5">
                    Date:<span className="">10:00 AM</span>{" "}
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5 mt-3 text-neutral-800 md:flex md:justify-center justify-center md:gap-4">
                <button className="flex flex-col justify-center items-center px-6 py-2.5 whitespace-nowrap bg-white rounded-xl">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.56379 1.32906C3.84812 1.04515 4.18953 0.824899 4.56541 0.682919C4.94128 0.540939 5.34304 0.480468 5.74405 0.505514C6.14506 0.53056 6.53618 0.640551 6.89147 0.828197C7.24676 1.01584 7.55812 1.27686 7.80491 1.59395L10.7217 5.34137C11.2563 6.02878 11.4448 6.9242 11.2336 7.76924L10.3447 11.3281C10.2991 11.5125 10.3017 11.7055 10.3524 11.8885C10.403 12.0716 10.5 12.2384 10.6339 12.3731L14.6264 16.3659C14.7612 16.5001 14.9284 16.5972 15.1117 16.6479C15.295 16.6986 15.4883 16.7011 15.6729 16.6551L19.2299 15.7662C19.647 15.6626 20.0821 15.6548 20.5025 15.7434C20.923 15.8321 21.3179 16.0149 21.6576 16.2781L25.4047 19.1935C26.7518 20.2417 26.8753 22.2324 25.6696 23.4366L23.9894 25.1169C22.7869 26.3195 20.9897 26.8476 19.3144 26.2577C15.0257 24.7506 11.1321 22.2954 7.92353 19.0749C4.70349 15.8666 2.24848 11.9733 0.741258 7.68473C0.153026 6.0109 0.681135 4.21195 1.8836 3.00939L3.56379 1.32906Z"
                      fill="black"
                    />
                  </svg>

                  <h4>Contact</h4>
                </button>
                <button className="flex flex-col justify-center items-center px-11 py-2.5 bg-white rounded-xl">
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.7026 0.683343C25.7957 0.759616 25.8706 0.855596 25.922 0.964354C25.9734 1.07311 26.0001 1.19193 26 1.31224V24.0629C25.9999 24.2507 25.9347 24.4326 25.8157 24.5778C25.6966 24.723 25.5309 24.8224 25.3467 24.8592L17.2217 26.4842C17.1166 26.5053 17.0084 26.5053 16.9033 26.4842L8.9375 24.8917L0.97175 26.4842C0.853919 26.5078 0.732331 26.5049 0.615746 26.4758C0.499161 26.4467 0.390481 26.3921 0.297536 26.316C0.204592 26.2398 0.129697 26.144 0.0782466 26.0354C0.0267965 25.9268 7.25607e-05 25.8081 0 25.688L0 2.93729C0.000113396 2.74952 0.0652537 2.56758 0.184346 2.42242C0.303437 2.27725 0.469129 2.17781 0.65325 2.14101L8.77825 0.515963C8.88338 0.49495 8.99162 0.49495 9.09675 0.515963L17.0625 2.10851L25.0283 0.515963C25.146 0.492263 25.2676 0.494983 25.3842 0.523926C25.5008 0.552869 25.6096 0.607315 25.7026 0.683343ZM16.25 3.60356L9.75 2.30352V23.3966L16.25 24.6967V3.60356ZM17.875 24.6967L24.375 23.3966V2.30352L17.875 3.60356V24.6967ZM8.125 23.3966V2.30352L1.625 3.60356V24.6967L8.125 23.3966Z"
                      fill="black"
                    />
                  </svg>

                  <h4>Get Direction</h4>
                </button>
              </div>
            </div>
            <button
              onClick={complete}
              className="flex flex-col justify-center items-center px-4 py-3.5 mt-3 max-w-full text-sm font-medium rounded-xl bg-zinc-300 text-neutral-800 w-[184px] md:px-2"
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

              <h4>Mark As Completed</h4>
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default BookingDetails;
