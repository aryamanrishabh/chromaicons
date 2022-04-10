import React from "react";

interface Props {
  bgColor?: string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const defaultProps: Props = {
  color: "#000",
  bgColor: "#fff",
  onClick: () => {},
};

export const ArrowDown: React.FC<Props> = ({
  color,
  bgColor,
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
      <g transform="translate(-575.333 -36.167)">
        <circle
          style={a}
          cx="16"
          cy="16"
          r="16"
          transform="translate(575.333 36.167)"
        />
        <g transform="translate(579.333 40.166)">
          <line style={b} x1="14" transform="translate(5 12)" />
          <path style={b} d="M12,19,5,12l7-7" />
        </g>
      </g>
    </svg>
  );
};

ArrowDown.defaultProps = defaultProps;
