"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "./LoginForm.module.css";
import Button from "@/app/components/button/Button";
import { MdNavigateNext } from "react-icons/md";
import Footer from "@/app/components/footer/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col min-h-screen items-center justify-center gap-10  w-full ${style.loginFormContainer}`}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-1 justify-center">
          <Image
            src="/images/gpfa-logo.webp"
            alt="gpfa-logo"
            height={60}
            width={60}
          />
          <h4 className="third-Heading">Applicant Login</h4>
          <p className="body-text text-center">Enter your detail to login</p>
        </div>

        <form className="w-full px-10" action="">
          {/* Username */}
          <div className="username">
            <label className={`floating-label ${style.customFloating}`}>
              <span>Username</span>
              <input
                type="text"
                placeholder="Username"
                className={`input w-full py-5.5 ${style.customInput}`}
              />
            </label>
          </div>

          {/* Password */}
          <div className="password mt-8">
            <div className="relative">
              <label className={`floating-label ${style.customFloating}`}>
                <span>Password</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`input w-full py-5.5 pr-12 ${style.customInput}`}
                />
              </label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <div className="mt-3 flex w-full items-center justify-between forgetPassword">
            <span>
              <input className="mr-2" id="rememberLogin" type="radio" />
              <label htmlFor="rememberLogin">Remember Me</label>
            </span>

            <span>
              <Link href="/">Forget Password?</Link>
            </span>
          </div>

          {/* Login Button */}
          <div className="button-container mt-10">
            <Button
              handleClick={() => router.push("/")}
              btnLabel="Login"
              variant="primary"
              className="w-full py-5.4 text-1xl"
              icon={<MdNavigateNext color="#ffff" size={20} />}
            />
          </div>
          <span className="flex items-center justify-center mt-3">
            <p>
              <strong>
                <Link href="/signup" className="body-text">
                  Singup
                </Link>
              </strong>{" "}
              to Create Account
            </p>
          </span>
        </form>

        {/* Footer */}
        <div className=" align-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
