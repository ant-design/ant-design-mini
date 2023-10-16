/* eslint-disable @typescript-eslint/no-explicit-any */
export default function fmtEvent(props, e) {
    if (e === void 0) { e = {}; }
    var dataset = {};
    for (var key in props) {
        if (/data-/gi.test(key)) {
            dataset[key.replace(/data-/gi, '')] = props[key];
        }
    }
    return Object.assign({}, e, {
        currentTarget: { dataset: dataset },
        target: { dataset: dataset, targetDataset: dataset },
    });
}
