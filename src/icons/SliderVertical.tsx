import * as React from "react";

function SliderVertical(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17 18.75H7c-.75 0-1.3-.03-1.77-.1-3.32-.36-3.98-2.35-3.98-5.65v-2c0-3.3.66-5.29 4.01-5.66.44-.06.99-.09 1.74-.09h10c.75 0 1.3.03 1.77.1 3.33.37 3.98 2.35 3.98 5.65v2c0 3.3-.66 5.29-4.01 5.66-.44.06-.99.09-1.74.09zm-10-12c-.68 0-1.16.03-1.55.08-2.03.23-2.7.86-2.7 4.17v2c0 3.31.67 3.94 2.67 4.17.42.06.9.08 1.58.08h10c.68 0 1.16-.03 1.55-.08 2.03-.22 2.7-.86 2.7-4.17v-2c0-3.31-.67-3.94-2.67-4.17-.42-.06-.9-.08-1.58-.08H7z"
        fill="#2233A8"
      />
      <path
        d="M15.328 22.75h-6.66c-3.1 0-4.09-.99-4.09-4.08v-.34c0-.17 0-.32.01-.47.01-.21.11-.4.28-.53.16-.13.37-.19.58-.16.4.06.88.08 1.55.08h10c.68 0 1.16-.03 1.55-.08.21-.03.42.03.58.16.16.13.26.32.28.53.01.16.01.3.01.47v.34c0 3.09-.99 4.08-4.09 4.08zm-9.25-4.02c.01 2.19.36 2.52 2.59 2.52h6.66c2.23 0 2.58-.33 2.59-2.52-.27.01-.57.02-.92.02h-10c-.35 0-.65-.01-.92-.02zM18.658 6.84c-.04 0-.07 0-.11-.01-.4-.06-.88-.08-1.55-.08h-10c-.68 0-1.16.03-1.55.08a.752.752 0 01-.58-.16.773.773 0 01-.28-.53c-.01-.16-.01-.3-.01-.47v-.34c0-3.09.99-4.08 4.09-4.08h6.66c3.1 0 4.09.99 4.09 4.08v.34c0 .17 0 .32-.01.47-.01.21-.11.4-.28.53-.13.11-.3.17-.47.17zM6.998 5.25h10c.35 0 .65.01.92.02-.01-2.19-.36-2.52-2.59-2.52h-6.66c-2.23 0-2.58.33-2.59 2.52.27-.01.57-.02.92-.02z"
        fill="#2233A8"
      />
    </svg>
  );
}

const MemoSliderVertical = React.memo(SliderVertical);
export default MemoSliderVertical;