import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="absolute bg-slate-300 right-4 top-12 flex flex-col w-72">
      <div className="flex felx-row">
        <div className="font-extrabold text-2xl">User Name</div>
        <div className="">Edit</div>
        <Image
          src="/images/SignoutIcon.svg"
          alt="Signout"
          width={29}
          height={29}
        />
      </div>
      <div className="">
        <Image
          src="/images/MetamaskIcon.svg"
          alt="Metamask"
          width={50}
          height={50}
        />
      </div>
      <div className="font-extrabold text-xl">Total</div>
      <div className="font-extrabold text-xl">Plan</div>
      <div className="font-extrabold">5</div>
      <div className="font-extrabold text-xl">Badge</div>
      <div className="font-extrabold">5</div>
      <div className="font-extrabold text-xl">Like</div>
      <div className="font-extrabold">5</div>
      <div className="font-extrabold text-xl">Comment</div>
      <div className="font-extrabold">5</div>
    </div>
  );
};

export default Menu;
