import React from "react";

export default function UserDetailsCard(props) {
  return (
    <div className="font-rubikRegular">
      <div className="flex flex-col items-center">
        <div className="flex items-end">
          <div className="flex items-end">
            <span className="pb-1 text-sm font-semibold">{props.dollar}</span>

            <img className="pr-4" src={props.icon} />
            <h1 className="text-4xl font-bold ">{props.number}</h1>
          </div>
          <div className="flex items-center gap-x-1 pb-1">
            <p className="text-[#4BB0D9] text-sm font-bold">
              {props.percentage}
            </p>
          </div>
        </div>
        <span className="pt-2 pl-5 text-sm text-[#898C9F] font-semibold">
          {props.name}
        </span>
      </div>
    </div>
  );
}
