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

export const Play: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      className={className}
      onClick={onClick}
    >
      <g
        id="Group_59266"
        data-name="Group 59266"
        transform="translate(-2689 -16196)"
      >
        <path
          id="Path_1927"
          data-name="Path 1927"
          d="M40,0A40,40,0,1,1,0,40,40,40,0,0,1,40,0Z"
          transform="translate(2689 16196)"
          fill={bgColor}
        />
        <g
          id="Layer_2"
          data-name="Layer 2"
          transform="translate(2719 16219.998)"
        >
          <g id="Layer_1" data-name="Layer 1" transform="translate(0 0.002)">
            <path
              id="Path_384"
              data-name="Path 384"
              d="M4.273.55l19,14.13a1.561,1.561,0,0,1,0,2.64l-19,14.13C2.688,32.62,0,31.79,0,30.14V1.86C0,.21,2.688-.62,4.273.55Z"
              transform="translate(0 -0.002)"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

Play.defaultProps = defaultProps;
