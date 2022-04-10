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

export const Download: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  const a: React.CSSProperties = { fill: bgColor };
  const b: React.CSSProperties = {
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2px",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={className}
      onClick={onClick}
    >
      <g transform="translate(-304 -36)">
        <rect style={a} width="32" height="32" transform="translate(304 36)" />
        <g transform="translate(308 40)">
          <path style={b} d="M21,15v4a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V15" />
          <path style={b} d="M7,10l5,5,5-5" />
          <line style={b} y1="12" transform="translate(12 3)" />
        </g>
      </g>
    </svg>
  );
};

Download.defaultProps = defaultProps;
