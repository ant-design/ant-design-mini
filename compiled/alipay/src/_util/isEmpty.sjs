function isEmpty(propsValue) {
  return [undefined, null].indexOf(propsValue) !== -1;
}
export default {
  isEmpty: isEmpty
};