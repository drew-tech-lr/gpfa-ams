import React from "react";
import style from "./UserForm.module.css";
import { MdOutlineSchool } from "react-icons/md";
import Reference from "./Reference";
import EducationBackground from "./EducationBackground";

const internationalUniCategory = () => {
  return (
    <>
      <div className={`mt-10`}>
        <div className={`${style.formSectionHeader}`}>
          <h1 className="primary-Heading">
            Undergraduate Studies - International Session
          </h1>
          <p className="body-text">This section collects basi......</p>
        </div>

        {/* Education Background */}
        <EducationBackground />

        {/* Program of interest */}
        <div className={`${style.formSection}`}>
          <h3 className={`uppercase third-Heading`}>
            Program of Interest
          </h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* University currently attending */}
            <div className="mt-2 formInput">
              <label htmlFor="intendedUni" className={`${style.customLabel}`}>
                University currently attending *
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
                  placeholder="Name of University/College"
                />
              </label>
            </div>

            {/* Program Studying */}
            <div className="mt-2 formInput">
              <label htmlFor="fieldOfStudy" className={`${style.customLabel}`}>
                Program Studying *
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
                  placeholder="Ex: Information Technology - BSc"
                />
              </label>
            </div>

            {/* Completion Year */}
            <div className="mt-2 formInput">
              <label
                htmlFor="completionYear"
                className={`${style.customLabel}`}
              >
                Year of Completion *
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
                  placeholder="Ex: 2years"
                />
              </label>
            </div>

            {/* Study Level */}
            <div className="my-1 formInput">
              <label htmlFor="studyLevel" className={`${style.customLabel}`}>
                Study Level *
              </label>

              <select
                id="studyLevel"
                name="studyLevel"
                defaultValue=""
                className={`pl-5 select input input-lg w-full ${style.customFormInput} ${style.selectInput}`}
              >
                <option value="" disabled>
                  Select your status --
                </option>
                <option value="semOneFreshmen">1st-Sem. Freshmen</option>
                <option value="semTwoFreshmen">2nd-Sem. Freshmen</option>
                <option value="sophomore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            {/* ID Number */}
            <div className="mt-2 formInput">
              <label htmlFor="idNo" className={`${style.customLabel}`}>
                Student ID Number *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlineSchool
                  size={20}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="idNo"
                  type="number"
                  className={`grow`}
                  placeholder="Ex: 2321-321"
                />
              </label>
            </div>

            {/* Department */}
            <div className="mt-2 formInput">
              <label htmlFor="department" className={`${style.customLabel}`}>
                Department *
              </label>

              <label
                className={`input input-lg w-full flex items-center gap-2 ${style.customFormInput}`}
              >
                <MdOutlineSchool
                  size={20}
                  className={` ${style.formIcon} shrink-0`}
                />
                <input
                  id="department"
                  type="text"
                  className={`grow`}
                  placeholder="Ex: Computer Science Department"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Reference */}
        <Reference />

        <hr className="my-10 border-t border-gray-300" />

        {/* Essay */}
        <div className={`${style.formSection}`}>
          <h2 className={`uppercase secondary-Heading`}>Essay Session</h2>
          <p className="mb-5 body-text">
            The motivational essay is a critical component of this process and
            will be assessed based on how well you follow the guidelines provide
            answers. Your essay should address the following questions clearly
            and thoughtfully: Why are you applying for this scholarship?, What
            specific challenges, issues, or obstacles have you faced in
            continuing your studies? and Why are you interested in the program
            of your choice? (between 350 and 400 words max)
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
          <h2 className={`uppercase secondary-Heading`}>Upload Documents</h2>
          <p className="mb-5 body-text">
            Please note that all uploaded documents are to be in pdf format
            only. Upload the required documents below
          </p>

          <div className="w-full">
            {/* Uplaod 1: Passport-size photo */}
            <div className="flex mt-2 formInput">
              <fieldset className="fieldset flex flex-col-reverse lg:flex-row gap-1 lg:gap-9  w-full">
                <input
                  type="file"
                  className={`file-input ${style.customFormInput}`}
                />
                <div>
                  <legend className="fieldset-legend text-[17px]">
                    Upload Passport-size photo *
                  </legend>
                  <label className="label text-[15px]">Max size 2MB</label>
                </div>
              </fieldset>
            </div>

            {/* Uplaod 2: Gradesheet */}
            <div className="flex mt-2 formInput">
              <fieldset className="fieldset flex flex-col-reverse lg:flex-row gap-1 lg:gap-9 w-full">
                <input
                  type="file"
                  className={`file-input ${style.customFormInput}`}
                />
                <div>
                  <legend className="fieldset-legend text-[17px]">
                    Previous Semester Gradesheet *
                  </legend>
                  <label className="label text-[15px]">Max size 2MB</label>
                </div>
              </fieldset>
            </div>

            {/* Uplaod 3: Recommendation 1 */}
            <div className="flex mt-2 formInput">
              <fieldset className="fieldset flex flex-col-reverse lg:flex-row gap-1 lg:gap-9 w-full">
                <input
                  type="file"
                  className={`file-input ${style.customFormInput}`}
                />
                <div>
                  <legend className="fieldset-legend text-[17px]">
                    Recommendation Letter 1 *
                  </legend>
                  <label className="label text-[15px]">Max size 2MB</label>
                </div>
              </fieldset>
            </div>

            {/* Uplaod 4: Recommendation 2 */}
            <div className="flex mt-2 formInput">
              <fieldset className="fieldset flex flex-col-reverse lg:flex-row gap-1 lg:gap-9 w-full">
                <input
                  type="file"
                  className={`file-input items-end ${style.customFormInput}`}
                />
                <div>
                  <legend className="fieldset-legend text-[17px]">
                    Recommendation Letter 2 *
                  </legend>
                  <label className="label text-[15px]">Max size 2MB</label>
                </div>
              </fieldset>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default internationalUniCategory;
