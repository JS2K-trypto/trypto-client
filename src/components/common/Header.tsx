import React from "react";
import Image from "next/image";
import MenuIcon from "./icons/MenuIcon";

export default function Header() {
  return (
    <header className="p-5 flex">
      <input
        type="text"
        className="h-[60px] rounded-2xl p-5 flex-1 border border-white bg-white/50"
        placeholder="search"
      />
      <button
        type="button"
        className="p-4 border border-white rounded-2xl ml-2.5 bg-white/50 shrink-0"
      >
        <MenuIcon />
      </button>
    </header>
  );
}
