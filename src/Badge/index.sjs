function setPositionStyle(position, offsetX = '0px', offsetY = '0px') {
  switch (position) {
    case 'top-left':
      return `top: 0; left: 0; transform: translate(calc(-9px + ${offsetX}), ${offsetY});`;
    case 'top-center':
      return `top: 0; left: 50%; transform: translate(calc(-9px + ${offsetX}), ${offsetY});`;
    case 'top-right':
      return `top: 0; left: 100%; transform: translate(calc(-9px + ${offsetX}), ${offsetY});`;
    case 'left':
      return `top: 50%; left: 0; transform: translate(calc(-9px + ${offsetX}), calc(-50% + ${offsetY}));`;
    case 'right':
      return `top: 50%; left: 100%;; transform: translate(calc(-9px + ${offsetX}), calc(-50% + ${offsetY}));`;
    case 'bottom-left':
      return `top: 100%; left: 0; transform: translate(calc(-9px + ${offsetX}), calc(-50% + ${offsetY}));`;
    case 'bottom-center':
      return `top: 100%; left: 50%; transform: translate(calc(-9px + ${offsetX}), calc(-50% + ${offsetY}));`;
    case 'bottom-right':
      return `top: 100%; left: 100%; transform: translate(calc(-9px + ${offsetX}), calc(-50% + ${offsetY}));`;
    default:
      return `top: 0; left: 0; transform: translate(calc(-9px + ${offsetX}), ${offsetY});`;
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
