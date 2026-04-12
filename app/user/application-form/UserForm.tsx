"use client";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import style from "./UserForm.module.css";
import PersonalInfo from "./form-sessions/PersonalInfo";
import ParentInfo from "./form-sessions/ParentInfo";
import HighSchoolCategory from "./form-categories/HighSchoolCategory";
import TvetCategory from "./form-categories/TvetCategory";
import InternationalUniCategory from "./form-categories/InternationalUniCategory";
import LocalUniCategory from "./form-categories/LocalUniCategory";
import Navbar from "@/app/components/navbar/Navbar";
import Steps from "./Steps";
import { useState } from "react";


const UserForm = () => {
   const [activeSection, setActiveSection] = useState("personalInfo")

  const { register, handleSubmit, watch } = useForm();

  const methods = useForm();
  const handleClick = (data: FieldValues) => {
    console.log(data);
  }
  const category = watch("category");
  return (
    <>
    <FormProvider {...methods}>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[26rem_1fr]">
        <aside className="w-full lg:h-screen z-10 sticky top-0 ">
          <Navbar>
            <Steps active={activeSection} selectedCategory={category} />
          </Navbar>
        </aside>

        {/* Main Content */}
        <main
          className={` ${style.infoPage} w-full p-10 lg:px-15 lg:h-screen overflow-y-scroll`}
        >
          <form onSubmit={methods.handleSubmit(handleClick)}>
            {/* Personal Information */}
            <PersonalInfo onActive={() => setActiveSection("personalInfo")} />

            {/* Parental Information */}
            <ParentInfo onActive={() => setActiveSection("parentInfo")} />

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
        </main>
      </div>
      </FormProvider>
    </>
  );
};

export default UserForm;

// import Navbar from "@/app/components/navbar/Navbar";
// import React, { ReactNode } from "react";
// import style from './UserForm.module.css'

// interface Props {
//   children: ReactNode;
// }

// const UserLayout = ({ children }: Props) => {
//   return (
//     <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[26rem_1fr]">
//       {/* Sidebar */}
//       <aside className="w-full lg:h-screen z-10 sticky top-0 ">
//         <Navbar />
//       </aside>

//       {/* Main Content */}
//       <main className={` ${style.infoPage} w-full p-10 lg:px-15 lg:h-screen overflow-y-scroll`}>
//         {children}
//       </main>
//       </div>
//   );
// };

// export default UserLayout;
