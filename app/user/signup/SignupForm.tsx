"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "./SignupForm.module.css";
import Button from "@/app/components/button/Button";
import Footer from "@/app/components/footer/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col  min-h-screen items-center justify-between py-5 p-2 lg:p-15 w-full ${style.signupFormContainer}`}
      >
        <div className="w-full pt-5">
          {/* Header */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/gpfa-logo.webp"
              alt="gpfa-logo"
              height={60}
              width={60}
            />
            <h4 className="third-Heading text-center px-8">
              Create your Account{" "}
            </h4>
            <p className="body-text text-center">Enter your details below</p>
          </div>

          <form className="w-full pt-8 px-10" action="">
            {/* Fullnamee */}
            <div className="username">
              <label className={`floating-label ${style.customFloating}`}>
                <span>Enter Fullname</span>
                <input
                  type="text"
                  placeholder="Fullname"
                  className={`input w-full py-5.5 ${style.customInput}`}
                />
              </label>
            </div>

            {/* Email */}
            <div className="email mt-5">
              <label className={`floating-label ${style.customFloating}`}>
                <span>Enter Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  className={`input w-full py-5.5 ${style.customInput}`}
                />
              </label>
            </div>

            {/* Password */}
            <div className="flex flex-col lg:flex-row">
              <div className="password w-full mt-5 mr-3lg:mr-3 lg:mt-5 lg:mr-0">
                <div className="relative">
                  <label className={`floating-label  ${style.customFloating}`}>
                    <span>Enter Password</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className={`input w-full py-5.5 pr-12 ${style.customInput}`}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="confirmPassword w-full mt-5 lg:ml-3 lg:mt-5 lg:m-0 ">
                <div className="relative">
                  <label className={`floating-label ${style.customFloating}`}>
                    <span>Confirm Password</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className={`input w-full py-5.5 pr-12 ${style.customInput}`}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <div className="button-container mt-10">
              <Link href="/user/signup">
                <Button
                  btnLabel="Create Account"
                  variant="primary"
                  className="w-full py-5.4 text-1xl"
                />
              </Link>
            </div>

            {/* SignUp Link */}
            <span className="flex items-center justify-center mt-3">
              <span>
                Already have an Account?
                <Link href="/user/login" className="font-semibold">
                  {" "}
                  Login
                </Link>
              </span>
            </span>
          </form>
        </div>

        {/* Footer */}
        <div className="px-10 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SignupForm;
