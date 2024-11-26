var iconMap = {
  'success': 'CheckCircleFill',
  'error': 'CloseCircleFill',
  'info': 'InformationCircleFill',
  'warning': 'ExclamationCircleFill',
  'wait': 'ClockCircleFill'
};
var iconType = function iconType(t) {
  return iconMap[t];
};
export default {
  iconType: iconType
};