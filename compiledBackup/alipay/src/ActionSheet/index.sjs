function isIconMode(actions) {
  return actions.some(function (action) {
    return !!action.icon;
  });
}
export default {
  isIconMode: isIconMode
};