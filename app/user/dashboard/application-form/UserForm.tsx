"use client";
import { useForm } from "react-hook-form";
import style from "./UserForm.module.css";
import PersonalInfo from "./PersonalInfo";
import ParentInfo from "./ParentInfo";
import HighSchoolCategory from "./HighSchoolCategory";
import TvetCategory from "./TvetCategory";
import InternationalUniCategory from "./InternationalUniCategory";
import LocalUniCategory from "./LocalUniCategory";

const UserForm = () => {
  const { register, watch } = useForm();
  const category = watch("category");
  return (
    <>
      <form action="">
        <PersonalInfo />
        <ParentInfo />

        {/* Category of Interest */}
        <div className="section-container">
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
                <option value="intlUniversity">
                  {" "}
                  International University Student{" "}
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* High School Category */}
        {category === "highSchool" && <HighSchoolCategory />}

        {/* TVET Category */}
        {category === "tvet" && <TvetCategory />}

        {/* Undergraduate studies */}
        {category === "localUniversity" && <LocalUniCategory />}

        {/* international  studies */}
        {category === "intlUniversity" && <InternationalUniCategory />}
      </form>
    </>
  );
};

export default UserForm;
