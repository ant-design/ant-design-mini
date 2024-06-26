function isUrl(string) {
  return !!(string.startsWith('http://') || string.startsWith('https://'));
}
var typeConfig = {
  copy: {
    icon: 'TextOutline',
    text: '复制'
  },
  "delete": {
    icon: 'DeleteOutline',
    text: '删除'
  },
  edit: {
    icon: 'EditSOutline',
    text: '编辑'
  },
  link: {
    icon: 'RightOutline',
    text: '链接'
  },
  location: {
    icon: 'LocationOutline',
    text: '定位'
  },
  share: {
    icon: 'SendOutline',
    text: '分享'
  }
};
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
  typeConfig: typeConfig,
  getFontWeight: getFontWeight,
  isiOS: isiOS
};