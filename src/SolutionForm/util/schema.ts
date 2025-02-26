/**
 * 将path处理成能够直接在schema中访问的路径格式
 * 如 'a.b' 会处理成 'properties.a.properties.b'
 */
export const getFullPathByPath = (path) => {
  return path
    .split('.')
    .reduce(
      (pre, cur, index) => `${pre}${index === 0 ? `${cur}` : `.properties.${cur}`}`,
      'properties.',
    );
};