import * as React from "react";

function Line(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="250" height="2" viewBox="0 0 250 2" fill="none" {...props}>
      <path
        stroke="#000"
        strokeOpacity={0.2}
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="1 8"
        d="M1 1h248"
      />
    </svg>
  );
}

const MemoLine = React.memo(Line);
export default MemoLine;
