function assertComponent2() {
  const component2 = my.canIUse('component2');
  if (!component2) {
    throw new Error('需要使用component2');
  }
}

assertComponent2();
