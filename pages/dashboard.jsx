import React from "react";
import Header from "@/components/Header";
import DashboardLeftSide from "@/components/dashboard/DashboardLeftSide";
import DashboardRightSide from "@/components/dashboard/DashboardRightSide";
import SubscriptionsChart from "@/components/charts/SubscriptionsChart";
import ProfitsAndCostsChart from "@/components/charts/ProfitsAndCostsChart";
import ResourcesChart from "@/components/charts/ResourcesChart";

export default function dashboard() {
  return (
    <div className="">
      {/* dashboard */}
      <div>
        <Header />
        <div className="md:flex sm:mx-auto flex-wrap items-center justify-between px-10">
          <DashboardLeftSide />
          <DashboardRightSide />
        </div>
        <div className="grid w-screen pt-32 lg:grid-cols-3 justify-center items-center gap-x-2 md:col-span-1">
          <SubscriptionsChart />
          <ProfitsAndCostsChart />
          <ResourcesChart />
        </div>
      </div>
    </div>
  );
}
