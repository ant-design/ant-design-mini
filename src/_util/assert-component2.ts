export function assertComponent2() {
  if (typeof my === 'undefined') {
    return;
  }
  // @ts-ignore
  const component2 = my.canIUse('component2') || typeof ac === 'object';
  if (!component2) {
    console.log('项目未开启 component2，无法使用 Ant Design Mini 组件库');
    console.log(
      '请在 IDE 中的 详情 > 项目配置 中，勾选 启用 component2 编译 。'
    );
    console.log('参考文档 https://mini.ant.design/guide/migration-v2');
    throw new Error('Ant Design Mini 组件库需要依赖 component2 特性');
  }
}

assertComponent2();
