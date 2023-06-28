import React from "react";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="grid grid-cols-12 font-rubikRegular">
      <img
        className="lg:col-span-7 md:col-span-6 col-span-12 md:block hidden w-full object-cover h-screen"
        src={"/images/background-welcome-back.png"}
        alt=""
      />
      <div className="lg:col-span-5 md:col-span-6 col-span-12 flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center gap-y-12 items-start">
          <div className="pr-10 w-full">
            <img className="w-64 pr-3" src={"/images/navbar-logo.png"} alt="" />
          </div>

          <h1 className="text-lg font-semibold md:justify-start flex justify-center w-full">
            Welcome back
          </h1>
          <form className="flex flex-col gap-y-2">
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
            <div className="flex gap-x-16 items-center mt-8">
              <Link
                href={"/dashboard"}
                className="bg-[#C4E5F4] text-[#4493BA] text-sm font-bold px-12 rounded-xl py-3"
              >
                Log in
              </Link>

              <Link
                className="underline underline-offset-4 text-[#8888A2] font-semibold text-sm"
                href={"/reset-password"}
              >
                Forgot password?
              </Link>
            </div>
          </form>
          <div className="flex justify-center w-full">
            <p className="text-sm">
              <span className="pr-1 font-semibold">
                I don't have an account?
              </span>
              <Link href={"/registration"}>
                <span className="underline underline-offset-4 text-[#8888A2] font-semibold">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
