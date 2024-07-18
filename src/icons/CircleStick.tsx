import * as React from "react";

function CircleStick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="6" height="32" viewBox="0 0 6 32" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5.83a3.001 3.001 0 10-2 0V32h2V5.83z"
        fill="#0A84FF"
      />
    </svg>
  );
}

const MemoCircleStick = React.memo(CircleStick);
export default MemoCircleStick;
