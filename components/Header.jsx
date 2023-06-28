import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="lg:flex hidden justify-between items-center py-3 px-10 flex-wrap">
        <img
          className="order-1"
          src={"/images/navbar-logo.png"}
          alt="navbar logo"
        />

        <ul className="order-2 flex gap-7 items-center justify-center">
          <li>
            <Link href={"/dashboard"}>
              <img
                className="px-3 py-3 rounded-xl"
                src={"/icons/home-icon.svg"}
                alt="home icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-6"
                src={"/icons/nav-icon1.svg"}
                alt="nav icon 1"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-6"
                src={"/icons/nav-icon2.svg"}
                alt="nav icon 2"
              />
            </Link>
          </li>
          <li>
            <Link href={"/user-details"}>
              <img
                className="w-4 h-5"
                src={"/icons/user-details-icon.svg"}
                alt="user details icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-5"
                src={"/icons/invoices-icon.svg"}
                alt="invoices icon"
              />
            </Link>
          </li>
          <li>
            <Link href={"/invoices"}>
              <img
                className="w-5"
                src={"icons/nav-icon3.svg"}
                alt="nav icon 3"
              />
            </Link>
          </li>
        </ul>
        <div className="order-3 lg:flex gap-x-8 items-center justify-end">
          <div className="flex items-center gap-x-2">
            <p className="font-rubikRegular ">kowalski@gmail</p>
            <img
              className="w-2 h-2"
              src={"/icons/down-arrow-icon.svg"}
              alt="down arrow icon"
            />
          </div>

          <Link
            className="text-sm bg-[#E0EDF6] px-4 py-2 rounded-lg font-semibold text-[#2A82B4] font-rubikRegular"
            href={"/login"}
          >
            Log out
          </Link>
        </div>
      </div>

      {/* duplicate header */}
      <div className="lg:hidden md:flex justify-between items-center py-3 flex-wrap">
        <div className="lg:order-1 order-1 flex justify-between w-full">
          <img src={"/images/navbar-logo.png"} alt="navbar logo" />

          <div className="flex md:gap-x-1 items-center justify-end">
            <div className="md:flex hidden items-center gap-x-2">
              <p className="font-rubikRegular">kowalski@gmail</p>
              <img
                className="w-2 h-2"
                src={"/icons/down-arrow-icon.svg"}
                alt="down arrow icon"
              />
            </div>

            <Link
              className="text-sm bg-[#E0EDF6] px-4 py-2 rounded-lg font-semibold text-[#2A82B4] font-rubikRegular"
              href={"/login"}
            >
              Log out
            </Link>
          </div>
        </div>

        <div className="lg:order-2 order-2 flex justify-center w-full">
          <ul className="flex gap-7 items-center justify-center  ">
            <li>
              <Link href={"/dashboard"}>
                <img
                  className="px-3 py-3 rounded-xl"
                  src={"/icons/home-icon.svg"}
                  alt="home icon"
                />
              </Link>
            </li>
            <li>
              <Link href={"/invoices"}>
                <img
                  className="w-6"
                  src={"/icons/nav-icon1.svg"}
                  alt="nav icon 1"
                />
              </Link>
            </li>
            <li>
              <Link href={"/invoices"}>
                <img
                  className="w-6"
                  src={"/icons/nav-icon2.svg"}
                  alt="nav icon 2"
                />
              </Link>
            </li>
            <li>
              <Link href={"/user-details"}>
                <img
                  className="w-4 h-5"
                  src={"/icons/user-details-icon.svg"}
                  alt="user details icon"
                />
              </Link>
            </li>
            <li>
              <Link href={"/invoices"}>
                <img
                  className="w-5"
                  src={"/icons/invoices-icon.svg"}
                  alt="invoices icon"
                />
              </Link>
            </li>
            <li>
              <Link href={"/invoices"}>
                <img
                  className="w-5"
                  src={"icons/nav-icon3.svg"}
                  alt="nav icon 3"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px bg-[#E5E5E5]"></div>
    </div>
  );
}
