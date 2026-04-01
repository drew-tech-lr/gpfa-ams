import Navbar from "@/app/components/navbar/Navbar";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    // <div className=" grid grid-cols-1 lg:grid-cols-[26rem_1fr]">
    //   {/* Sidebar */}
    //   <aside className="bg-amber-100 w-full lg:h-screen">
    //     <Navbar />
    //   </aside>

    //   {/* Main Content */}
    //   <main className="w-full p-10 lg:p-20 overflow-y-auto">{children}</main>
    // </div>

    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[26rem_1fr]">
      {/* Sidebar */}
      <aside className="bg-amber-100 w-full lg:h-screen overflow-y-auto">
        <Navbar />
      </aside>

      {/* Main Content */}
      <main className="w-full p-10 lg:px-15 lg:h-screen overflow-none">
        {children}
      </main>
      </div>
  );
};

export default UserLayout;
