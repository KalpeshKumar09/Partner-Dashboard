import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../Images/262d36ab-e1e2-4075-9825-fe6332071f2e.png";
import { useAuth } from "../../Routes/AuthContext";

const Login = () => {
  /*  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); */

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/Home");
  };
  return (
    <div className="bg-gray-300 min-h-screen  flex items-center  flex-col py-2 px-2 md:px-6 md:flex md:justify-center md:items-center">
      <div className="max-w-[360px] flex flex-col justify-center items-center rounded-xl shadow-xl border border-white bg-white md:max-w-[800px]">
        <div className=" flex flex-col px-2 items-center  rounded-2xl ">
          <div className="">
            <img className="w-64 h-64" src={Images} alt="logo" />
          </div>
          <div className="">
            <h2 className="text-xl font-medium text-black px-10 text-center">
              Hey, Welcome Back To Continue!
            </h2>
            <form className="flex flex-col gap-2 px-2" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  className="p-2 rounded-md border bg-[#E5E8F2] "
                  type="email"
                  name="email"
                  /*  onChange={(e) => setEmail(e.target.value)} */
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  className="p-2  rounded-md border border-white w-full bg-[#E5E8F2]"
                  type="password"
                  name="password"
                  /* onChange={(e) => setPassword(e.target.value)} */
                  required
                />
              </div>

              <div className="text-xs #002D74] py-2 text-[#7276E8]">
                <Link to="/VerifyEmail" className="text-[14px] font-bold">
                  Forgot password?
                </Link>
              </div>

              <div className="flex justify-center">
                <button
                  /* onClick={handleSubmit} */
                  className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300 w-44 h-12 text-lg font-semibold"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className=" text-xs flex justify-center items-center">
              <Link
                to="/OtpSignIn"
                className="py-2 text-[14px] text-black text-md"
              >
                SignIn With Otp
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-center flex justify-center items-center text-black">
          <p className=" text-[14px] py-4">
            By Logging In, I agree with Poodles's{" "}
            <span className="text-[#7276E8]">Terms of Services</span> and{" "}
            <span className="text-[#7276E8]">Privacy Policy</span>, I agree to
            receive transactional text messages and I can opt-out at any time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
