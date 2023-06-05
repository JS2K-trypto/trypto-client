"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

interface Badge {
  dnftCountry: string;
  dnftId: number;
  dnftImgUrl: string;
  dnftTier: string;
  dnftTime: string;
  issueCount: number;
  latitude: number;
  longitude: number;
  walletAccount: string;
}
interface BadgeProps {
  tier?: string;
  badge: Badge;
}

async function getData(url: string) {
  const res = await axios.get(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const Badge = ({ tier, badge }: BadgeProps) => {
  const { address } = useAccount();
  const [imgUrl, setImgUrl] = useState("");
  // const data = getData(badge.dnftImgUrl);
  // console.log("data: ", data);
  useEffect(() => {
    axios
      .get(badge.dnftImgUrl)
      .then((res) => {
        console.log("get dnftImgUrl: ", res.data.image);
        setImgUrl(res.data.image);
        //   axios
        //     .get(res.data.image, {
        //       responseType: "arraybuffer",
        //     })
        //     .then((res) => {
        //       // console.log("res.data: ", res.data);
        //       // Buffer.from(res.data, 'binary').toString('base64')
        //       console.log("res.data type: ", typeof res.data);
        //       setImgUrl(res.data);
        //     })
        //     .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);
  const res = axios.get(
    `http://152.69.231.140:1323/v01/badge/user?walletAccount=${address}`
  );
  // const imgUrlJson = res.data.dnftImgUrl;
  // console.log("이미지 주소 json: ", imgUrlJson);
  // const imgRes = await axios.get(imgUrlJson);
  // const imgUrl = imgRes.data.image;
  // console.log("이미지 주소", imgUrl);
  return (
    <div className="bg-white rounded-3xl h-45 m-4  flex flex-col justify-center items-center overflow-hidden">
      {/* <div className="bg-slate-300"> */}
      {/* <Image
        src="/badges/sydney-removebg-preview.png"
        width="200"
        height="200"
        alt="badge"
        className={`object-cover ${tier == "bronze" ? "bg-yellow-800" : ""} ${
          tier == "silver" ? "bg-slate-100" : ""
        } ${tier == "gold" ? "bg-yellow-300" : ""}`}
      /> */}
      <Image src={imgUrl} width={200} height={200} alt="badge" className="" />

      <div className="text-lg font-bold">{badge.dnftCountry}</div>
      <div className="text-sm font-medium">{badge.dnftTime}</div>
      <div className="font-semibold">{badge.dnftTier}</div>
      <div className=""></div>
    </div>
  );
};

export default Badge;
