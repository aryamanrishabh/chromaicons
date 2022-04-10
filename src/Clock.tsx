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

export const Clock: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={bgColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_5_336)">
        <path
          d="M12 21.9454C17.5228 21.9454 22 17.4683 22 11.9454C22 6.42259 17.5228 1.94543 12 1.94543C6.47715 1.94543 2 6.42259 2 11.9454C2 17.4683 6.47715 21.9454 12 21.9454Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5.94543V11.9454L16 13.9454"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_336">
          <rect width="24" height="24" fill={bgColor} />
        </clipPath>
      </defs>
    </svg>
  );
};

Clock.defaultProps = defaultProps;
