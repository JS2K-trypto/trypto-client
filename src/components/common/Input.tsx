"use client";
import React from "react";
import { useState } from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      className={`rounded-2xl border border-gray-300 h-[60px] px-5 focus:border-yellow-300 ${className}`}
      {...props}
    />
  );
}
