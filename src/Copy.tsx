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

export const Copy: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect
        x="0.941406"
        y="0.832031"
        width="40"
        height="40"
        rx="8"
        fill={bgColor}
      />
      <path
        d="M28.9414 17.832H19.9414C18.8368 17.832 17.9414 18.7275 17.9414 19.832V28.832C17.9414 29.9366 18.8368 30.832 19.9414 30.832H28.9414C30.046 30.832 30.9414 29.9366 30.9414 28.832V19.832C30.9414 18.7275 30.046 17.832 28.9414 17.832Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9414 23.832H12.9414C12.411 23.832 11.9023 23.6213 11.5272 23.2462C11.1521 22.8712 10.9414 22.3625 10.9414 21.832V12.832C10.9414 12.3016 11.1521 11.7929 11.5272 11.4178C11.9023 11.0427 12.411 10.832 12.9414 10.832H21.9414C22.4718 10.832 22.9805 11.0427 23.3556 11.4178C23.7307 11.7929 23.9414 12.3016 23.9414 12.832V13.832"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Copy.defaultProps = defaultProps;
