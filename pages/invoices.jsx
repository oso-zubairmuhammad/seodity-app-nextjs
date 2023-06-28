import React from "react";
import Header from "../components/Header";
import InvoicesLeftSide from "../components/invoices/InvoicesLeftSide";
import InvoicesRightSide from "../components/invoices/InvoicesRightSide";
import Table from "../components/invoices/Table";

export default function invoices() {
  return (
    <div>
      <Header />
      <div className="md:flex grid grid-cols-1 justify-between">
        <InvoicesLeftSide />
        <InvoicesRightSide />
      </div>
      <div className="w-full">
        <Table />
      </div>
    </div>
  );
}
