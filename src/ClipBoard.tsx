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

export const ClipBoard: React.FC<Props> = ({
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
      <g id="clipboard" transform="translate(4 4)">
        <path
          id="Path_285580"
          data-name="Path 285580"
          d="M16,4h2a2,2,0,0,1,2,2V20a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H8"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <rect
          id="Rectangle_10174"
          data-name="Rectangle 10174"
          width="8"
          height="4"
          rx="1"
          transform="translate(8 2)"
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

ClipBoard.defaultProps = defaultProps;
