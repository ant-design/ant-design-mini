const getArr = (arr, key) => {
  const _arr = [];
  arr.forEach(e => {
    e.index === key && _arr.push(e);
  });
  return _arr;
}

export default {
  getArr
}