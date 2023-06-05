import React, { forwardRef } from "react";

const directionMap: Record<ArrowIconProps["direction"], number> = {
  left: 0,
  right: 180,
  top: 90,
  bottom: 270,
};

export default forwardRef<SVGSVGElement, ArrowIconProps>(function ArrowIcon(
  { direction, ...props },
  ref
) {
  return (
    <svg
      ref={ref}
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      rotate={directionMap[direction]}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 7L9 12"
        stroke="#292929"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L14 17"
        stroke="#292929"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
