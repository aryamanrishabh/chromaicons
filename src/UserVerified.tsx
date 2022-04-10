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

export const UserVerified: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      id="Icon_-_Master_32_"
      data-name="Icon - Master (32)"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={className}
      onClick={onClick}
    >
      <rect
        id="Rectangle_2472"
        data-name="Rectangle 2472"
        width="32"
        height="32"
        fill={bgColor}
      />
      <rect
        id="Rectangle_2473"
        data-name="Rectangle 2473"
        width="24"
        height="24"
        transform="translate(4 4)"
        fill="none"
      />
      <g id="user-check" transform="translate(5 4)">
        <path
          id="Path_285598"
          data-name="Path 285598"
          d="M16,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle
          id="Ellipse_5016"
          data-name="Ellipse 5016"
          cx="4"
          cy="4"
          r="4"
          transform="translate(4.5 3)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_285599"
          data-name="Path 285599"
          d="M17,11l2,2,4-4"
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

UserVerified.defaultProps = defaultProps;
