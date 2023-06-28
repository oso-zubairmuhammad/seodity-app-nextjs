import React from "react";
import Header from "../components/Header";
import UserDetailsLeftSide from "../components/userdetails/UserDetailsLeftSide";
import UserDetailsRightSide from "../components/userdetails/UserDetailsRightSide";
import Tabs from "../components/userdetails/Tabs";
import UserDetailsChart from "@/components/charts/UserDetailsChart";

export default function userdetails() {
  return (
    <div>
      <Header />
      <div className="md:flex grid grid-cols-1 items-center justify-between">
        <UserDetailsLeftSide />
        <UserDetailsRightSide />
      </div>
      <Tabs />
      <UserDetailsChart />
    </div>
  );
}
