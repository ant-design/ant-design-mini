function getTitle(options, value) {
  var obj = options.find(function (item) {
    return item.value === value;
  });
  if (obj) {
    return obj.title;
  }
}
export default {
  getTitle: getTitle
};