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
      gap = '0.08rem';
      break;
    case 'large':
      gap = '0.24rem';
      break;
    case 'middle':
    default:
      gap = '0.16rem';
  }

  // 如果size是数字，直接使用
  if (!isNaN(size)) {
    gap = size / 100 + 'rem';
  }

  return `gap: ${gap}`;
}

export default {
  getSpaceClass,
  getSpaceStyle,
};
