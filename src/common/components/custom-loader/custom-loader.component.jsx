import React from 'react';

export const CustomLoader = ({
  text = '',
  className,
  width = '30',
  height = '30',
  circleColor = '#ffffff'
}) => {
  return (
    <div className={`flex-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 50 50"
        stroke={circleColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            repeatCount="indefinite"
            from="502"
            to="0"
          />
          <animate
            attributeName="stroke-dasharray"
            dur="2s"
            repeatCount="indefinite"
            values="150.6 100.4;1 250;150.6 100.4"
          />
        </circle>
      </svg>
      {text && <div className="ml-2 text-center text-xs font-bold">{text}</div>}
    </div>
  );
};
