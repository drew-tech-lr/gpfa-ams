import Link from "next/link";
import React from "react";
import { FaFacebook, FaGlobe, FaInstagram } from "react-icons/fa";
import style from "./Footer.module.css";
import { IoMailUnread } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className={`mt-7 ${style.footer}`}>
        <div className="flex items-center gap-1 justify-center">
          <Link href="/">
            <FaGlobe size={20} />
          </Link>
          <Link href="/">
            <IoMailUnread size={25} />
          </Link>
          <Link href="/">
            <FaFacebook size={20} />
          </Link>
          <Link href="/">
            <FaInstagram size={20} />
          </Link>
        </div>

        <div className="w-full">
          <hr className="my-3 border-t border-gray-300" />
          <p className="text-center">© 2026 GPFA Scholar Management System</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
