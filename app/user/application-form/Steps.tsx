import React from "react";
import style from "@/app/components/navbar/Navbar.module.css";

const steps = [
  { id: "overview", label: "Overview" },
  { id: "personalInfo", label: "Personal Information" },
  { id: "parentInfo", label: "Parental Information" },
  { id: "categoryOfInterest", label: "Category of Interest" },
  { id: "reviewSubmit", label: "Review & Submit" },
];

const categoryLabels: Record<string, string> = {
  highSchool: "High School Graduate",
  tvet: "Technical Vocational Education (TVET) Student",
  localUniversity: "Local University Student",
  intlUniversity: "International University Student",
};

interface Props {
  active: string;
  selectedCategory?: string;
  className?: string;
}

const Steps = ({ active, selectedCategory, className }: Props) => {
  const selectedCategoryStep = selectedCategory
    ? {
        id: "review",
        label: categoryLabels[selectedCategory] ?? "Selected Category",
      }
    : null;

  const renderedSteps = selectedCategoryStep
    ? [...steps.slice(0, 4), selectedCategoryStep, steps[4]]
    : steps;

  return (
    <>
      <div className={`list hidden lg:block text-[18px] ${className ?? ""}`}>
        {renderedSteps.map((step) => (
          <ul key={step.id} className="steps steps-vertical">
            <li
              key={step.id}
              data-content="●"
              className={`step ${active === step.id ? `step ${style.customStep}` : `step`}  `}
            >
              {step.label}
            </li>
          </ul>
        ))}

        {/* <ul className="steps steps-vertical">
          <li data-content="●" className={`step ${style.customStep}`}>
            Overview
          </li>
          <li data-content="●" className={`step`}>
            Personal Information
          </li>
          <li data-content="●" className={`step`}>
            Parental Information
          </li>
          <li data-content="●" className="step">
            Category of Interest
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Steps;
