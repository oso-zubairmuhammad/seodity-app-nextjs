import React from "react";

export default function InvoicesCard(props) {
  return (
    <div className="font-rubikRegular">
      <div className="flex flex-col items-center">
        <div className="flex items-end gap-x-2">
          <h1 className="text-4xl font-bold pb-1 ">{props.number}</h1>
        </div>
        <span className="pb-2 text-sm text-[#898C9F] font-semibold">
          {props.name}
        </span>
        <img className="rounded-b-xl w-40" src={props.icon} alt="icon" />
      </div>
    </div>
  );
}
