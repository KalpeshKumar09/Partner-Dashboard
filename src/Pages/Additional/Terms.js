import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" flex items-center flex-col md:max-w-4xl max-w-6xl">
        <div className="flex flex-col">
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
            <div className="flex flex-col shadow-lg  bg-[#E5E8F2] items-center p-4 rounded-md">
              <h1 className="text-[22px] font-medium mt-2 text-center">
                Terms and Conditions
              </h1>
              <div className="flex flex-col items-center py-4">
                <h2>Partner Eligibility:</h2>
                <p className="">
                  To become a Partner on our platform, you must meet our
                  eligibility criteria and comply with any additional
                  requirements specified by us.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Services Offered:</h2>
                <p className="">
                  As a Partner, you will provide your services exclusively
                  through our platform. These services may include, but are not
                  limited to, veterinary services, grooming services, pet
                  boarding services, and any other pet care-related services
                  offered by Poodles PetCare. By offering your services through
                  our platform, you agree to abide by our platform's policies,
                  guidelines, and standards to ensure a positive user
                  experience. Additionally, you may be required to undergo a
                  vetting process or meet certain qualifications and criteria
                  set forth by Poodles PetCare to maintain your status as a
                  Partner on our platform.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Partner Responsibilities:</h2>
                <p className="">
                  - You agree to provide high-quality services to users of our
                  platform in a professional manner.\n- You are responsible for
                  maintaining the necessary licenses, certifications, and
                  insurance coverage required to provide your services.\n- You
                  agree to comply with all applicable laws and regulations
                  governing your services.\n-Partners should ensure the health
                  and safety of pets and users during the provision of services,
                  including maintaining a clean and safe environment and
                  following proper protocols for handling pets.\n-Partners
                  should maintain accurate records of services provided,
                  including invoices, receipts, and any relevant documentation
                  required by Poodles PetCare or regulatory authorities.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Platform Usage:</h2>
                <p className="">
                  - You will use our platform solely for the purpose of offering
                  your services to users.\n- You agree not to engage in any
                  fraudulent, deceptive, or illegal activities while using our
                  platform.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Intellectual Property:</h2>
                <p className="">
                  You acknowledge that all intellectual property rights related
                  to our platform belong to the Company, and you agree not to
                  use or reproduce any such intellectual property without our
                  prior written consent.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Liability and Indemnification:</h2>
                <p className="">
                  -You agree to indemnify and hold harmless the Company, its
                  officers, directors, employees, and agents from any claims,
                  damages, or liabilities arising out of or related to your
                  services provided through our platform. This includes but is
                  not limited to claims of negligence, errors, omissions, or
                  misconduct on your part.\n-You acknowledge and agree that the
                  Company shall not be liable for any indirect, incidental,
                  special, or consequential damages arising out of or in
                  connection with your use of our platform. This includes, but
                  is not limited to, loss of profits, loss of business
                  opportunities, or any other economic loss incurred by you or
                  any third party.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Termination:</h2>
                <p className="">
                  The Company reserves the right to terminate this Agreement and
                  your access to our platform at any time for any reason,
                  without prior notice.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Modifications:</h2>
                <p className="">
                  The Company reserves the right to modify or update these Terms
                  and Conditions at any time without prior notice. Your
                  continued use of our platform after any such changes
                  constitutes acceptance of the updated Terms and Conditions.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Governing Law:</h2>
                <p className="">
                  This Agreement shall be governed by and construed in
                  accordance with the laws of [Jurisdiction], without regard to
                  its conflict of law principles.- Any dispute arising out of or
                  in connection with this Agreement, including any questions
                  regarding its existence, validity, or termination, shall be
                  subject to the exclusive jurisdiction of the courts in Jaipur,
                  [Jurisdiction]
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Tax and Liability Disclaimer:</h2>
                <p className="">
                  - Poodles PetCare does not employ service providers. We are
                  not responsible for and will not be liable for any workers'
                  compensation or tax payments or withholdings, including but
                  not limited to applicable sales taxes, unemployment or
                  employment insurance, social security, disability insurance,
                  or any other applicable federal or state withholdings in
                  connection with a Partner's use of our platform.- Each Partner
                  assumes all liability for the proper classification of their
                  workers based on applicable legal guidelines and is solely
                  responsible for compliance with all tax and labor laws.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Contract between Users and Partners:</h2>
                <p className="">
                  You acknowledge and agree that a legally binding contract with
                  another User or Partner (the 'Service Agreement') is formed
                  when you and that User or Partner agree on the terms of a
                  service assignment.Poodles PetCare is not a party to any
                  Service Agreement, and the formation of a Service Agreement
                  will not, under any circumstances, create an employment or
                  other service relationship between Poodles PetCare and the
                  Partner, nor will it create an employment relationship between
                  the User and the Partner. Users and Partners do not have
                  authority to enter into written or oral - whether implied or
                  express - contracts on behalf of Poodles PetCare.Poodles
                  PetCare's role, beyond enabling connections between Users and
                  Partners via its web-based platform, is to act as a
                  facilitator for service payment processing. In acting as such,
                  Poodles PetCare disclaims any agency or authority to act on
                  behalf of the Partner and assumes no liability or
                  responsibility for any acts or omissions of the Partner,
                  either within or outside of our platform.Users and Partners
                  agree to comply with all terms of the Service Agreement and
                  this Agreement during the engagement, performance, and
                  completion of services.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Payment Agreement between Poodles PetCare and Partners:</h2>
                <p className="">
                  1. Payment Terms: 1.1 Poodles PetCare ('Company') facilitates
                  connections between partners ('Partners') and users on its
                  platform for the provision of pet care services. 1.2 Partners
                  agree to receive compensation for services provided to users
                  through the Company's platform. 1.3 Partners acknowledge that
                  the Company charges a facilitation fee for each transaction
                  processed through the platform. The facilitation fee is
                  subject to change at the discretion of the Company, with prior
                  notice provided to Partners. 2. Settlement Period: 2.1 Payment
                  to Partners will be made after a settlement period, as
                  determined by the Company. The settlement period may vary and
                  will be communicated to Partners by the Company. 2.2 Partners
                  understand and agree that payment for services rendered will
                  be made within the agreed-upon settlement period following the
                  completion of the service. 3. Facilitation Fees: 3.1 Partners
                  acknowledge and agree to the facilitation fees charged by the
                  Company for each transaction processed through the platform.
                  3.2 The Company reserves the right to increase the
                  facilitation fees at any time, with prior notice provided to
                  Partners. 4. Additional Requests: 4.1 Partners understand that
                  any additional requests for payment or changes to the payment
                  agreement must be made in writing and approved by the Company.
                  4.2 Partners agree not to engage in any activities that may
                  put the Company at risk, including but not limited to
                  requesting additional payments from users outside of the
                  platform or engaging in fraudulent behavior. 5. Termination:
                  5.1 The Company reserves the right to terminate this payment
                  agreement and the partnership with any Partner at any time for
                  any reason, with prior notice provided to the Partner. 5.2 In
                  the event of termination, any outstanding payments owed to the
                  Partner will be settled according to the terms of this
                  agreement.
                </p>
              </div>
              <div className="flex flex-col items-center py-4">
                <h2>Non-Solicitation Clause:</h2>
                <p className="">
                  During the term of this Agreement and for a period of one year
                  following its termination or expiration, the Partner agrees
                  not to directly or indirectly solicit or attempt to solicit
                  any users or clients of Poodles PetCare for the purpose of
                  providing competing services or engaging in any business
                  activities that may adversely affect the interests of Poodles
                  PetCare. Specifically, the Partner agrees not to contact,
                  communicate with, or engage with any users or clients of
                  Poodles PetCare outside of the platform for the purpose of
                  offering or promoting similar services that are offered
                  through Poodles PetCare's platform. This includes, but is not
                  limited to, directly contacting users or clients via email,
                  phone, social media, or any other means of communication.
                  Furthermore, the Partner agrees not to engage in any
                  activities that may divert or attempt to divert users or
                  clients of Poodles PetCare away from the platform or encourage
                  them to seek similar services outside of the platform. In the
                  event of a breach of this non-solicitation clause, the Partner
                  acknowledges that Poodles PetCare may pursue legal remedies,
                  including injunctive relief and monetary damages, to enforce
                  compliance with this provision. The obligations set forth in
                  this non-solicitation clause shall survive the termination or
                  expiration of this Agreement. By accepting this Agreement, the
                  Partner acknowledges and agrees to abide by the terms of this
                  non-solicitation clause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
