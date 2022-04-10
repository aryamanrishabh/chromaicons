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

export const PaperPlane: React.FC<Props> = ({ color, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.414"
      height="22.414"
      viewBox="0 0 22.414 22.414"
      className={className}
      onClick={onClick}
    >
      <g id="send" transform="translate(-1 -0.586)">
        <line
          id="Line_443"
          data-name="Line 443"
          x1="11"
          y2="11"
          transform="translate(11 2)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_8225"
          data-name="Path 8225"
          d="M22,2,15,22l-4-9L2,9Z"
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

PaperPlane.defaultProps = defaultProps;
