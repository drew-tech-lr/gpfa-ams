

import Slider from "@/app/components/slider/Slider";
import React from "react";
import LoginForm from "./LoginForm";

const loginPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Login Form */}
      <div className="w-full order-2 lg:order-1">
        <LoginForm />
      </div>

      {/* Slider */}
      <div className="order-1 lg:order-2">
        <Slider />
      </div>
    </div>
  );
};

export default loginPage;
