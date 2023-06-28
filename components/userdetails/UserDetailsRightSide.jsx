import React from "react";
import UserDetailsCard from "./UserDetailsCard";

export default function UserDetailsRightSide() {
  return (
    <div className="xl:flex grid lg:grid-cols-3 md:pt-10 pt-5 md:pr-10 pr-0 grid-cols-2 gap-x-9 gap-y-5  ">
      <UserDetailsCard
        icon="/icons/diamond-icon.svg"
        number="Gold"
        name="Status"
      />
      <div className="w-px h-28 bg-[#E5E5E5] xl:block hidden"></div>
      <UserDetailsCard number="346" name="Page visits" />
      <div className="w-px h-28 bg-[#E5E5E5] xl:block hidden"></div>
      <UserDetailsCard number="6" name="Projects" />
      <div className="w-px h-28 bg-[#E5E5E5] xl:block hidden"></div>
      <UserDetailsCard number="79%" name="Resources" />
      <div className="w-px h-28 bg-[#E5E5E5] xl:block hidden"></div>
      <UserDetailsCard dollar="$" number="585" name="Profit" />
      <div className="w-px h-28 bg-[#E5E5E5] xl:block hidden"></div>
      <UserDetailsCard dollar="$" number="285" name="Cost" />
    </div>
  );
}
