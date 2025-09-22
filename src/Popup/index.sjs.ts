function getContentStyle(position, animation, duration, width, height) {
  let style = '';
  if (animation) {
    if (duration) {
      style += `-webkit-animation-duration:${duration}ms; animation-duration:${duration}ms;`;
    }
  } else {
    style += `-webkit-animation-duration:0ms; animation-duration:0ms; animation-delay:0ms;`;
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

function getCloseStyle(animation, duration, maskStyle) {
  let style = '';
  if (animation) {
    if (duration) {
      style += `-webkit-animation-duration:${duration}ms; animation-duration:${duration}ms;`;
    }
  } else {
    style += `-webkit-animation-duration:0ms; animation-duration:0ms; animation-delay:0ms;`;
  }
  if (maskStyle) {
    style += maskStyle;
  }
  return style;
}

export default { getContentStyle, getCloseStyle };
