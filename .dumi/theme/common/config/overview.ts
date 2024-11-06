export const ComponentSampleImages = {
  light: {
    'x': {
      imageUrl: ''
    }
  },
  dark: {
    'x': {
      imageUrl: ''
    }
  }
};

// 为组件添加 -en 英文文档路径下的图片
Object.keys(ComponentSampleImages).forEach((mode) => {
  const overviewConfig = ComponentSampleImages[mode];
  Object.keys(overviewConfig).forEach((attr) => {
    overviewConfig[attr + '-en'] = {
      ...overviewConfig[attr],
    }
  });
});
