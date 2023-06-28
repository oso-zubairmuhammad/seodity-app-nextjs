import React from "react";
import EventsChart from "./charts/EventsChart";

export default function Events() {
  return (
    <div className="w-full pl-8 pr-14 font-rubikRegular">
      <div className="flex h-screen flex-col gap-y-10 justify-end">
        <div className="grid grid-cols-2 gap-x-10 text-[#515151]">
          <div className="col-span-1">
            <div className="flex items-center gap-x-5 pl-4 mb-8">
              <img
                className="bg-[#EAECF9] p-3 rounded-xl w-10"
                src={"/icons/calender-icon.svg"}
                alt="calender icon"
              />
              <p className="text-sm font-bold pt-2">
                01 Sep 2019 - 10 Aug 2020
              </p>
            </div>
            <EventsChart />
          </div>
          <div className="col-span-1 grid grid-cols-12 gap-x-10">
            <div className="text-sm font-bold pt-32 flex flex-col gap-y-32 col-span-4 items-center">
              <div className="flex flex-col gap-y-16">
                <p>10:35 01 Maj 2020</p>
                <div className="">
                  <p>10:35 10 Apr 2020</p>
                  <div className="flex gap-x-1">
                    <img
                      className="w-2 pt-1"
                      src={"/icons/flag-icon.svg"}
                      alt=""
                    />
                    <p className="text-[#878A9D] pt-2">Events: 1</p>
                  </div>
                </div>
              </div>
              <p>10:35 01 Apr 2020</p>
            </div>
            <div className="flex flex-col gap-y-3 pt-24 font-semibold text-sm col-span-8">
              <p className="bg-[#F9FAFC] px-6 py-7 rounded-xl">
                <span>A new invoice was issued: </span>
                <span className="text-[#AB50C9] underline underline-offset-5">
                  SEOD 357/4/2020
                </span>
              </p>
              <div className="bg-[#F9FAFC] px-6 py-6 rounded-xl flex flex-col gap-y-8">
                <p>
                  7 keywords were added to{" "}
                  <span className="text-[#AB50C9] underline underline-offset-5">
                    mywebsite.co
                  </span>{" "}
                  project.
                </p>
                <div className="">
                  <h4>KEYWORDS:</h4>
                  <p className=" text-[#7D8296] leading-6">
                    web, offers, services, blog, templates, online payment
                    online services.
                  </p>
                </div>
              </div>
              <p className="bg-[#F9FAFC] px-6 py-7 rounded-xl">
                <span>A new invoice was issued: </span>
                <span className="text-[#AB50C9] underline underline-offset-5">
                  SEOD 356/3/2020
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
