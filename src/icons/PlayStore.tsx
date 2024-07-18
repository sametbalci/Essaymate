import * as React from "react";

function PlayStore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="26" height="28" viewBox="0 0 26 28" fill="none" {...props}>
      <path
        d="M.522.432C.192.767 0 1.288 0 1.963v24.075c0 .675.191 1.196.522 1.53l.082.074 13.953-13.485v-.319L.604.354l-.082.08z"
        fill="url(#prefix__paint0_linear_1031_5517)"
      />
      <path
        d="M19.2 18.654l-4.645-4.497v-.318l4.651-4.498.104.059 5.509 3.03c1.572.86 1.572 2.275 0 3.14l-5.509 3.026-.11.058z"
        fill="url(#prefix__paint1_linear_1031_5517)"
      />
      <path
        d="M19.31 18.596l-4.756-4.598L.52 27.568c.522.531 1.373.595 2.341.064l16.449-9.036z"
        fill="url(#prefix__paint2_linear_1031_5517)"
      />
      <path
        d="M19.31 9.4L2.86.363C1.893-.163 1.041-.1.52.433l14.034 13.565L19.31 9.4z"
        fill="url(#prefix__paint3_linear_1031_5517)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1031_5517"
          x1={13.318}
          y1={26.288}
          x2={-4.941}
          y2={7.404}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset={0.007} stopColor="#00A1FF" />
          <stop offset={0.26} stopColor="#00BEFF" />
          <stop offset={0.512} stopColor="#00D2FF" />
          <stop offset={0.76} stopColor="#00DFFF" />
          <stop offset={1} stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_1031_5517"
          x1={26.866}
          y1={13.996}
          x2={-0.378}
          y2={13.996}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset={0.409} stopColor="#FFBD00" />
          <stop offset={0.775} stopColor="orange" />
          <stop offset={1} stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear_1031_5517"
          x1={16.724}
          y1={11.498}
          x2={-8.037}
          y2={-14.111}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset={1} stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear_1031_5517"
          x1={-3.013}
          y1={35.578}
          x2={8.044}
          y2={24.142}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset={0.069} stopColor="#2DA771" />
          <stop offset={0.476} stopColor="#15CF74" />
          <stop offset={0.801} stopColor="#06E775" />
          <stop offset={1} stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoPlayStore = React.memo(PlayStore);
export default MemoPlayStore;
