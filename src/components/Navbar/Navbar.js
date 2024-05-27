/** @format */
"use client";

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import clsx from "clsx";
import { useAuth } from "../../Routes/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Home",
      Link: "Home",
    },
    {
      label: "Booking",
      Link: "/Booking",
    },
    {
      label: "Wallet",
      Link: "/Wallet",
    },
  ];

  return (
    <>
      {isAuthenticated && (
        <nav className="flex justify-between px-8 items-center py-4">
          <div className="flex items-center flex-row gap-8 justify-between w-screen">
            <section className="flex items-center gap-4 justify-between">
              <AiOutlineMenu
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer"
              />
            </section>
            <div className="hidden sm:flex items-center gap-8">
              {navlinks.map((d, i) => (
                <Link
                  key={i}
                  className="hidden sm:block  text-gray-600 hover:text-black"
                  to={d.Link}
                >
                  {d.label}
                </Link>
              ))}
            </div>
            <Link className="flex items-center gap-4" to="/Profile">
              <svg
                width="64"
                height="64"
                className="h-8 w-8 rounded-full "
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </Link>
          </div>

          <div
            className={clsx(
              " fixed h-full w-screen bg-black/50 backdrop-blur-sm  sm:bg-black/50 sm:backdrop-blur-sm md:bg-transparent md:backdrop-blur-0   top-0 right-0  -translate-x-full shadow-slate-950",
              isSideMenuOpen && "translate-x-0"
            )}
            onClick={() => setMenu(false)}
          >
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-4 gap-4 z-50 w-56 flex">
              {/*<IoMdClose
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer"
          />*/}
              <div className=" flex flex-row justify-start border-b-2 border-gray-300 gap-2 px-2">
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_721)">
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
                        d="M18.9416 53.3334H45.0792C48.6845 53.3334 50.4242 52.3028 50.4242 50.07C50.4242 44.8412 43.2558 37.8182 31.9999 37.8182C20.7441 37.8182 13.5757 44.8412 13.5757 50.07C13.5757 52.3028 15.3154 53.3334 18.9416 53.3334Z"
                        fill="#6C63FF"
                        stroke="#6C63FF"
                        stroke-width="1.27273"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_721">
                        <rect width="64" height="64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="flex flex-col">
                  <h4 className="text-[12px]">Hello</h4>
                  <h4 className="text-[12px]">Kalpesh Kumar</h4>
                </div>
              </div>
              <div className="border-b-2 border-gray-300 flex flex-col justify-center items-start gap-3 px-4 py-4">
                <Link to="/Setting" className="font-normal">
                  Settings
                </Link>
                <Link to="/Contact" className="font-normal">
                  Contact Us
                </Link>
                <Link className="font-normal" to="/Report">
                  Report An Issue
                </Link>
                <Link className="font-normal" to="/Privacy">
                  Privacy Policy
                </Link>
                <Link className="font-normal" to="/Terms">
                  T&C
                </Link>
              </div>
              <div className="px-4">
                <Link onClick={handleLogout}>LogOut</Link>
              </div>
            </section>
          </div>
        </nav>
      )}
    </>
  );
}
