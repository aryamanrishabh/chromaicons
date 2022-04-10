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

export const Pause: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  const a: React.CSSProperties = { fill: bgColor };
  const b: React.CSSProperties = { fill: "none" };
  const c: React.CSSProperties = { fill: color };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={className}
      onClick={onClick}
    >
      <g transform="translate(-140 -280)">
        <path
          style={a}
          d="M32,0A32,32,0,1,1,0,32,32,32,0,0,1,32,0Z"
          transform="translate(140 280)"
        />
        <g transform="translate(140 280)">
          <path style={b} d="M32,0A32,32,0,1,1,0,32,32,32,0,0,1,32,0Z" />
          <rect
            style={c}
            width="7"
            height="22"
            rx="2"
            transform="translate(22.025 21.032)"
          />
          <rect
            style={c}
            width="7"
            height="22"
            rx="2"
            transform="translate(35.039 21.032)"
          />
        </g>
      </g>
    </svg>
  );
};

Pause.defaultProps = defaultProps;
