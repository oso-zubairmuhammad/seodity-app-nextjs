import React from "react";
import Link from "next/link";

export default function RegistrationForm() {
  return (
    <div className="grid grid-cols-12 font-rubikRegular">
      <div className="lg:col-span-5 md:col-span-6 col-span-12 flex justify-center h-screen">
        <div className="flex flex-col justify-center gap-y-12 items-start">
          <div className="pr-10 w-full">
            <img className="w-64 pr-3" src={"/images/navbar-logo.png"} alt="" />
          </div>
          <h1 className="text-lg font-semibold">Registration</h1>
          <form className="flex flex-col gap-y-2 pt-px">
            <label className="font-semibold text-md" htmlFor="">
              Email:
            </label>
            <input
              className="outline-none bg-[#F7F8FD] rounded-lg h-12 p-4 font-semibold text-sm text-[#4D4E52]"
              type="text"
              name=""
              id=""
            />
            <label className="pt-5 font-semibold text-md" htmlFor="">
              Password:
            </label>
            <input
              className="outline-none bg-[#F7F8FD] rounded-lg h-12 p-4 font-bold"
              type="password"
              name=""
              id=""
            />
            <label className="pt-5 font-semibold text-md" htmlFor="">
              Confirm Password:
            </label>
            <input
              className="outline-none bg-[#F7F8FD] rounded-lg h-12 p-4 font-bold"
              type="password"
              name=""
              id=""
            />
            <div className="flex gap-x-16 items-center mt-8 md:gap-x-5">
              <Link
                className="bg-[#C4E5F4] text-[#4493BA] text-sm font-bold px-12 rounded-xl py-3"
                href={"/login"}
              >
                <span>Register</span>
              </Link>
              <p className="font-semibold text-sm">
                <span className="pr-1">I have an account:</span>
                <Link href={"/login"}>
                  <span className="underline underline-offset-4 text-[#8888A2]">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <img
        className="lg:col-span-7 md:col-span-6 col-span-12 md:block hidden w-full object-cover h-screen"
        src={"/images/bg-registration.png"}
      />
    </div>
  );
}
