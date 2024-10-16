export function getInstanceBoundingClientRect(instance, selector) {
    return new Promise(function (resolve) {
        instance
            .createSelectorQuery()
            .select(selector)
            .boundingClientRect()
            .exec(function (ret) {
            if (ret && ret[0]) {
                resolve(ret[0]);
            }
            else {
                resolve(null);
            }
        });
    });
}
