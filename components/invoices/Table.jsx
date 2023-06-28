import React from "react";
import Link from "next/link";

export default function Table() {
  return (
    <div className="mt-7 font-rubikRegular">
      <div className="h-px bg-[#E5E5E5]"></div>
      <div className="lg:px-12 px-0 mt-px font-rubikRegular">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-md">
              <tr>
                <th scope="col" className="px-1 py-3">
                  <div className="flex items-center gap-x-3">
                    <span> Number</span>
                    <img
                      className="w-7 p-2 rounded-md bg-[#F8F9FD]"
                      src={"icons/up-down-arrow-icon.svg"}
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-x-3">
                    <span> Email address</span>
                    <img
                      className="w-7 p-2 rounded-md bg-[#F8F9FD]"
                      src={"icons/up-down-arrow-icon.svg"}
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-x-3">
                    <span> Subscription</span>
                    <img
                      className="w-7 p-2 rounded-md bg-[#F8F9FD]"
                      src={"icons/up-down-arrow-icon.svg"}
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-x-3">
                    <span> Amount</span>
                    <img
                      className="w-7 p-2 rounded-md bg-[#F8F9FD]"
                      src={"icons/up-down-arrow-icon.svg"}
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-x-3">
                    <span> Created</span>
                    <img
                      className="w-7 p-2 rounded-md bg-[#F8F9FD]"
                      src={"icons/up-down-arrow-icon.svg"}
                      alt=""
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F8F9FE]">
                <td className="px-6 py-4">FV 6/2/2021</td>
                <td className="px-6 py-4">m.kowalski@gmail.com</td>
                <td className="flex px-6 py-3 gap-x-2">
                  <img className="w-5" src={"/icons/diamond-icon.svg"} alt="" />
                  <span className="">Gold</span>
                </td>
                <td className="px-6 py-4">$ 89</td>
                <td className="px-6 py-4">10:35 01 Jan 2021</td>
                <td className="pr-2">
                  <img
                    className="w-1 h-4"
                    src={"/icons/three-dots-icon.svg"}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">FV 5/2/2021</td>
                <td className="px-6 py-4">amna.malinowska@gmail.com</td>
                <td className="flex px-6 py-3 gap-x-2">
                  <img className="w-5" src={"/icons/star-icon.svg"} alt="" />
                  <span className="">Silver</span>
                </td>
                <td className="px-6 py-4">$ 39</td>
                <td className="px-6 py-4">8:15 01 Feb 2021</td>
                <td className="pr-2">
                  <img
                    className="w-1 h-4"
                    src={"/icons/three-dots-icon.svg"}
                    alt=""
                  />
                </td>
              </tr>
              <tr className="bg-[#F8F9FE]">
                <td className="px-6 py-4">FV 4/1/2021</td>
                <td className="px-6 py-4">mariusz.kowal@gmail.com</td>
                <td className="flex px-6 py-3 gap-x-2">
                  <img className="w-5" src={"/icons/diamond-icon.svg"} alt="" />
                  <span className="">Gold</span>
                </td>
                <td className="px-6 py-4">$ 89</td>
                <td className="px-6 py-4">12:43 04 Feb 2021</td>
                <td className="pr-2">
                  <img
                    className="w-1 h-4"
                    src={"/icons/three-dots-icon.svg"}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">FV 3/6/2020</td>
                <td className="px-6 py-4">m.k@gmail.com</td>
                <td className="flex px-6 py-3 gap-x-2">
                  <img className="w-5" src={"/icons/star-icon.svg"} alt="" />
                  <span className="">Silver</span>
                </td>
                <td className="px-6 py-4">$ 39</td>
                <td className="px-6 py-4">10:35 01 Jan 2021</td>
                <td className="pr-2">
                  <img
                    className="w-1 h-4"
                    src={"/icons/three-dots-icon.svg"}
                    alt=""
                  />
                </td>
              </tr>
              <tr className="bg-[#F8F9FE]">
                <td className="px-6 py-4">FV 2/2/2020</td>
                <td className="px-6 py-4">olgamaciejewska@gmail.com</td>
                <td className="flex px-6 py-3 gap-x-2">
                  <img className="w-5" src={"/icons/diamond-icon.svg"} alt="" />
                  <span className="">Gold</span>
                </td>
                <td className="px-6 py-4">$ 89</td>
                <td className="px-6 py-4">8:35 02 Sep 2021</td>
                <td className="pr-2">
                  <img
                    className="w-1 h-4"
                    src={"/icons/three-dots-icon.svg"}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">FV 1/1/2020</td>
                <td className="px-6 py-4">jan.mielewczyk@gmail.com</td>
                <td className="flex px-6 py-3 gap-x-2">
                  <img className="w-5" src={"/icons/batch-icon.svg"} alt="" />
                  <span className="">Bronze</span>
                </td>
                <td className="px-6 py-4">$ 9</td>
                <td className="px-6 py-4">11:30 01 Sep 2021</td>
                <td className="pr-2">
                  <img
                    className="w-1 h-4"
                    src={"/icons/three-dots-icon.svg"}
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex text-sm justify-end gap-x-3 mb-4 mt-5 font-bold">
          <Link className="text-[#9C9DB1]" href={"/dashboard"}>
            Previous
          </Link>
          <p className="underline underline-offset-2">1</p>
          <Link className="text-[#9C9DB1]" href={"#"}>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
