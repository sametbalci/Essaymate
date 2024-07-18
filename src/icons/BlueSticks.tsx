import * as React from "react";

function BlueSticks(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="215" height="122" viewBox="0 0 215 122" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.135 10c0-5.523-4.477-10-10-10H10C4.477 0 0 4.477 0 10s4.477 10 10 10h160.135c5.523 0 10-4.477 10-10zM215 36a6 6 0 00-6-6H6a6 6 0 000 12h203a6 6 0 006-6zM0 56a6 6 0 016-6h191.378a6 6 0 110 12H6a6 6 0 01-6-6zm215 20a6 6 0 00-6-6H6a6 6 0 000 12h203a6 6 0 006-6zM0 96a6 6 0 016-6h191.378a6 6 0 110 12H6a6 6 0 01-6-6zm203.378 20a6 6 0 00-6-6H6a6 6 0 100 12h191.378a6 6 0 006-6z"
        fill="url(#prefix__paint0_linear_1031_5926)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1031_5926"
          x1={107.5}
          y1={0}
          x2={107.5}
          y2={115.297}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBF2FC" />
          <stop offset={1} stopColor="#EBF2FC" stopOpacity={0.2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoBlueSticks = React.memo(BlueSticks);
export default MemoBlueSticks;
