import Link from "next/link";
import React from "react";
import { FaFacebook, FaGlobe, FaInstagram } from "react-icons/fa";
import style from "./Footer.module.css";
import { IoMailUnread } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className={`w-full mt-7 ${style.footer}`}>
        <div className="flex items-center gap-1 justify-center">
          <Link href="https://gboweepeaceafrica.org/">
            <FaGlobe size={20} />
          </Link>
          <Link href="mailto:info@gboweepeaceafrica.org">
            <IoMailUnread size={25} />
          </Link>
          <Link href="https://web.facebook.com/GboweePeaceFoundationAfrica">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://www.instagram.com/gboweepeacefoundation_africa/">
            <FaInstagram size={20} />
          </Link>
        </div>

        <div>
          <hr className="my-3 border-t border-gray-300" />
          <p className="text-center">© 2026 GPFA Application Portal </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
