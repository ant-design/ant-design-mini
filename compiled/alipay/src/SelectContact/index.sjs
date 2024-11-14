var getId = function getId(str) {
  if (str === '推荐' || str === '推') {
    return 'tui';
  }
  return str;
};
export default {
  getId: getId
};