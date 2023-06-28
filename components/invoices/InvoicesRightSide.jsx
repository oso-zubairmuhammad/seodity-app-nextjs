import React from "react";
import Card from "./InvoicesCard";
import Link from "next/link";

export default function InvoicesRightSide() {
  return (
    <div className="flex pt-8 pr-10  flex-col items-end">
      <Card
        number="6"
        name="All invoices"
        icon="/images/invoices-card-icon.png"
      />
      <div className="pt-7">
        <Link
          className="bg-[#E0EDF6] rounded-xl text-[#2586B9] px-5 py-3 text-sm font-semibold font-rubikRegular"
          href={"#"}
        >
          JSON
        </Link>
      </div>
    </div>
  );
}
