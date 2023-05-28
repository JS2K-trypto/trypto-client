import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div>
      <div className="absolute inset-x-5 inset-y-56 flex flex-col justify-center items-center z-30 bg-slate-300 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-md">
        <div className=" p-5 ">
          <div className="text-2xl font-bold w-full">Menu</div>

          <div className="flex justify-between bg-white rounded-2xl p-6 my-1 w-full shadow-lg">
            <div className="flex">
              <Image
                src="/images/ProfileImage.svg"
                alt="Profile Image"
                width={60}
                height={60}
              />
              <div className="m-4">
                <div className="text-base font-bold">Yonghyun Kim</div>
                <div className="text-xs font-bold">
                  0x7c81003b0a60a64e0817...
                </div>
              </div>
            </div>

            <div className="">
              <Image
                src="/images/SignoutIcon.svg"
                alt="Signout Icon"
                width={26}
                height={26}
              />
            </div>
          </div>
          {/* Tab Button */}
          <div className="flex bg-white rounded-2xl p-1 w-full my-1 justify-center shadow-lg">
            <div className="bg-yellow-400 text-sm font-medium py-2 px-6 w-full text-center rounded-2xl">
              Total
            </div>
            <div className="text-sm font-medium py-2 px-6 w-full text-center rounded-2xl">
              Settings
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full my-1">
            <div className="bg-white rounded-2xl shadow-lg py-3 items-center flex flex-col justify-center">
              <div className="text-xs font-medium p-1">Total Plan</div>
              <div className="text-xl font-bold p-1">32,345</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg py-3 items-center flex flex-col justify-center">
              <div className="text-xs font-medium p-1">Total Badge</div>
              <div className="text-xl font-bold p-1">2,724</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg py-3 items-center flex flex-col justify-center">
              <div className="text-xs font-medium p-1">Total Like</div>
              <div className="text-xl font-bold p-1">32,345</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg py-3 items-center flex flex-col justify-center">
              <div className="text-xs font-medium p-1">Total Comment</div>
              <div className="text-xl font-bold p-1">2,724</div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center text-center border-t border-gray-300 w-full h-full">
          <div className="text-xl font-bold border-r flex justify-center items-center border-gray-300 w-full h-full">
            Back
          </div>
          <div className="text-xl font-bold flex justify-center items-center w-full h-full">
            Check
          </div>
        </div>
      </div>

      {/* Menu Background */}
      <div className="absolute left-0 top-0 bg-black bg-opacity-30 backdrop-blur-sm z-20 h-screen w-screen"></div>
    </div>
  );
};

export default Menu;
