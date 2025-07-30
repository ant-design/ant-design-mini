function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >= 0) {
    return `ant-avatar-image-${size}`;
  }
  return 'ant-avatar-image-medium';
}
const defaultSrc =
  'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*qIuWQLqszlsAAAAAQFAAAAgAetF8AQ/original';

export default { getClass, defaultSrc };
