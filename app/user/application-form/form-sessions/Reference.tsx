import React from "react";
import style from "../UserForm.module.css";
import { MdOutlineAttachEmail, MdOutlinePersonOutline } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";

const Reference = () => {
  return (
    <>
      <div className={`${style.formSection}`}>
        <h3 className={`uppercase third-Heading`}>Reference</h3>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Reference 1: Fullname */}
          <div className="my-2 formInput">
            <label htmlFor="refOneFullname" className={`${style.customLabel}`}>
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
            <label htmlFor="refOneEmail" className={`${style.customLabel}`}>
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
            <label htmlFor="refOneNumber" className={`${style.customLabel}`}>
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
            <label htmlFor="refTwoFullname" className={`${style.customLabel}`}>
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
            <label htmlFor="refTwoEmail" className={`${style.customLabel}`}>
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
            <label htmlFor="refTwoNumber" className={`${style.customLabel}`}>
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
    </>
  );
};

export default Reference;
