import React from "react";
import style from "./UserForm.module.css";
import { MdOutlineAttachEmail, MdOutlinePersonOutline, MdOutlineTripOrigin } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { FaHome, FaLandmark, FaTransgender } from "react-icons/fa";
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
        </div>

        <div className="form-section w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Fullname */}
          <div className="mt-5 my-1 lg:col-span-2">
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
          <div className="lg:mt-5 my-1">
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
          <div className="my-1">
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
          <div className="my-1">
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
          <div className="my-1">
            <label htmlFor="address" className={`${style.customLabel}`}>
              Enter your Address *
            </label>

            <label
              className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
            >
              <FaHome
                size={18}
                className={`${style.formIcon} shrink-0`}
              />
              <input
                id="address"
                type="address"
                className={`grow`}
                placeholder="Home Address"
              />
            </label>
          </div>

          {/* County of Origin */}
          <div className="my-1">
            <label htmlFor="county" className={style.customLabel}>
              County of Origin *
            </label>

            <label
              className={`w-full input input-lg flex items-center ${style.customFormInput}`}
            >
              <MdOutlineTripOrigin
                size={18}
                className={` ${style.formIcon} shrink-0`}
              />
              <input
                id="county"
                type="text"
                className="w-full bg-transparent outline-none border-none"
                placeholder="Select your county of Origin"
                list="counties"
              />
              <datalist id="counties">
                <option value="Montserrado" />
                <option value="Margibi" />
                <option value="Gbapolu" />
                <option value="Rivercess County" />
                <option value="Grand Gedeh" />
              </datalist>
            </label>
          </div>

          {/* Country of Origin */}
          <div className="my-1">
            <label htmlFor="country" className={style.customLabel}>
              Country of Origin *
            </label>

            <label
              className={`w-full input input-lg flex items-center ${style.customFormInput}`}
            >
              <FaLandmark size={18} className={` ${style.formIcon} shrink-0`} />
              <input
                id="country"
                type="text"
                className="w-full bg-transparent outline-none border-none"
                placeholder="Select your county of Origin"
                list="countries"
              />
              <datalist id="countries">
                <option value="Liberia" />
                <option value="Sierra Leone" />
                <option value="Nigeria" />
                <option value="Tanziana" />
                <option value="DR Congo" />
              </datalist>
            </label>
          </div>

          {/* Gender */}
          <div className="my-1">
            <label htmlFor="gender" className={style.customLabel}>
              Gender *
            </label>

            <label
              className={`w-full input input-lg flex items-center ${style.customFormInput}`}
            >
              <FaTransgender
                size={18}
                className={` ${style.formIcon} shrink-0`}
              />
              <input
                id="gender"
                type="text"
                className="w-full bg-transparent outline-none border-none"
                placeholder="Select your gender"
                list="genders"
              />
              <datalist id="genders">
                <option value="Male" />
                <option value="Female" />
              </datalist>
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
