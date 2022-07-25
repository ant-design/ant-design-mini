function setPositionStyle(position, offsetX = 0, offsetY = 0) {
  switch (position) {
    case 'top-left':
      return `top: 0; left: 0; transform: translate(${
        -9 + offsetX
      }px, ${offsetY}px);`;
    case 'top-center':
      return `top: 0; left: 50%; transform: translate(${
        -9 + offsetX
      }px, ${offsetY}px);`;
    case 'top-right':
      return `top: 0; left: 100%; transform: translate(${
        -9 + offsetX
      }px, ${offsetY}px);`;
    case 'left':
      return `top: 50%; left: 0; transform: translate(${
        -9 + offsetX
      }px, calc(-50% + ${offsetY}px));`;
    case 'right':
      return `top: 50%; left: 100%;; transform: translate(${
        -9 + offsetX
      }px, calc(-50% + ${offsetY}px));`;
    case 'bottom-left':
      return `top: 100%; left: 0; transform: translate(${
        -9 + offsetX
      }px, calc(-50% + ${offsetY}px));`;
    case 'bottom-center':
      return `top: 100%; left: 50%; transform: translate(${
        -9 + offsetX
      }px, calc(-50% + ${offsetY}px));`;
    case 'bottom-right':
      return `top: 100%; left: 100%; transform: translate(${
        -9 + offsetX
      }px, calc(-50% + ${offsetY}px));`;
    default:
      return `top: 0; left: 0; transform: translate(${
        -9 + offsetX
      }px, ${offsetY}px);`;
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
