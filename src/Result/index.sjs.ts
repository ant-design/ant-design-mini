const iconMap = {
  'success': 'CheckCircleFill',
  'error': 'CloseCircleFill',
  'info': 'InformationCircleFill',
  'warning': 'ExclamationCircleFill',
  'wait': 'ClockCircleFill',
};

const iconType = t => {
  return iconMap[t];
}

export default { iconType };
