"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./UserForm.module.css";
import {
  MdOutlineAttachEmail,
  MdOutlinePersonOutline,
  MdOutlineSchool,
} from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { FaHome, FaRegCalendar } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { required } from "zod/v4-mini";
import { HiLocationMarker } from "react-icons/hi";
import { GrAggregate } from "react-icons/gr";

const UserForm = () => {
  const { register, watch } = useForm();
  const category = watch("category");
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
              <label
                htmlFor="parentFullname"
                className={`${style.customLabel}`}
              >
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
                  id="parentFullname"
                  type="text"
                  className={`grow`}
                  placeholder="Type Fullname here"
                />
              </label>
            </div>

            {/* Parent/ Gurdian Email */}
            <div className="my-1 mt-5 formInput">
              <label htmlFor="parentEmail" className={`${style.customLabel}`}>
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
                  id="parentEmail"
                  type="email"
                  className={`grow`}
                  placeholder="Type Email here"
                />
              </label>
            </div>

            {/* Parent/ Gurdian Phone */}
            <div className="my-1 formInput">
              <label htmlFor="parentPhone" className={`${style.customLabel}`}>
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
                  id="parentPhone"
                  type="phone"
                  className={`grow`}
                  placeholder="Enter Phone number"
                />
              </label>
            </div>

            {/* Parent/ Gurdian Address */}
            <div className="my-1 formInput">
              <label
                htmlFor="parenntAddress"
                className={`${style.customLabel}`}
              >
                Address *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <FaHome size={18} className={`${style.formIcon} shrink-0`} />
                <input
                  id="parenntAddress"
                  type="address"
                  className={`grow`}
                  placeholder="Type Home Address"
                />
              </label>
            </div>

            {/* Occupation */}
            <div className=" my-1 formInput">
              <label htmlFor="occupation" className={`${style.customLabel}`}>
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
                  id="occupation"
                  type="text"
                  className={`grow`}
                  placeholder="Occupation"
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
            {/* Category */}
            <div className="my-1 mt-5 lg:col-span-3 formInput">
              <label htmlFor="category" className={`${style.customLabel}`}>
                Applying as a *
              </label>

              <select
                id="category"
                // name="category"
                {...register("category", { required: true })}
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
                <option value="localUniversity">
                  {" "}
                  Local University Student{" "}
                </option>
                <option value="intUniversity">
                  {" "}
                  International University Student{" "}
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* High School Category */}
        {/* High School Category */}
        {category === "highSchool" && (
          <div className={`sticky top-0  mt-10 id="#highSchool`}>
            <div className={`${style.formSectionHeader}`}>
              <h1 className="primary-Heading">High School Graduate Session</h1>
              <p className="body-text">This section collects basi......</p>
            </div>

            {/* Education Background */}
            <div className={`${style.formSection}`}>
              <h3 className={`uppercase third-Heading`}>
                Education Background
              </h3>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* high School Graduated */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="highSchoolGraduated"
                    className={`${style.customLabel}`}
                  >
                    High School graduated *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlineSchool
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="highSchoolGraduated"
                      type="text"
                      className={`grow`}
                      placeholder="Enter High School graduated"
                    />
                  </label>
                </div>

                {/* high School Address */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="highSchoolAddress"
                    className={`${style.customLabel}`}
                  >
                    High School Address *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <HiLocationMarker
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="highSchoolAddress"
                      type="address"
                      className={`grow`}
                      placeholder="Enter your High School address"
                    />
                  </label>
                </div>

                {/* year of entry */}
                <div className="mt-2 formInput">
                  <label htmlFor="entryYear" className={`${style.customLabel}`}>
                    Year of entry *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <FaRegCalendar
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="entryYear"
                      type="month"
                      name="monthYear"
                      className={`grow`}
                    />
                  </label>
                </div>

                {/* year graduated */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="yearGraduated"
                    className={`${style.customLabel}`}
                  >
                    Year Graduated Year *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <FaRegCalendar
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="yearGraduated"
                      type="month"
                      name="monthYear"
                      className={`grow`}
                    />
                  </label>
                </div>

                {/* Average graduation with */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="highSchoolAvg"
                    className={`${style.customLabel}`}
                  >
                    Average Graduated with *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <GrAggregate
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="highSchoolAvg"
                      type="number"
                      className={`grow`}
                      placeholder="Ex: 85"
                    />
                  </label>
                </div>

                {/* WAEC/ WASSCE */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="wassceAggregate"
                    className={`${style.customLabel}`}
                  >
                    WAEC/ WASSCE Aggregate *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <GrAggregate
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="wassceAggregate"
                      type="number"
                      className={`grow`}
                      placeholder="Ex: 43"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Program of interest */}
            <div className={`${style.formSection}`}>
              <h3 className={`uppercase third-Heading`}>Program of Interest</h3>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Intended Field of Study */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="fieldOfStudy"
                    className={`${style.customLabel}`}
                  >
                    Intended Field of Study *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlineSchool
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="fieldOfStudy"
                      type="text"
                      className={`grow`}
                      placeholder="Ex: Information Technology"
                    />
                  </label>
                </div>

                {/* Intended University */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="intendedUni"
                    className={`${style.customLabel}`}
                  >
                    Intended University *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlineSchool
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="intendedUni"
                      type="text"
                      className={`grow`}
                      placeholder="Ex: University Of Liberia (UL)"
                    />
                  </label>
                </div>

                {/* Completion Year */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="completionYear"
                    className={`${style.customLabel}`}
                  >
                    Completion Year *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlineSchool
                      size={20}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="completionYear"
                      type="text"
                      className={`grow`}
                      placeholder="Year of Completion"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Reference */}
            <div className={`${style.formSection}`}>
              <h3 className={`uppercase third-Heading`}>Reference</h3>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Reference 1: Fullname */}
                <div className="my-2 formInput">
                  <label
                    htmlFor="refOneFullname"
                    className={`${style.customLabel}`}
                  >
                    Reference 1: Fullname *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlinePersonOutline
                      size={18}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="refOneFullname"
                      type="text"
                      className={`grow`}
                      placeholder="Type Fullname here"
                    />
                  </label>
                </div>

                {/* Reference 1: Email */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="refOneEmail"
                    className={`${style.customLabel}`}
                  >
                    Reference 1: Email *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlineAttachEmail
                      size={18}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="refOneEmail"
                      type="email"
                      className={`grow`}
                      placeholder="Type Email here"
                    />
                  </label>
                </div>

                {/* Reference 1: Phone */}
                <div className="my-2 formInput">
                  <label
                    htmlFor="refOneNumber"
                    className={`${style.customLabel}`}
                  >
                    Reference 1: Contact Number *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <IoMdPhonePortrait
                      size={18}
                      className={`${style.formIcon} shrink-0`}
                    />
                    <input
                      id="refOneNumber"
                      type="phone"
                      className={`grow`}
                      placeholder="Enter Phone number"
                    />
                  </label>
                </div>

                {/* Reference 2: Fullname */}
                <div className="my-2 formInput">
                  <label
                    htmlFor="refTwoFullname"
                    className={`${style.customLabel}`}
                  >
                    Reference 2: Fullname *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlinePersonOutline
                      size={18}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="refTwoFullname"
                      type="text"
                      className={`grow`}
                      placeholder="Type Fullname here"
                    />
                  </label>
                </div>

                {/* Reference 2: Email */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="refTwoEmail"
                    className={`${style.customLabel}`}
                  >
                    Reference 2: Email *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <MdOutlineAttachEmail
                      size={18}
                      className={` ${style.formIcon} shrink-0`}
                    />
                    <input
                      id="refTwoEmail"
                      type="email"
                      className={`grow`}
                      placeholder="Type Email here"
                    />
                  </label>
                </div>

                {/* Reference 2: Phone */}
                <div className="my-2 formInput">
                  <label
                    htmlFor="refTwoNumber"
                    className={`${style.customLabel}`}
                  >
                    Reference 2: Contact Number *
                  </label>

                  <label
                    className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
                  >
                    <IoMdPhonePortrait
                      size={18}
                      className={`${style.formIcon} shrink-0`}
                    />
                    <input
                      id="refTwoNumber"
                      type="phone"
                      className={`grow`}
                      placeholder="Enter Phone number"
                    />
                  </label>
                </div>
              </div>
            </div>

            <hr className="my-10 border-t border-gray-300" />

            {/* Essay */}
            <div className={`${style.formSection}`}>
              <h2 className={`uppercase secondary-Heading`}>Essay Session</h2>
              <p className="mb-5 body-text">
                The motivational essay is a critical component of this process
                and will be assessed based on how well you follow the guidelines
                provide answers. Your essay should address the following
                questions clearly and thoughtfully: Why are you applying for
                this scholarship?, What specific challenges, issues, or
                obstacles have you faced in continuing your studies? and Why are
                you interested in the program of your choice? (between 350 and
                400 words max)
              </p>
              <div className="w-full">
                {/* Essay Question 1: */}
                <div className="mt-2 formInput">
                  <label
                    htmlFor="essayQuestionOne"
                    className={`${style.customLabel}`}
                  >
                    Why are you interested in this program? *
                  </label>

                  <textarea
                    id="essayQuestionOne"
                    placeholder="150 - 200 words"
                    className={`mt-1 w-full ${style.customFormInput} textarea textarea-lg`}
                  ></textarea>
                </div>

                {/* Essay Question 2: */}
                <div className="mt-10 formInput">
                  <label
                    htmlFor="essayQuestionTwo"
                    className={`${style.customLabel}`}
                  >
                    Why did you choose this field of study? *
                  </label>

                  <textarea
                    id="essayQuestionTwo"
                    placeholder="150 - 200 words"
                    className={`mt-1 w-full ${style.customFormInput} textarea textarea-lg`}
                  ></textarea>
                </div>

                {/* Essay Question 2: */}
                <div className="mt-10 formInput">
                  <label
                    htmlFor="essayQuestionTwo"
                    className={`${style.customLabel}`}
                  >
                    Why do you need this Scholarship? *
                  </label>

                  <textarea
                    id="essayQuestionTwo"
                    placeholder="150 - 200 words"
                    className={`mt-1 w-full ${style.customFormInput} textarea textarea-lg`}
                  ></textarea>
                </div>
              </div>
            </div>

            <hr className="my-10 border-t border-gray-300" />

            {/* Upload Documents */}
            <div className={`${style.formSection}`}>
              <h2 className={`uppercase secondary-Heading`}>
                Upload Documents
              </h2>
              <p className="mb-5 body-text">
                Please note that all uploaded documents are to be in pdf format
                only. Upload the required documents below
              </p>
              <div className="w-full">
                {/* Uplaod 1 */}

                <div className="flex mt-2 formInput">
                  {/* <label
                    htmlFor="essayQuestionOne"
                    className={`${style.customLabel}`}
                  >
                    Why are you interested in this program? *
                  </label> */}

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Pick a file</legend>
                    <input type="file" className="file-input" />
                    <label className="label">Max size 2MB</label>
                  </fieldset>

                  {/* <textarea
                    id="essayQuestionOne"
                    placeholder="150 - 200 words"
                    className={`mt-1 w-full ${style.customFormInput} textarea textarea-lg`}
                  ></textarea> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default UserForm;
