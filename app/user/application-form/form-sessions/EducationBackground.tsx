import React from "react";
import style from "../UserForm.module.css";
import { MdOutlineSchool } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";
import { GrAggregate } from "react-icons/gr";
import { useForm } from "react-hook-form";

const EducationBackground = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();
  
  return (
    <>
      <div className={`${style.formSection}`} id="educationBackground">
        <h3 className={`uppercase third-Heading`}>Education Background</h3>
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
              {...register('highSchoolGraduated')}
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
            <label htmlFor="yearGraduated" className={`${style.customLabel}`}>
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
            <label htmlFor="highSchoolAvg" className={`${style.customLabel}`}>
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
            <label htmlFor="wassceAggregate" className={`${style.customLabel}`}>
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
    </>
  );
};

export default EducationBackground;
