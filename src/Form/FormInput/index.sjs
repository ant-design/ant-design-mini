function getFocus(focus, selfFocus) {
  return focus ? (typeof selfFocus === 'undefined' ? true : selfFocus) : selfFocus;
}

export default { getFocus };
