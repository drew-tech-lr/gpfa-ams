import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer/Footer";
import UserProfille from "../profile/UserProfille";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <div className={` ${style.navbar} h-full flex flex-col justify-between p-8 `}>
        <div>
          <UserProfille />
        </div>

        <ul className="list hidden lg:block">
          <li className="list-row">Link 1</li>
          <li className="list-row">Link 2</li>
          <li className="list-row">Link 3</li>
          <li className="list-row">Link 4</li>
          <li className="list-row">Link 5</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
