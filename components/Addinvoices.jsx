import React from "react";

export default function Addinvoices() {
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex  items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-full sm:max-w-xl">
              <div className="bg-white">
                <img
                  className="w-full h-3 pl-[535px] mt-2"
                  src={"/icons/x-icon.svg"}
                  alt=""
                />
                <div className="font-rubikRegular">
                  <div className="rounded-2xl my-7 px-8 py-5 flex flex-col gap-y-10">
                    <h1 className="font-bold text-lg">Add invoice</h1>

                    <div className="">
                      <form className="font-semibold" action="">
                        <div className="flex flex-col ">
                          <label htmlFor="">User:</label>
                          <input
                            className="bg-[#F7F8FD] p-3 rounded-xl outline-none"
                            type="text"
                            name=""
                            id=""
                          />
                          <img
                            className=" absolute w-full h-2 mt-11 ml-48"
                            src={"/icons/down-arrow-icon.svg"}
                            alt=""
                          />
                        </div>
                        <div className="flex gap-x-4 pt-5">
                          <div className="">
                            <h3>Title:</h3>
                            <input
                              className="bg-[#F7F8FD] p-3 rounded-xl w-56 outline-none"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="w-full">
                            <h3>Pricing plan:</h3>
                            <input
                              className="bg-[#F7F8FD] p-3 rounded-xl w-40 outline-none"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="">
                            <h3>Amount:</h3>
                            <input
                              className="bg-[#F7F8FD] px-5 py-3 rounded-xl w-24 outline-none"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      x-ref="dnd"
                      className="relative flex-col text-gray-400 flex justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                    >
                      <input
                        accept="*"
                        type="file"
                        multiple
                        className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                        title=""
                      />
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <img
                          className="w-10 mr-1"
                          src={"/images/popup-image.png"}
                          alt=""
                        />
                        <p className="text-[#7A8798] font-bold text-sm pt-6">
                          Drag & Drop files here
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-3 font-bold text-sm">
                      <button className="text-[#DD4E6C] bg-[#F8E8EB] px-8 py-3 rounded-lg">
                        Cancel
                      </button>
                      <button className="text-[#1587AB] bg-[#F8E8EB] px-9 py-3 rounded-lg">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
