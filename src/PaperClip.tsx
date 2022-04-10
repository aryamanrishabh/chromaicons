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

export const PaperClip: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      id="Group_2542"
      data-name="Group 2542"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <rect
        id="Rectangle_2043"
        data-name="Rectangle 2043"
        width="24"
        height="24"
        fill={bgColor}
      />
      <path
        id="paperclip"
        d="M21.44,11.05l-9.19,9.19a6,6,0,1,1-8.49-8.49l9.19-9.19a4,4,0,1,1,5.66,5.66l-9.2,9.19a2,2,0,1,1-2.83-2.83L15.07,6.1"
        transform="translate(-0.081 0.112)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

PaperClip.defaultProps = defaultProps;
