export function getInstanceBoundingClientRect(instance: any, selector: string) {
  console.log('-------', selector);
  return new Promise<any>((resolve) => {
    instance
      .createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        } else {
          resolve(null);
        }
      });
  });
}
