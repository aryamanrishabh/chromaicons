import React from "react";

interface Props {
  bgColor?: string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const defaultProps: Props = {
  bgColor: "none",
  color: "#000",
  onClick: () => {},
};

export const Headphones: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      onClick={onClick}
    >
      <g id="headphones" transform="translate(-2 -2)">
        <path
          id="Path_18179"
          data-name="Path 18179"
          d="M3,18V12a9,9,0,1,1,18,0v6"
          fill={bgColor}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_18180"
          data-name="Path 18180"
          d="M21,19a2,2,0,0,1-2,2H18a2,2,0,0,1-2-2V16a2,2,0,0,1,2-2h3ZM3,19a2,2,0,0,0,2,2H6a2,2,0,0,0,2-2V16a2,2,0,0,0-2-2H3Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

Headphones.defaultProps = defaultProps;
