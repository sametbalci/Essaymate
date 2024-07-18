import * as React from "react";

function Topic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="793" height="610" viewBox="0 0 793 610" fill="none" {...props}>
      <g opacity={0.1}>
        <rect
          width={793}
          height={610}
          rx={30}
          fill="url(#prefix__pattern0_1031_5661)"
        />
        <rect
          width={793}
          height={610}
          rx={30}
          fill="url(#prefix__paint0_linear_1031_5661)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1031_5661"
          x1={793}
          y1={305}
          x2={0}
          y2={305}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <pattern
          id="prefix__pattern0_1031_5661"
          patternContentUnits="objectBoundingBox"
          width={0.013}
          height={0.016}
        >
          <use
            xlinkHref="#prefix__image0_1031_5661"
            transform="scale(.00013 .00016)"
          />
        </pattern>
        <image
          id="prefix__image0_1031_5661"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgB7dmxjQIxFEXRt1sBJVDadLLbwlY0SwXQAaWALUAgIsAOfnCO9FIHc4OR7ORu0/bTtradXty+bQnTbduOeT3E847XM5hkJMZjlE0YtmQ8xm2/YVj/D8wKsoYhX7l8yNln8qHvUIogxQhSjCDFCFKMIMUIUowgxQhSTA/yn3kOYUgPsss8f2FYvzLvV+czrt+ZZBsPVCUtee86fs3lDcTDFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBxZ2YlhofXmaQnAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

const MemoTopic = React.memo(Topic);
export default MemoTopic;
