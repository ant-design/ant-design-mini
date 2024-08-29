export function getInstanceBoundingClientRect(instance: any, selector: string) {
  console.log('<<<<selector', selector)
  return new Promise<any>((resolve) => {
    instance
      .createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        console.log('<<<<ret', ret);
        if (ret && ret[0]) {
          resolve(ret[0]);
        } else {
          resolve(null);
        }
      });
  });
}
