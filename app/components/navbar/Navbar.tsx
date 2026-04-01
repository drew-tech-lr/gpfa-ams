import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer/Footer";

const Navbar = () => {
  return (
    <>
      <div className=" h-full flex flex-col justify-between p-8 ">
        <div>
          <Image
            src="/images/gpfa-logo.webp"
            width={80}
            height={80}
            alt={"Gbowee Logo"}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            pariatur dolorum...
          </p>
        </div>
        <Link href="/user/login">User Login</Link>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
