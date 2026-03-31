import Navbar from "@/app/components/navbar/Navbar";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-[26rem_1fr]">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:h-screen">
        <Navbar />
      </aside>

      {/* Main Content */}
      <main className="bg-amber-100 overflow-auto p-4">{children}</main>
    </div>
  );
};

export default UserLayout;
