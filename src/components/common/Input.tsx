"use client";
import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={`rounded-2xl border border-gray-300 h-[60px] px-5 focus:border-yellow-300 ${className}`}
      {...props}
    />
  );
});
