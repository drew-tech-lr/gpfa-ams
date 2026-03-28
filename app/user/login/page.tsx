// import Slider from "@/app/components/slider/Slider";
// import React from "react";
// import LoginForm from "./LoginForm";

// const loginPage = () => {
//   return (
//     <>
//       <div className="flex">
//         <LoginForm />
//         <Slider />
//       </div>
//     </>
//   );
// };

// export default loginPage;

import Slider from "@/app/components/slider/Slider";
import React from "react";
import LoginForm from "./LoginForm";

const loginPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Login Form */}
      <div className="w-full md:w-1/2">
        <LoginForm />
      </div>

      {/* Slider */}
      <div className="hidden md:flex md:w-1/2">
        <Slider />
      </div>
    </div>
  );
};

export default loginPage;
