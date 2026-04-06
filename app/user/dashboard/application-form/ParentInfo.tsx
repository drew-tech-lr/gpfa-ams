import React from "react";
import style from "./UserForm.module.css";
import { MdOutlineAttachEmail, MdOutlinePersonOutline } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const ParentInfo = () => {
  return (
    <>
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
            <label htmlFor="parentFullname" className={`${style.customLabel}`}>
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
            <label htmlFor="parenntAddress" className={`${style.customLabel}`}>
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
    </>
  );
};

export default ParentInfo;
