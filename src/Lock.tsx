import React from "react";

interface Props {
  bgColor?: string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const defaultProps: Props = {
  bgColor: "#fff",
  color: "#000",
  onClick: () => {},
};

export const Lock: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <circle cx="20" cy="20.2383" r="20" fill={bgColor} />
      <path
        d="M27 19.2383H13C11.8954 19.2383 11 20.1337 11 21.2383V28.2383C11 29.3429 11.8954 30.2383 13 30.2383H27C28.1046 30.2383 29 29.3429 29 28.2383V21.2383C29 20.1337 28.1046 19.2383 27 19.2383Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 19.2383V15.2383C15 13.9122 15.5268 12.6404 16.4645 11.7027C17.4021 10.7651 18.6739 10.2383 20 10.2383C21.3261 10.2383 22.5979 10.7651 23.5355 11.7027C24.4732 12.6404 25 13.9122 25 15.2383V19.2383"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Lock.defaultProps = defaultProps;
