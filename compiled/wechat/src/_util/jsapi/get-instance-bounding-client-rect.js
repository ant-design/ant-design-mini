export function getInstanceBoundingClientRect(instance, selector) {
    console.log('<<<<selector', selector);
    return new Promise(function (resolve) {
        instance
            .createSelectorQuery()
            .select(selector)
            .boundingClientRect()
            .exec(function (ret) {
            console.log('<<<<ret', ret);
            if (ret && ret[0]) {
                resolve(ret[0]);
            }
            else {
                resolve(null);
            }
        });
    });
}
