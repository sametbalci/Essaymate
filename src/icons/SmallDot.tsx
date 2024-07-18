import * as React from "react";

function SmallDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="605" height="610" viewBox="0 0 605 610" fill="none" {...props}>
      <g opacity={0.1}>
        <rect
          width={605}
          height={610}
          rx={30}
          fill="url(#prefix__pattern0_1031_5697)"
        />
        <rect
          width={605}
          height={610}
          rx={30}
          fill="url(#prefix__paint0_linear_1031_5697)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1031_5697"
          x1={303}
          y1={610}
          x2={284.99}
          y2={0.532}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <pattern
          id="prefix__pattern0_1031_5697"
          patternContentUnits="objectBoundingBox"
          width={0.017}
          height={0.016}
        >
          <use
            xlinkHref="#prefix__image0_1031_5697"
            transform="scale(.00017 .00016)"
          />
        </pattern>
        <image
          id="prefix__image0_1031_5697"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgB7dmxjQIxFEXRt1sBJVDadLLbwlY0SwXQAaWALUAgIsAOfnCO9FIHc4OR7ORu0/bTtradXty+bQnTbduOeT3E847XM5hkJMZjlE0YtmQ8xm2/YVj/D8wKsoYhX7l8yNln8qHvUIogxQhSjCDFCFKMIMUIUowgxQhSTA/yn3kOYUgPsss8f2FYvzLvV+czrt+ZZBsPVCUtee86fs3lDcTDFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBxZ2YlhofXmaQnAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

const MemoSmallDot = React.memo(SmallDot);
export default MemoSmallDot;
