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

export const ChevronUp: React.FC<Props> = ({
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
    strokeWidth: 2,
  };
  const c: React.CSSProperties = { transform: "rotate(270deg)" };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      style={c}
      className={className}
      onClick={onClick}
    >
      <rect style={a} width="32" height="32" rx="16" />
      <g transform="translate(14 10)">
        <path style={b} d="M12,5l6,6-6,6" transform="translate(-12 -5)" />
      </g>
    </svg>
  );
};

ChevronUp.defaultProps = defaultProps;
