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

export const Cross: React.FC<Props> = ({
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
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={className}
      onClick={onClick}
    >
      <g transform="translate(-304 -48)">
        <g transform="translate(105 -232)">
          <path
            style={a}
            d="M16,0A16,16,0,1,1,0,16,16,16,0,0,1,16,0Z"
            transform="translate(199 280)"
          />
          <g transform="translate(203 284)">
            <line style={b} x1="12" y2="12" transform="translate(6 6)" />
            <line style={b} x2="12" y2="12" transform="translate(6 6)" />
          </g>
        </g>
      </g>
    </svg>
  );
};

Cross.defaultProps = defaultProps;
