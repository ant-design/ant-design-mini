function isUrl(string) {
  return !!(string.startsWith('http://') || string.startsWith('https://'));
}
function getFontWeight(fontWeight, phonemodel) {
  var type2weight = {
    normal: {
      Android: 'normal',
      iOS: 'normal'
    },
    medium: {
      Android: 'bold',
      iOS: '500'
    },
    bold: {
      Android: 'bold',
      iOS: 'bold'
    }
  };
  return (type2weight[fontWeight] || type2weight['normal'])[phonemodel];
}
function isiOS(phonemodel) {
  return phonemodel === 'iOS';
}
export default {
  isUrl: isUrl,
  getFontWeight: getFontWeight,
  isiOS: isiOS
};