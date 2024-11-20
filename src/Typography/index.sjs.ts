function isUrl(string) {
  return !!(
    string.indexOf('http://') === 0 || string.indexOf('https://') === 0
  );
}

function getFontWeight(fontWeight, phonemodel) {
  const type2weight = {
    normal: {
      Android: 'normal',
      iOS: 'normal',
    },
    medium: {
      Android: 'bold',
      iOS: '500',
    },
    bold: {
      Android: 'bold',
      iOS: 'bold',
    },
  };
  return (type2weight[fontWeight] || type2weight['normal'])[phonemodel];
}

function isiOS(phonemodel) {
  return phonemodel === 'iOS';
}

export default {
  isUrl,
  getFontWeight,
  isiOS,
};
