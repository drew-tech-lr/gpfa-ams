import React from "react";
import style from "../UserForm.module.css";
import { MdOutlineAttachEmail, MdOutlinePersonOutline } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import SectionWrapper from "../SectionWrapper";
import { FieldValues, useFormContext } from "react-hook-form";
import Button from "@/app/components/button/Button";

const personalInfo = ({ onActive }: { onActive: () => void }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();


  return (
    <>
      {/* ---- Personal Information ------------------------ */}
      <SectionWrapper onActive={onActive}>
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
                    {...register("personalInfo.fullname")}
                    id="fullname"
                    type="text"
                    className={`grow`}
                    placeholder="Type your name here"
                  />
                </label>
                {/* {errors && <p className="text-shadow-orange-600">Enter fullname correctly</p>} */}
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
                   {...register("personalInfo.dob")}
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
                  Phone number *
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
                <label htmlFor="gender" className={`${style.customLabel}`}>
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
      </SectionWrapper>
      <hr className="my-10 border-t border-gray-300" />
    </>
  );
};

export default personalInfo;
