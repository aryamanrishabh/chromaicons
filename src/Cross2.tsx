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

export const Cross2: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  const a: React.CSSProperties = { fill: bgColor };
  const b: React.CSSProperties = {
    fill: "none",
    stroke: color,
    strokeWidth: "2px",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <rect style={a} className="a" width="24" height="24" rx="12" />
      <g transform="translate(-2 -2)">
        <line style={b} x1="8" y2="8" transform="translate(10 10)" />
        <line style={b} x2="8" y2="8" transform="translate(10 10)" />
      </g>
    </svg>
  );
};

Cross2.defaultProps = defaultProps;
