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

export const FourSquares: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  const a: React.CSSProperties = { fill: bgColor };
  const b: React.CSSProperties = { clipPath: "url(#foursquare-a)" };
  const c: React.CSSProperties = {
    fill: bgColor,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2px",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <defs>
        <clipPath id="foursquare-a">
          <rect style={a} width="24" height="24" transform="translate(0)" />
        </clipPath>
      </defs>
      <g style={b}>
        <rect style={c} width="7" height="7" transform="translate(3 3)" />
        <rect style={c} width="7" height="7" transform="translate(14 3)" />
        <rect style={c} width="7" height="7" transform="translate(14 14)" />
        <rect style={c} width="7" height="7" transform="translate(3 14)" />
      </g>
    </svg>
  );
};

FourSquares.defaultProps = defaultProps;
