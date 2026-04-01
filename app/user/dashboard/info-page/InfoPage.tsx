import Button from "@/app/components/button/Button";
import React from "react";
import { BiSkipNext } from "react-icons/bi";
import { GoDot, GoDotFill } from "react-icons/go";
import { GrFormPrevious } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import { SiPushbullet } from "react-icons/si";

const InfoPage = () => {
//   const steps = [{ primaryHeading: "" }];
  return (
    <>
      <div className="">
        <div>
          <p className="highlight-text">
            Thank you for your interest in The Gbowee Foundation Scholarship.
            Applications are currently open and it closes{" "}
            <span className="font-bold"> Friday, June 30, 2026!</span>
          </p>
        </div>

        {/* General Information  */}
        <div className="my-5">
          <h1 className="primary-Heading">General Information</h1>
          <p className="body-text">
            The Gbowee Peace Foundation (GPFA) scholarship is part of their
            broader education-program aimed at giving underprivileged girls,
            youth, children (including those with special needs) a chance at
            quality education. It is often referred to as a{" "}
            <span className="font-bold">
              360-degree or fully supported scholarship.
            </span>
          </p>
        </div>

        {/* Scholarship Benefits */}
        <div className=" my-6">
          <h2 className="secondary-Heading">Scholarship Benefits</h2>

          <ul className="mt-3">
            <li className="bg-base-200 flex gap-2.5 items-center p-2 body-text">
              <GoDotFill size={20} />
              Full Tuition
            </li>
            <li className=" flex items-center gap-2.5 p-2 body-text">
              <GoDotFill size={20} />
              Internship
            </li>
            <li className="bg-base-200 flex items-center gap-2.5 p-2 body-text">
              <GoDotFill size={20} />
              Accommodation
            </li>
            <li className="flex items-center gap-2.5 p-2 body-text">
              <GoDotFill size={20} />
              Medical Expeseses
            </li>
            <li className="bg-base-200 flex items-center gap-2.5 p-2  body-text">
              <GoDotFill size={20} />
              Spipend
            </li>
            <li className="flex items-center gap-2.5 p-2 body-text">
              <GoDotFill size={20} />
              Psycho-social support
            </li>
          </ul>
        </div>

        {/* Eligiability Crateria */}
        <div className="info-session">
          <h3 className="secondary-Heading">Eligiability Criteria</h3>
          <p className="body-text">
            Our scholarship eligibility criteria is based on four categories of
            students they include Technical Vocational Education Training (TVET)
            Students, High School Graduates, Local University and International
            Students. <br />
            <strong>Note:</strong> All applicants applying must gain admission
            from their prefered Institution of Study.
          </p>
        </div>

        <div className="py-8 flex items-center justify-between">
          <Button variant="accent" btnLabel="Signout" />
          <div>
            <Button
              btnLabel="Previous"
              icon={<GrFormPrevious size={20} />}
              variant="secondary"
            />
            <Button
              variant="accent"
              btnLabel="Next"
              icon={<MdOutlineNavigateNext size={20} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
