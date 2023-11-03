export function getInstanceBoundingClientRect(instance: any, selector: string) {
  return new Promise<any>((resolve, reject) => {
    instance
      .createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        } else {
          reject();
        }
      });
  });
}
