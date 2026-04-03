"use client";
import React, { useState } from "react";
import style from "./UserForm.module.css";
import { MdOutlineAttachEmail, MdOutlinePersonOutline } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";

const UserForm = () => {
  return (
    <>
      <form action="">
        {/* ---- Personal Information ------------------------ */}
        <div className="section-container" id="personal-info">
          <div className={`${style.formSectionHeader}`}>
            <h1 className="primary-Heading">Personal Information</h1>
            <p className="body-text">
              This section collects basic details about the applicants to
              establish their identity and background.
            </p>
          </div>

          <div className="form-section w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Fullname */}
            <div className="mt-5 my-1 lg:col-span-2 formInput">
              <label htmlFor="fullname" className={`${style.customLabel}`}>
                What is your name? *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlinePersonOutline
                  size={18}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="fullname"
                  type="text"
                  className={`grow`}
                  placeholder="Type your name here"
                />
              </label>
            </div>

            {/* Date of Birth */}
            <div className="lg:mt-5 my-1 formInput">
              <label htmlFor="dob" className={`${style.customLabel}`}>
                Date of Birth *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <BsCalendarDate
                  size={18}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="dob"
                  type="date"
                  className={`grow`}
                  placeholder="Enter Date of Birth"
                />
              </label>
            </div>

            {/* Email */}
            <div className="my-1 formInput">
              <label htmlFor="email" className={`${style.customLabel}`}>
                Enter your Email *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlineAttachEmail
                  size={18}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="email"
                  type="email"
                  className={`grow`}
                  placeholder="Enter your email"
                />
              </label>
            </div>

            {/* Phone */}
            <div className="my-1 formInput">
              <label htmlFor="phone" className={`${style.customLabel}`}>
                Enter your Phone number *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <IoMdPhonePortrait
                  size={18}
                  className={`${style.formIcon} shrink-0`}
                />
                <input
                  id="phone"
                  type="phone"
                  className={`grow`}
                  placeholder="Enter your Phone number"
                />
              </label>
            </div>

            {/* Address */}
            <div className="my-1 formInput">
              <label htmlFor="address" className={`${style.customLabel}`}>
                Enter your Address *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <FaHome size={18} className={`${style.formIcon} shrink-0`} />
                <input
                  id="address"
                  type="address"
                  className={`grow`}
                  placeholder="Home Address"
                />
              </label>
            </div>

            {/* Country of Origin */}
            <div className="my-1 formInput">
              <label htmlFor="country" className={`${style.customLabel}`}>
                Country of Origin *
              </label>

              <select
                id="country"
                name="country"
                defaultValue=""
                className={`pl-5 select input input-lg w-full ${style.customFormInput} ${style.selectInput}`}
              >
                <option value="" disabled>
                  Select your country --
                </option>
                <option value="liberia">Liberia</option>
                <option value="sierraLeone">Sierra Leone</option>
                <option value="nigeria">Nigeria</option>
                <option value="tanziana">Tanziana</option>
                <option value="congo">DR Congo</option>
              </select>
            </div>

            {/* County of Origin */}
            <div className="my-1 formInput">
              <label htmlFor="county" className={`${style.customLabel}`}>
                County of Origin *
              </label>

              <select
                id="county"
                name="county"
                defaultValue=""
                className={`pl-5 select input input-lg w-full ${style.customFormInput} ${style.selectInput}`}
              >
                <option value="" disabled>
                  Select your county --
                </option>
                <option value="Montserrado">Montserrado</option>
                <option value="Margibi">Margibi</option>
                <option value="Gbapolu">Gbapolu</option>
                <option value="Rivercess County">Rivercess County</option>
                <option value="Grand Gedeh">Grand Gedeh</option>
              </select>
            </div>

            {/* Gender */}
            <div className="my-1 formInput">
              <label htmlFor="county" className={`${style.customLabel}`}>
                Gender *
              </label>

              <select
                id="gender"
                name="gender"
                defaultValue=""
                className={`pl-5 select input input-lg w-full ${style.customFormInput} ${style.selectInput}`}
              >
                <option value="" disabled>
                  Select your gender --
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Disability */}
            <div className="my-1 lg:col-span-3 formInput">
              <label htmlFor="disability" className={`${style.customLabel}`}>
                Do you have a disability? *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlineAttachEmail
                  size={18}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="disability"
                  type="text"
                  className={`grow`}
                  placeholder="Yes or No. If Yes, kinldy state"
                />
              </label>
            </div>
          </div>
        </div>

        <hr className="my-10 border-t border-gray-300" />

        {/* ---- Parent/ Gurdian Information ------------------------ */}
        <div className="section-container " id="personal-info">
          <div className={`${style.formSectionHeader}`}>
            <h1 className="primary-Heading">Parent/ Gurdian Information</h1>
            <p className="body-text">
              This section collects basic details about the applicants to
              establish their identity and background.
            </p>
          </div>

          <div className="form-section w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Relationship */}
            <div className="my-1 mt-5 formInput">
              <label htmlFor="relationship" className={`${style.customLabel}`}>
                Relationship *
              </label>

              <select
                id="relationship"
                name="relationship"
                defaultValue=""
                className={`pl-5 select input input-lg w-full ${style.customFormInput} ${style.selectInput}`}
              >
                <option value="" disabled>
                  Select Relationship --
                </option>
                <option value="mother">Mother</option>
                <option value="father">Father</option>
                <option value="gurdian">Gurdian</option>
              </select>
            </div>

            {/* Parent/ Gurdian Fullname */}
            <div className="mt-5 my-1 formInput">
              <label htmlFor="fullname" className={`${style.customLabel}`}>
                Fullname *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlinePersonOutline
                  size={18}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="fullname"
                  type="text"
                  className={`grow`}
                  placeholder="Type your name here"
                />
              </label>
            </div>

            {/* Parent/ Gurdian Email */}
            <div className="my-1 mt-5 formInput">
              <label htmlFor="email" className={`${style.customLabel}`}>
                Email *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlineAttachEmail
                  size={18}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="email"
                  type="email"
                  className={`grow`}
                  placeholder="Enter your email"
                />
              </label>
            </div>

            {/* Parent/ Gurdian Phone */}
            <div className="my-1 formInput">
              <label htmlFor="phone" className={`${style.customLabel}`}>
                Contact Number *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <IoMdPhonePortrait
                  size={18}
                  className={`${style.formIcon} shrink-0`}
                />
                <input
                  id="phone"
                  type="phone"
                  className={`grow`}
                  placeholder="Enter your Phone number"
                />
              </label>
            </div>

            {/* Parent/ Gurdian Address */}
            <div className="my-1 formInput">
              <label htmlFor="address" className={`${style.customLabel}`}>
                Address *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <FaHome size={18} className={`${style.formIcon} shrink-0`} />
                <input
                  id="address"
                  type="address"
                  className={`grow`}
                  placeholder="Home Address"
                />
              </label>
            </div>

            {/* Occupation */}
            <div className=" my-1 formInput">
              <label htmlFor="fullname" className={`${style.customLabel}`}>
                Occupation *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlinePersonOutline
                  size={18}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="fullname"
                  type="text"
                  className={`grow`}
                  placeholder="Type your name here"
                />
              </label>
            </div>
          </div>
        </div>

        <hr className="my-10 border-t border-gray-300" />

        {/* ---- Category of Interest ------------------------ */}
        <div className="section-container " id="personal-info">
          <div className={`${style.formSectionHeader}`}>
            <h1 className="primary-Heading">Category of Interest</h1>
            <p className="body-text">
              This section collects basic details about the applicants to
              establish their identity and background.
            </p>
          </div>

          <div className="form-section w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Relationship */}
            <div className="my-1 mt-5 lg:col-span-3 formInput">
              <label htmlFor="category" className={`${style.customLabel}`}>
                Applying as a *
              </label>

              <select
                id="category"
                name="category"
                defaultValue=""
                className={`pl-5 select input input-lg w-full ${style.customFormInput} ${style.selectInput}`}
              >
                <option value="" disabled>
                  select category --
                </option>
                <option value="highSchool">High School Graduate</option>
                <option value="tvet">
                  {" "}
                  Technical Vocational Education (TVET) Student
                </option>
                <option value="localUniversity"> Local University Student </option>
                <option value="intUniversity">
                  {" "}
                  International University Student{" "}
                </option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
