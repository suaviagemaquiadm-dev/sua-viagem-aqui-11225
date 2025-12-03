import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21s-8-4.5-8-11.8A8 8 0 0112 3a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"
      />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
