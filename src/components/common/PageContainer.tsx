import React from "react";

export default function PageContainer({
  title,
  subTitle,

  children,
}: {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col bg-glass rounded-t-2xl h-full overflow-hidden pt-5 pb-[75px]">
      <div className="px-5 font-bold">
        <h1 className="text-3xl">{title}</h1>
        <p>{subTitle}</p>
      </div>
      <div className="mt-5 overflow-y-auto px-5">{children}</div>
    </div>
  );
}
