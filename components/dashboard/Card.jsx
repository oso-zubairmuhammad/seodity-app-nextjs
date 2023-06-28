import React from "react";

export default function Card(props) {
  return (
    <div className="font-rubikRegular">
      <div className="flex flex-col items-center">
        <div className="flex items-end gap-x-2">
          <div className="flex gap-x-1 items-end">
            <span className="pb-2 text-sm font-semibold ">{props.dollar}</span>
            <h1 className="text-4xl font-bold pb-1 ">{props.number}</h1>
          </div>
          <div className="flex items-center gap-x-1 pb-1">
            <img className="w-3" src={props.icon} />
            <p className="text-[#4BB0D9] text-sm font-bold">
              {props.percentage}
            </p>
          </div>
        </div>
        <img
          className="px-10 w-40 h-20 rounded-b-xl bg-gradient-to-t from-[#F2F6FF]"
          src={props.image}
          alt="icon"
        />
        <span className="pt-2 text-sm text-[#898C9F] font-semibold">
          {props.name}
        </span>
      </div>
    </div>
  );
}
