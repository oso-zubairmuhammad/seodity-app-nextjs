import React from "react";
import Card from "./Card";

export default function DashboardRightSide() {
  return (
    <div className="lg:flex grid grid-cols-2 gap-x-10 pt-10 flex-wrap">
      <Card
        number="3.970"
        name="Users"
        image="/icons/users.svg"
        icon="/icons/zig-zag-arrow-icon.svg"
        percentage="2%"
      />
      <div className="w-px h-32 bg-[#E5E5E5] lg:block hidden"></div>
      <Card
        number="18.045"
        name="Profit"
        image="/icons/profit.svg"
        dollar="$"
      />
      <div className="w-px h-32 bg-[#E5E5E5] lg:block hidden"></div>
      <Card number="1.453" name="Cost" image="/icons/cost.svg" dollar="$" />
      <div className="w-px h-32 bg-[#E5E5E5] lg:block hidden"></div>
      <Card number="44%" name="Resources" image="/icons/resources.svg" />
    </div>
  );
}
