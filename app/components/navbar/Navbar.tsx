import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer/Footer";
import UserProfille from "../profile/UserProfille";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div
        className={` ${style.navbar} h-full flex flex-col justify-start p-8 gap-10 `}
      >
        <div>
          <UserProfille />
        </div>

        <div className="list hidden lg:block text-[18px]">
          <ul className="steps steps-vertical">
            <li data-content="●" className={`step ${style.customStep}`}>
              Ovierview
            </li>
            <li data-content="●" className={`step ${style.customStep}`}>
              Personal Information
            </li>
            <li data-content="●" className={`step ${style.customStep}`}>
              Parental Information
            </li>
            <li data-content="●" className="step">
              Category of Interest
            </li>
            <li data-content="●" className="step">
              High School Graduate Session
            </li>
            <li data-content="●" className="step">
              Essay
            </li>
            <li data-content="●" className="step">
              Upload documents
            </li>
            <li data-content="●" className="step">
              Review & Edit
            </li>
            <li data-content="●" className="step">
              Submit
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
