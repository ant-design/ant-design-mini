function isPropsEmpty(propsValue) {
  return [undefined, null].indexOf(propsValue) !== -1;
}
export default {
  isPropsEmpty: isPropsEmpty
};