import React from "react";

export default function InvoicesLeftSide() {
  return (
    <div className="pl-10 font-rubikRegular">
      <div className="text-xs font-semibold mb-4 mt-3 text-[#525461]">
        <p>Invoices</p>
      </div>
      <h1 className="text-3xl font-semibold pt-2 pb-3 ">Invoices</h1>
      <div className="flex items-center bg-[#F7F8FC] rounded-md shadow md:w-full w-64">
        <div className="flex items-center border-r border-zinc-400 p-2 gap-2">
          <img
            className="w-3 h-4"
            src={"/images/search-icon.png"}
            alt="search icon"
          />
          <input className="outline-none bg-transparent w-full" type="text" />
        </div>
        <div className="px-4">
          <img
            className="w-5"
            src={"/images/input-icon.png"}
            alt="input icon"
          />
        </div>
      </div>
    </div>
  );
}
