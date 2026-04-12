import React, { ReactNode } from "react";
import UserProfille from "../profile/UserProfille";
import style from "./Navbar.module.css";

interface Props {
  children: ReactNode;
}

const Navbar = ({children} : Props) => {
  return (
    <>
      <div
        className={` ${style.navbar} h-full flex flex-col justify-start p-8 gap-10 `}
      >
        <div>
          <UserProfille />
        </div>

       {children}
      </div>
    </>
  );
};

export default Navbar;
