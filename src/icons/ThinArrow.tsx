import * as React from "react";

function ThinArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="17" height="49" viewBox="0 0 17 49" fill="none" {...props}>
      <path
        d="M.333 46a2.667 2.667 0 105.334 0 2.667 2.667 0 00-5.334 0zM9 1.5h8v-1H9v1zM3.5 46V7h-1v39h1zM9 .5A6.5 6.5 0 002.5 7h1A5.5 5.5 0 019 1.5v-1z"
        fill="#6386FF"
        fillOpacity={0.2}
      />
    </svg>
  );
}

const MemoThinArrow = React.memo(ThinArrow);
export default MemoThinArrow;
