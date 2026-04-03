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
            <li data-content="●" className="step step-primary">Ovierview</li>
            <li className="step step-primary">Personal Information</li>
            <li className="step">Parental Information</li>
            <li className="step">Category of Interest</li>
            <li className="step">Category of Interest</li>
            <li className="step">Category of Interest</li>
            <li className="step">Category of Interest</li>
            <li className="step">Category of Interest</li>
            <li className="step">Category of Interest</li>
          </ul>
        </div>

        {/* <ul className="list hidden lg:block body-text">
          <li className="list-row ">Link 1</li>
          <li className="list-row">Link 2</li>
          <li className="list-row">Link 3</li>
          <li className="list-row">Link 4</li>
          <li className="list-row">Link 5</li>
        </ul> */}
      </div>
    </>
  );
};

export default Navbar;
