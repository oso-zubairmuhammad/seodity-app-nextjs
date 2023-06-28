import React from "react";
import UserDetailsCard from "./UserDetailsCard";

export default function UserDetailsRightSide() {
  return (
    <div className="xl:flex  grid lg:grid-cols-3 grid-cols-2 gap-x-9 gap-y-5  pt-10 pr-10">
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
