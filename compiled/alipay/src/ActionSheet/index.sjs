function isIconMode(actions) {
  return actions.some(action => !!action.icon)
}
export default {
  isIconMode,
}
