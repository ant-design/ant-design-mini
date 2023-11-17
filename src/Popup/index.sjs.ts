function getContentStyle(position, animation, duration, width, height) {
  let style = '';
  if (animation) {
    style += `-webkit-animation-duration:${duration}ms; animation-duration:${duration}ms;`;
  }
  if (position === 'top' || position === 'bottom') {
    if (typeof height !== 'undefined' && height !== null) {
      style += `height:${height}px`;
    }
  }
  if (position === 'left' || position === 'right') {
    if (typeof width !== 'undefined' && width !== null) {
      style += `width:${width}px`;
    }
  }
  return style;
}

export default { getContentStyle };
