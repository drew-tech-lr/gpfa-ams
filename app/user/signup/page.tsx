import React from "react";
import SignupForm from "./SignupForm";
import Slider from "@/app/components/slider/Slider";

const signupPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Slider */}
        <div className="order-1 lg:order-1">
          <Slider />
        </div>
        {/* Login Form */}
        <div className="w-full order-2 lg:order-2">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default signupPage;
