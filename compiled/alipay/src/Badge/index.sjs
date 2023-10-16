function setPositionStyle(position, offsetX = '-50%', offsetY = '-50%') {
  const transformStyle = `transform: translate(calc(${offsetX}), calc(${offsetY}));`;
  switch (position) {
    case 'top-left':
      return `top: 0; left: 0; ${transformStyle}`;
    case 'top-center':
      return `top: 0; left: 50%; ${transformStyle}`;
    case 'top-right':
      return `top: 0; left: 100%; ${transformStyle}`;
    case 'left':
      return `top: 50%; left: 0; ${transformStyle}`;
    case 'right':
      return `top: 50%; left: 100%; ${transformStyle}`;
    case 'bottom-left':
      return `top: 100%; left: 0; ${transformStyle}`;
    case 'bottom-center':
      return `top: 100%; left: 50%; ${transformStyle}`;
    case 'bottom-right':
      return `top: 100%; left: 100%; ${transformStyle}`;
    default:
      return `top: 0; left: 0; ${transformStyle}`;
  }
}

function setBubbleStyle(type, position) {
  if (type !== 'bubble') return '';
  switch (position) {
    case 'top-left':
      return 'border-bottom-right-radius: 0;';
    case 'top-right':
      return 'border-bottom-left-radius: 0;';
    case 'bottom-left':
      return 'border-top-right-radius: 0;';
    case 'bottom-right':
      return 'border-top-left-radius: 0;';
    default:
      return '';
  }
}

export default { setPositionStyle, setBubbleStyle };
