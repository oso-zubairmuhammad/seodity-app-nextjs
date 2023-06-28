import React from "react";

export default function UserDetailsLeftSide() {
  return (
    <div className="pl-10 font-rubikRegular">
      <div className="flex text-xs font-semibold mb-4 mt-3 text-[#525461] gap-x-3">
        <p className="underline underline-offset-2">Users</p>
        <img src={"/icons/right-arrow-icon.svg"} />
        <p>User details</p>
      </div>
      <h1 className="text-2xl font-semibold pt-2 pb-5">User detils</h1>
      <div className="flex items-center gap-x-3">
        <img className="w-3" src={"/icons/flag-icon.svg"} alt="flag icon" />
        <p className="text-xl">kowalski@gmail.com</p>
        <img
          className="bg-[#EAECF9] px-5 py-3 rounded-xl"
          src={"/icons/three-dots-icon.svg"}
          alt="dots icon"
        />
      </div>
    </div>
  );
}
