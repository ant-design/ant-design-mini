function getSpaceClass(direction, wrap, align, justify) {
  const classes = ['ant-space'];

  // 方向类名
  classes.push(`ant-space-${direction}`);

  // 是否换行
  if (wrap && direction === 'horizontal') {
    classes.push('ant-space-wrap');
  }

  // 对齐方式
  if (align) {
    classes.push(`ant-space-align-${align}`);
  }

  // 主轴对齐方式
  if (justify) {
    classes.push(`ant-space-justify-${justify}`);
  }

  return classes.join(' ');
}

function getSpaceStyle(size) {
  let gap;

  // 处理间距大小
  switch (size) {
    case 'small':
      gap = '8px';
      break;
    case 'large':
      gap = '24px';
      break;
    case 'middle':
    default:
      gap = '16px';
  }

  // 如果size是数字，直接使用
  if (!isNaN(size)) {
    gap = size + 'px';
  }

  return `gap: ${gap}`;
}

export default {
  getSpaceClass,
  getSpaceStyle
};
