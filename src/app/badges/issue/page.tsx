"use client";
import Button from "@/components/common/Button";
import Badge from "../../../components/badges/Badge";
import { useRouter } from "next/navigation";
import path from "@/configs/path";
import Lottie from "lottie-react";
import SurpriseBoxOpening from "./SurpriseBoxOpening2.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAccount } from "wagmi";
import Image from "next/image";
// import lottie from "lottie-web";
import * as LottiePlayer from "@lottiefiles/lottie-player";

const Issue = () => {
  const [resultBadge, setResultBadge] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getMyBadgesUrl =
    "http://152.69.231.140:1323/v01/badge/user?walletAccount=";
  const { isConnected, address } = useAccount();
  useEffect(() => {
    // lottie.loadAnimation({
    //   container: container,
    //   renderer: "svg",
    //   loop: false,
    //   autoplay: true,
    //   animationData: SurpriseBoxOpening,
    // });
    //TODO api완성되면 작성
    setTimeout(() => {
      // setResultBadge("/badges/newyork-removebg-preview.png");
    }, 1500);
    axios
      .get(`${getMyBadgesUrl}${address}`)
      .then((res) => {
        console.log(res.data);
        // setResultBadge(res.data.);
        console.log(res.data[0].dnftImgUrl);
        axios
          .get(res.data[0].dnftImgUrl)
          .then((res) => {
            console.log("res.data.image: ", res.data.image);
            console.log("res.data.image type: ", typeof res.data.image);
            setTimeout(() => {
              setResultBadge(res.data.image);
            }, 1350);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-4 pt-10 relative flex items-center justify-center w-full h-96">
        {resultBadge !== "" && (
          <Image
            alt="Result Badge"
            src={
              "https://ipfs-2.thirdwebcdn.com/ipfs/QmU9sg5aCU9sff4Vqu5un6gmFy4hqjXcU78yqz9t6KML7u/bronzekorea.png"
            }
            width={150}
            height={150}
            className="absolute z-20 bg-slate-100 "
          />
        )}

        {/* <div id="container" style={{width: "200px"}}></div> */}
        <Lottie
          animationData={SurpriseBoxOpening}
          loop={false}
          className="absolute z-10 w-96 h-96 "
        />
        {!isLoading && <div className="absolute "></div>}
      </div>
      <div className="font-bold text-5xl py-10">Congratulations</div>
      <Button
        className="px-20 m-10"
        onClick={() => {
          router.push(path.BADGE);
        }}
      >
        Your Badges
      </Button>
    </div>
  );
};

export default Issue;
