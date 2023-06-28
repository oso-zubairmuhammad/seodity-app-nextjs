import React from "react";
import Link from "next/link";

export default function Tabs() {
  return (
    <div className="mt-10 font-rubikRegular">
      <div className="md:flex justify-between font-medium px-11 ">
        <div className="md:flex text-center text-[#555B6B] gap-x-11 text-md font-semibold mb-5">
          <h1>Projects</h1>
          <h1>Resources</h1>
          <h1>
            <Link href={"#"}>Events</Link>
          </h1>
          <h1>Invoices</h1>
          <h1>Settings</h1>
        </div>

        <div className="pb-7 md:block text-center">
          <Link
            className="bg-[#E0EDF6] rounded-lg text-[#2586B9] px-4 py-3 text-sm font-semibold font-rubikRegular"
            href={"#"}
          >
            JSON
          </Link>
        </div>
      </div>
      <div className="w-full h-px bg-[#E5E5E5]"></div>
    </div>
  );
}
