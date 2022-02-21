const iconMap = {
  'success': 'CheckCircleFill',
  'danger': 'CloseCircleFill',
  'info': 'InformationCircleFill',
  'warn': 'ExclamationCircleFill',
  'wait': 'ClockCircleFill',
};

const iconType = t => {
  return iconMap[t];
}

export default { iconType };
