// import React from 'react'

// const Trial = () => {
//   return (
//     <div>Trial</div>
//   )
// }

// export default Trial

"use client";

import { useState } from "react";

export default function Trial() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Step 1",
      content: <p>Welcome to step 1</p>,
    },
    {
      title: "Step 2",
      content: <p>This is step 2</p>,
    },
    {
      title: "Step 3",
      content: <p>You are now on step 3</p>,
    },
    {
      title: "Step 4",
      content: <p>You are now on step 3</p>,
    },
    {
      title: "Step 5",
      content: <p>You are now on step 3</p>,
    },
    {
      title: "Step 6",
      content: <p>You are now on step 3</p>,
    },
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>{steps[step].title}</h1>
      <div style={{ margin: "20px 0" }}>{steps[step].content}</div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={prevStep} disabled={step === 0}>
          Previous
        </button>

        <button onClick={nextStep} disabled={step === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
