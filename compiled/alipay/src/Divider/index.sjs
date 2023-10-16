const getLineWidthFlex = (textPosition, text) => {
  if (!text) {
    return [1, 0];
  }
  if (textPosition === 'left') {
    return [1, 5];
  }

  if (textPosition === 'right') {
    return [5, 1];
  }
  return [1, 1];
}

export default {
  getLineWidthFlex
}