import React from "react";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="flex justify-center items-center font-rubikRegular h-screen w-screen">
      <img
        className="md:block hidden w-screen object-cover h-screen"
        src={"/images/bg-reset-password.png"}
        alt=""
      />

      <img className="h-screen absolute" src={"/images/bg-image-column.png"} />

      <div className="absolute sm:flex justify-center items-center h-full pt-20">
        <div className="flex flex-col justify-center gap-y-12 items-start ">
          <div className="pr-10 w-full">
            <img className="w-60 pr-3" src={"/images/navbar-logo.png"} alt="" />
          </div>

          <h1 className="text-xl font-semibold">Reset password</h1>
          <form className="flex flex-col gap-y-2">
            <label className="font-semibold text-md" htmlFor="">
              Email:
            </label>
            <input
              className="outline-none w-80 bg-[#F7F8FD] rounded-lg h-12 p-4 font-bold text-sm text-[#4D4E52]"
              type="text"
              name=""
              id=""
            />

            <div className="flex gap-x-16 items-start mt-7 flex-col">
              <button className="bg-[#F9E9EC] text-[#E44969] text-sm font-bold px-7 rounded-xl py-3 mb-8 outline-none">
                Reset password
              </button>
              <Link
                className="underline underline-offset-2 text-[#8F90AC] font-bold text-sm pl-2"
                href={"/login"}
              >
                Back to login page
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
