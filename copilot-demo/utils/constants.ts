export const componentList = [
  {
    type: '通用',
    list: [{ name: 'Button', nameZN: '按钮', path: '/pages/Button/index' }],
  },
];

export const allComponents = componentList.reduce(
  (re, v) => [...re, ...v.list],
  []
);
