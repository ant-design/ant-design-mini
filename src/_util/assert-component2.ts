function assertComponent2() {
  const component2 = my.canIUse('component2');
  if (!component2) {
    console.log('监测到项目未开启 component2');
    console.log(
      '请在 IDE 中的 详情 > 项目配置 中，勾选 启用 component2 编译 。'
    );
    console.log('参考文档 https://mini.ant.design/guide/migration-v2');
    throw new Error('需要使用component2。');
  }
}

assertComponent2();
