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

export const Journal: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={className}
      onClick={onClick}
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_10184"
            data-name="Rectangle 10184"
            width="32"
            height="32"
            transform="translate(16.27 498)"
            fill="#fff"
            stroke="#707070"
            strokeWidth="1"
          />
        </clipPath>
      </defs>
      <g
        id="Mask_Group_58634"
        data-name="Mask Group 58634"
        transform="translate(-16.27 -498)"
        clipPath="url(#clip-path)"
      >
        <g id="Layer_2" data-name="Layer 2" transform="translate(16.27 498)">
          <g id="Layer_1" data-name="Layer 1" transform="translate(0)">
            <rect
              id="Rectangle_10183"
              data-name="Rectangle 10183"
              width="33"
              height="33"
              fill="none"
            />
            <path
              id="Path_285596"
              data-name="Path 285596"
              d="M28.688,2.621H8.026a4.151,4.151,0,0,0-2.754,1.11A3.643,3.643,0,0,0,4.241,6.4V23.431a3.352,3.352,0,0,0,.82,2.345,3.22,3.22,0,0,0,2.47.977H9.383V32.44a2.181,2.181,0,0,0,2.181,2.181h18.2a2.184,2.184,0,0,0,2.184-2.181V5.825a3.237,3.237,0,0,0-3.264-3.2ZM9.383,24.194H7.536a.91.91,0,0,1-.584-.151.791.791,0,0,1-.143-.484V6.4a1.114,1.114,0,0,1,1.223-1.22,1.777,1.777,0,0,1,1.028.4,1.193,1.193,0,0,1,.3.94h.019Zm10.91-.963a1.264,1.264,0,0,1-.9.376H15.542a1.286,1.286,0,1,1,0-2.561h3.839a1.286,1.286,0,0,1,.9,2.185Zm6.4-6.4a1.268,1.268,0,0,1-.9.374H15.55a1.286,1.286,0,1,1,0-2.56H25.791a1.286,1.286,0,0,1,.9,2.185Zm0-6.4a1.276,1.276,0,0,1-.9.374H15.55a1.286,1.286,0,1,1,0-2.56H25.791a1.286,1.286,0,0,1,.9,2.185Z"
              transform="translate(-1.595 -2.621)"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

Journal.defaultProps = defaultProps;
