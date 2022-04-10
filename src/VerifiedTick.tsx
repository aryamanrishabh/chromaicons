import React from "react";

interface Props {
  bgColor?: string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const defaultProps: Props = {
  bgColor: "#000",
  color: "#fff",
  onClick: () => {},
};

export const VerifiedTick: React.FC<Props> = ({
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
      id="Icon_24_-_Tick_Done_Check"
      data-name="Icon 24 - Tick, Done, Check"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <circle
        id="Ellipse_636"
        data-name="Ellipse 636"
        style={a}
        cx="12"
        cy="12"
        r="12"
      />
      <path
        id="check"
        style={b}
        d="M13,7,7,13,4,10"
        transform="translate(3.5 2)"
      />
    </svg>
  );
};

VerifiedTick.defaultProps = defaultProps;
