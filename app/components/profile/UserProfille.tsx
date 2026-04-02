import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLogout } from "react-icons/md";

const UserProfille = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-3.5">
        <Image
          src="/images/profile.webp"
          width={100}
          height={100}
          alt={"profileSample image"}
        />
        <div>
          <h3 className="third-Heading">Drew@developer</h3>
          <p className="">lpremipsum@gmail.com</p>
          <hr className="my-1 border-t border-gray-300" />

            <Link className="font-semibold flex items-center gap-1.5 w-full" href="/">
              <MdLogout width={10} />
              Signout
            </Link>
          </div>
        </div>
    </>
  );
};

export default UserProfille;
