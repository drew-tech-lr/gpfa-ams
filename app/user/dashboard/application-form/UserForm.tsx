import React from "react";
import style from "./UserForm.module.css";

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

        <div className="form-section w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Fullname */}
          <div className="mt-5 my-1 lg:col-span-2">
            <label htmlFor="" className="block">
              What is your name?
            </label>
            <input
              type="text"
              placeholder="Error"
              className="input w-full input-md"
            />
          </div>

          {/* Field 2 */}
          <div className="mt-5 my-1">
            <label htmlFor="" className="block">
              What is your name?
            </label>
            <input
              type="text"
              placeholder="Error"
              className="input w-full input-md"
            />
          </div>

          {/* Field 3 */}
          <div className="my-1">
            <label htmlFor="" className="block">
              What is your name?
            </label>
            <input
              type="text"
              placeholder="Error"
              className="input w-full input-md"
            />
          </div>

          {/* Field 4 */}
          <div className="my-1">
            <label htmlFor="" className="block">
              What is your name?
            </label>
            <input
              type="text"
              placeholder="Error"
              className="input w-full input-md"
            />
          </div>
          
          {/* Field 4 */}
          <div className="my-1">
            <label htmlFor="" className="block">
              What is your name?
            </label>
            <input
              type="text"
              placeholder="Error"
              className="input w-full input-md"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
