import React from "react";
import Input from "./Input";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  children?: React.ReactNode;
}

export default function FormLabel({
  name,
  children,
  ...props
}: FormLabelProps) {
  return (
    <label {...props}>
      <p className="font-bold mb-1">{name}</p>
      {children}
    </label>
  );
}
