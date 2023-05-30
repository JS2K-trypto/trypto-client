"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { redirect } from "next/navigation";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";
import axios from "axios";

interface MenuProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ setActiveMenu }: MenuProps) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [nickname, setNickname] = useState("Noname");
  if (!isConnected) {
    redirect(path.AUTH, RedirectType.replace);
  }

  useEffect(() => {
    // axios
    //   .get("https://localhost:4000/sendlist/todo", {
    //     params: { walletAccount: "0xCA122d8a3c6d1d2e4298e0CB7e027CD371CCAaA3" },
    //   })
    //   .then((res) => {});
    axios
      .get("http://152.69.231.140:1323/v01/acc/profile", {
        data: {
          walletAccount: "0xCA122d8a3c6d1d2e4298e0CB7e027CD371CCAaA3",
        },
      })
      .then((res) => {
        setNickname(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center z-30 bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-md w-96 h-fit">
        <div className=" p-5">
          <div className="text-2xl font-bold w-full">Menu</div>

          <div className="flex justify-between bg-white rounded-2xl p-6 my-1 w-full shadow-lg">
            <div className="flex">
              <Image
                src="/images/ProfileImage.svg"
                alt="Profile Image"
                width={60}
                height={60}
              />
              <div className="m-4 w-44">
                <div className="flex mb-1">
                  <div className="text-base font-bold mr-1">{nickname}</div>
                  <Image
                    src="/images/EditIcon.svg"
                    alt="Edit Icon"
                    width={20}
                    height={20}
                    onClick={() => {
                      console.log("edit");
                    }}
                  />
                </div>

                <div className="text-xs font-bold">
                  {address?.slice(0, 22)}...
                </div>
              </div>
            </div>

            <div className="" onClick={() => disconnect()}>
              <Image
                src="/images/SignoutIcon.svg"
                alt="Signout Icon"
                width={26}
                height={26}
              />
            </div>
          </div>
          {/* Tab Button */}
          <div className="flex bg-white rounded-2xl p-1 w-full my-2 justify-center shadow-lg">
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
        <div
          className=" flex justify-center items-center text-center border-t border-gray-300 w-full h-full"
          onClick={() => setActiveMenu((prev) => !prev)}
        >
          <div className="p-4 text-xl font-bold border-r flex justify-center items-center border-gray-300 w-full h-full ">
            Back
          </div>
          <div className="p-4 text-xl font-bold flex justify-center items-center w-full h-full">
            Check
          </div>
        </div>
      </div>

      {/* Menu Background */}
      <div
        className="absolute left-0 top-0 bg-black bg-opacity-30 backdrop-blur-sm z-20 h-screen w-screen"
        onClick={() => setActiveMenu((prev) => !prev)}
      ></div>
    </div>
  );
};

export default Menu;
