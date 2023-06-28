import React from "react";

export default function DashboardLeftSide() {
  return (
    <div className="font-rubikRegular">
      <p className="md:block font-semibold pt-2 mb-10">Dashboard</p>
      <h1 className="text-3xl font-semibold pt-5 pb-8">Dashboard</h1>
      <div className="flex items-center gap-x-5">
        <img
          className="bg-[#EAECF9] p-3 rounded-xl w-10"
          src={"/icons/calender-icon.svg"}
          alt="calender icon"
        />
        <p className="text-sm font-semibold">01 Sep 2018 - 10 Feb 2020</p>
      </div>
    </div>
  );
}
