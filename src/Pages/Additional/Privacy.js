import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="bg-gray-50 min-h-screen flex items-center flex-col md:max-w-4xl max-w-6xl">
        <div className="flex flex-col ">
          <div className="bg-white p-2">
            <Link to="/Setting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </Link>
          </div>
          <div className="p-2 shadow-inner">
            <div className="flex flex-col shadow-lg  items-center bg-[#E5E8F2] p-4 rounded-md">
              <h1 className="text-[22px] font-medium mt-2 text-center">
                Privacy Policy
              </h1>
              <div className="flex flex-col items-center py-4">
                <h2>Privacy Policy:</h2>
                <p className="">
                  Poodles PetCare ("Company," "we," "us," or "our") is committed
                  to protecting the privacy and security of your personal
                  information. This Privacy Policy outlines the types of
                  personal information we collect, how we use and protect that
                  information, and your rights regarding your personal data.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Information We Collect:</h2>
                <p className="">
                  Personal Information: When you register as a user or partner
                  on our platform, we may collect personal information such as
                  your name, email address, phone number, and payment
                  details.Usage Information: We may collect information about
                  how you interact with our platform, including your browsing
                  activity, preferences, and interactions with other
                  users.Device Information: We may collect information about the
                  device you use to access our platform, including your IP
                  address, browser type, and operating system.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>How We Use Your Information:</h2>
                <p className="">
                  Personal Information: When you register as a user or partner
                  on our platform, we may collect personal information such as
                  your name, email address, phone number, and payment
                  details.Usage Information: We may collect information about
                  how you interact with our platform, including your browsing
                  activity, preferences, and interactions with other
                  users.Device Information: We may collect information about the
                  device you use to access our platform, including your IP
                  address, browser type, and operating system.To provide and
                  improve our services: We use your personal information to
                  facilitate connections between users and partners, process
                  payments, and enhance the functionality of our platform.To
                  communicate with you: We may use your contact information to
                  send you updates, notifications, and promotional offers
                  related to our services.To ensure security: We may use your
                  information to detect and prevent fraud, unauthorized access,
                  and other security incidents.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Information Sharing and Disclosure:</h2>
                <p className="">
                  We may share your personal information with trusted
                  third-party service providers who assist us in operating our
                  platform, processing payments, and delivering services.We may
                  disclose your personal information in response to legal
                  requests, court orders, or legal proceedings, or to protect
                  the rights, property, or safety of our users, partners, or
                  others.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Data Retention:</h2>
                <p className="">
                  We will retain your personal information for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Your Rights:</h2>
                <p className="">
                  You have the right to access, update, or delete your personal
                  information at any time by contacting us.You have the right to
                  opt out of receiving promotional communications from us by
                  following the instructions provided in our emails.You have the
                  right to request a copy of the personal information we hold
                  about you and to request that we correct any inaccuracies.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Changes to This Privacy Policy:</h2>
                <p className="">
                  We reserve the right to update or modify this Privacy Policy
                  at any time. Any changes will be posted on this page, and we
                  encourage you to review this Privacy Policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
