import React from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import style from "./InfoPage.module.css";
import Button from "@/app/components/button/Button";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

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

        <hr className="my-5 border-t border-gray-300" />

        {/* General Information  */}
        <div className="">
          <h1 className="primary-Heading">General Information</h1>
          <p className="body-text">
            The Gbowee Peace Foundation (GPFA) scholarship is part of their
            broader education-program aimed at giving underprivileged girls,
            youth, children (including those with special needs) a chance at
            quality education. It is often referred to as a{" "}
            <span className="font-medium">
              360-degree or fully supported scholarship.
            </span>
          </p>
        </div>

        {/* Scholarship Benefits */}
        <div className="my-5">
          <h2 className="secondary-Heading">Scholarship Benefits</h2>

          <ul className="mt-3">
            <li className=" flex gap-2.5 items-center p-1 body-text">
              <GoDotFill size={20} />
              Full Tuition
            </li>
            <li className=" flex items-center gap-2.5 p-1 body-text">
              <GoDotFill size={20} />
              Internship
            </li>
            <li className="flex items-center gap-2.5 p-1 body-text">
              <GoDotFill size={20} />
              Accommodation
            </li>
            <li className="flex items-center gap-2.5 p-1 body-text">
              <GoDotFill size={20} />
              Medical Expeseses
            </li>
            <li className=" flex items-center gap-2.5 p-1  body-text">
              <GoDotFill size={20} />
              Spipend
            </li>
            <li className="flex items-center gap-2.5 p-1 body-text">
              <GoDotFill size={20} />
              Psycho-social support
            </li>
          </ul>
        </div>

        <hr className="my-5 border-t border-gray-300" />

        {/* Eligiability Crateria */}
        <div className="">
          <h3 className="secondary-Heading">Eligiability Criteria</h3>
          <p className="body-text">
            Our scholarship eligibility criteria is based on four categories of
            students they include Technical Vocational Education Training (TVET)
            Students, High School Graduates, Local University and International
            Students.
          </p>
        </div>

        {/* TVET Criterias  */}
        <div className="my-5">
          <h3 className="third-Heading">
            Technical Vocational Training (TVET) Programs
          </h3>
          <ul className="">
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Admission Letter for preferred Institution
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Letter of Recommendation; 2 copies
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Motivational Essays
            </li>
          </ul>
        </div>

        {/* High School Graduates Criterias  */}
        <div className="my-5">
          <h3 className="third-Heading">High School Graduates</h3>
          <ul className="">
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              High School Credentials: Official Diploma & Transcript{" "}
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              WAEC/WASSCE Certificate
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Letter of Recommendation; 2 copies
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Motivational Essay (300 words)
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Admission Letter for preferred Institution
            </li>
          </ul>
        </div>

        {/* Local University Criterias  */}
        <div className="my-5">
          <h3 className="third-Heading">Local University Caterias</h3>
          <ul className="">
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              3.5 Grade Average Point (GPA) acquired from previous semester
              (First semester Freshmen are excluded){" "}
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Two Letters of Recommendation, (Head of Department & Community/
              Church or Mosque){" "}
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              High School Credentials: Official Diploma & Transcript{" "}
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Motivational Essay (600 words)
            </li>
          </ul>
        </div>

        {/* International University Criterias  */}
        <div className="my-5">
          <h3 className="third-Heading">International University Caterias</h3>
          <p className="body-text">
            The Gbowee Peace Foundation Africa currently accepts international
            students from only five African countries, they include{" "}
            <strong>Ghana,</strong> <strong>Sierra Leone,</strong>{" "}
            <strong>Nigeria,</strong> <strong>Tanzania,</strong> and{" "}
            <strong>Democratic Republic of Congo</strong>
          </p>
          <ul className="">
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              3.5 Grade Average Point (GPA) acquired from previous semester
              (First semester Freshmen are excluded){" "}
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Two Letters of Recommendation, (Head of Department & Community/
              Church or Mosque){" "}
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              High School Credentials: Official Diploma & Transcript{" "}
            </li>
            <li className="flex items-center gap-2 body-text">
              <GoDotFill className="shrink-0" size={15} />
              Motivational Essay (600 words)
            </li>
          </ul>
        </div>

        <p className="body-text">
          <strong>Note:</strong> All applicants applying must gain admission
          from their prefered Institution of Study. Also, note that if you're
          currently attending as a First semester student you need to apply as a
          High School Graduate from the Category of Interest Session.
        </p>
      </div>

      <Link href="/user/dashboard/application-form">
        <Button
          className="my-8 w-full p-6 text-3xl"
          btnLabel="Start Application"
          icon={<MdNavigateNext size={25} />}
        />
      </Link>
    </>
  );
};

export default InfoPage;
