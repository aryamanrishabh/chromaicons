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

export const Mute: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  const a: React.CSSProperties = {
    fill: bgColor,
    stroke: color,
    strokeWidth: "2px",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.414"
      height="16"
      viewBox="0 0 23.414 16"
      className={className}
      onClick={onClick}
    >
      <g transform="translate(-1 -4)">
        <path style={a} d="M11,5,6,9H2v6H6l5,4Z" />
        <line style={a} x1="6" y2="6" transform="translate(17 9)" />
        <line style={a} x2="6" y2="6" transform="translate(17 9)" />
      </g>
    </svg>
  );
};

Mute.defaultProps = defaultProps;
