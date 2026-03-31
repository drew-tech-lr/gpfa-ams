import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-sky-300 w-auto">
        <Image
          src="/images/gpfa-logo.webp"
          width={80}
          height={80}
          alt={"Gbowee Logo"}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          pariatur dolorum, magni, labore voluptates necessitatibus quis ipsa,
          quibusdam magnam quidem iure laboriosam nobis rerum veritatis
          blanditiis cumque exercitationem quaerat. Facere.
        </p>

      </div>
        <Link href='/user/login'>User Login</Link>
    </>
  );
};

export default Navbar;
