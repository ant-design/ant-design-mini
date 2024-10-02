import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const WindowsIcon: React.FC<IconProps> = (props) => {
  const { className, style } = props;
  return (
    <svg
      className={className}
      style={style}
      fill="#00A1F1"
      focusable="false"
      height="1em"
      stroke="#00A1F1"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      width="1em"
    >
      <path d="M426.276571 574.829714l0 372.004571-389.705143-53.686857 0-318.317714 389.705143 0zM426.276571 150.308571l0 376.539429-389.705143 0 0-322.852571zM987.428571 574.829714l0 449.170286-518.290286-71.460571 0-377.709714 518.290286 0zM987.428571 73.142857l0 453.705143-518.290286 0 0-382.317714z" />
    </svg>
  );
};

export default WindowsIcon;
